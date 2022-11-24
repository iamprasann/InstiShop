import { expect } from "chai";
import { network, ethers, deployments, getNamedAccounts } from "hardhat";

import type { InstiShop } from "../types";

describe("InstiShop", () => {
  let instiShop: InstiShop;
  let deployer: string;
  let alice: string;

  before(async () => {
    ({ deployer, alice } = await getNamedAccounts());
    await deployments.fixture(["InstiShop"]);
    instiShop = await ethers.getContract("InstiShop", deployer);
  });

  // describe("Create and Read posts", () => {
  //   it("Alice should not have any posts initially", () =>
  //     expect(instiShop.getPosts(alice)).to.eventually.have.lengthOf(0));

  //   it("Should allow Alice to create a post", async () => {
  //     const tx = await instiShop
  //       .connect(await ethers.getSigner(alice))
  //       .createPost("Hello World", "", "");
  //     await tx.wait();
  //     expect(tx).to.emit(instiShop, "PostCreated");
  //   });

  //   it("Should be able to read Alice's post now", async () => {
  //     const posts = await instiShop.getPosts(alice);
  //     expect(posts).to.have.lengthOf(1);
  //     expect(posts[0].title).to.equal("Hello World");
  //     expect(posts[0].body).to.equal("");
  //   });

  //   it("Should allow Alice to update her post immediately", async () => {
  //     const tx = await instiShop
  //       .connect(await ethers.getSigner(alice))
  //       .updatePost(0, "Hello World", "I am Alice", "");
  //     await tx.wait();
  //     expect(tx).to.emit(instiShop, "PostUpdated");
  //   });

  //   it("Should prevent Alice from late updates", async () => {
  //     await network.provider.send("evm_increaseTime", [86400]);
  //     await network.provider.send("evm_mine", []);
  //     await expect(
  //       instiShop
  //         .connect(await ethers.getSigner(alice))
  //         .updatePost(0, "Hello World", "I am Alice", "")
  //     ).to.be.revertedWith("InstiShop: Post is too old to update");
  //   });

  //   it("Should prevent Alice from updating non existing posts", async () => {
  //     await expect(
  //       instiShop
  //         .connect(await ethers.getSigner(alice))
  //         .updatePost(1, "Hello World", "I am Alice", "")
  //     ).to.be.revertedWith("InstiShop: Post does not exist");
  //   });

  //   it("Should be able to post 1000 times", async () => {
  //     const promises = new Array(1000).fill(0).map(async (_, i) => {
  //       const tx = await instiShop
  //         .connect(await ethers.getSigner(alice))
  //         .createPost(`Post ${i}`, "", "");
  //       await tx.wait();
  //     });
  //     await expect(Promise.all(promises)).to.be.fulfilled;

  //     const posts = await instiShop.getPosts(alice);
  //     expect(posts).to.have.lengthOf(1001);
  //   });
  // });
});
