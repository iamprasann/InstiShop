import { expect } from "chai";
import { network, ethers, deployments, getNamedAccounts } from "hardhat";

import type { InstiShop } from "../types";

const item = {
  name: "Toothbrush",
  description: "My used Toothbrush",
  media: "iruasgdkjba",
  location: "My room",
  rentPricePerDay: ethers.utils.parseEther("0.001"),
  buyPrice: ethers.utils.parseEther("0.1"),
};

describe("InstiShop", () => {
  let instiShop: InstiShop;
  let deployer: string;
  let alice: string;
  let bob: string;

  before(async () => {
    ({ deployer, alice, bob } = await getNamedAccounts());
    await deployments.fixture(["InstiShop"]);
    instiShop = await ethers.getContract("InstiShop", deployer);
  });

  describe("Create and Read posts", () => {
    it("Alice should not have any item initially", () =>
      expect(
        instiShop
          .connect(ethers.provider.getSigner(alice))
          .addItem(
            item.name,
            item.description,
            item.media,
            item.location,
            item.rentPricePerDay,
            item.buyPrice
          )
      ).to.emit(instiShop, "ItemAdded"));

    it("Should allow Bob to rent item 1", async () => {
      await expect(
        instiShop.connect(ethers.provider.getSigner(bob)).rentItem(1, 10, {
          value: item.rentPricePerDay.mul(10),
        })
      ).to.emit(instiShop, "ItemOwnershipTransferred");
    });

    it("Should be able to read Alice's items", async () => {
      const posts = await instiShop
        .connect(ethers.provider.getSigner(alice))
        .getItemsByOwner(alice);
      expect(posts.length).to.equal(1);
      expect(posts[0].name).to.equal(item.name);
      expect(posts[0].description).to.equal(item.description);
      expect(posts[0].media).to.equal(item.media);
      expect(posts[0].location).to.equal(item.location);
      expect(posts[0].rentPricePerDay).to.equal(item.rentPricePerDay);
      expect(posts[0].buyPrice).to.equal(item.buyPrice);

      console.log(posts[0].renter);
      // expect(posts[0].owner).to.equal(alice);
      // expect(posts[0].renter).to.equal(bob);
    });

    it("Should be able to read Bob's items", async () => {
      const [post1] = await instiShop
        .connect(ethers.provider.getSigner(bob))
        .getItems();

      const [post2] = await instiShop
        .connect(ethers.provider.getSigner(bob))
        .getItemsByRenter(bob);

      expect(post1).to.deep.equal(post2);
    });

    it("Should be able to return item 1 to Alice", async () =>
      expect(
        instiShop.connect(ethers.provider.getSigner(bob)).returnItem(1)
      ).to.emit(instiShop, "ItemOwnershipTransferred"));

    it("Should be able to sell item 1 to Bob", () =>
      expect(
        instiShop
          .connect(ethers.provider.getSigner(alice))
          .buyItem(1, { value: item.buyPrice })
      ).to.emit(instiShop, "ItemOwnershipTransferred"));
  });
});
