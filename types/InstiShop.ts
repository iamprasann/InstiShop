/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace InstiShop {
  export type ItemStruct = {
    name: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    media: PromiseOrValue<string>;
    location: PromiseOrValue<string>;
    buyPrice: PromiseOrValue<BigNumberish>;
    rentPricePerDay: PromiseOrValue<BigNumberish>;
    owner: PromiseOrValue<string>;
    validTill: PromiseOrValue<BigNumberish>;
    renter: PromiseOrValue<string>;
  };

  export type ItemStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string
  ] & {
    name: string;
    description: string;
    media: string;
    location: string;
    buyPrice: BigNumber;
    rentPricePerDay: BigNumber;
    owner: string;
    validTill: BigNumber;
    renter: string;
  };
}

export interface InstiShopInterface extends utils.Interface {
  functions: {
    "addItem(string,string,string,string,uint256,uint256)": FunctionFragment;
    "buyItem(uint256)": FunctionFragment;
    "getItems()": FunctionFragment;
    "getItemsByOwner(address)": FunctionFragment;
    "idToItem(uint256)": FunctionFragment;
    "rentItem(uint256,uint256)": FunctionFragment;
    "returnItem(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addItem"
      | "buyItem"
      | "getItems"
      | "getItemsByOwner"
      | "idToItem"
      | "rentItem"
      | "returnItem"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addItem",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buyItem",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getItems", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getItemsByOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "idToItem",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rentItem",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "returnItem",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getItems", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getItemsByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "idToItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rentItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "returnItem", data: BytesLike): Result;

  events: {
    "ItemAdded(address,tuple)": EventFragment;
    "ItemOwnershipChanged(address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ItemAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemOwnershipChanged"): EventFragment;
}

export interface ItemAddedEventObject {
  owner: string;
  post: InstiShop.ItemStructOutput;
}
export type ItemAddedEvent = TypedEvent<
  [string, InstiShop.ItemStructOutput],
  ItemAddedEventObject
>;

export type ItemAddedEventFilter = TypedEventFilter<ItemAddedEvent>;

export interface ItemOwnershipChangedEventObject {
  owner: string;
  item: InstiShop.ItemStructOutput;
}
export type ItemOwnershipChangedEvent = TypedEvent<
  [string, InstiShop.ItemStructOutput],
  ItemOwnershipChangedEventObject
>;

export type ItemOwnershipChangedEventFilter =
  TypedEventFilter<ItemOwnershipChangedEvent>;

export interface InstiShop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InstiShopInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addItem(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      media: PromiseOrValue<string>,
      location: PromiseOrValue<string>,
      rentPricePerDay: PromiseOrValue<BigNumberish>,
      buyPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getItems(
      overrides?: CallOverrides
    ): Promise<[InstiShop.ItemStructOutput[]]>;

    getItemsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[InstiShop.ItemStructOutput[]]>;

    idToItem(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string
      ] & {
        name: string;
        description: string;
        media: string;
        location: string;
        buyPrice: BigNumber;
        rentPricePerDay: BigNumber;
        owner: string;
        validTill: BigNumber;
        renter: string;
      }
    >;

    rentItem(
      id: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addItem(
    name: PromiseOrValue<string>,
    description: PromiseOrValue<string>,
    media: PromiseOrValue<string>,
    location: PromiseOrValue<string>,
    rentPricePerDay: PromiseOrValue<BigNumberish>,
    buyPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyItem(
    id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getItems(overrides?: CallOverrides): Promise<InstiShop.ItemStructOutput[]>;

  getItemsByOwner(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<InstiShop.ItemStructOutput[]>;

  idToItem(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      string
    ] & {
      name: string;
      description: string;
      media: string;
      location: string;
      buyPrice: BigNumber;
      rentPricePerDay: BigNumber;
      owner: string;
      validTill: BigNumber;
      renter: string;
    }
  >;

  rentItem(
    id: PromiseOrValue<BigNumberish>,
    daysToRent: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnItem(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addItem(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      media: PromiseOrValue<string>,
      location: PromiseOrValue<string>,
      rentPricePerDay: PromiseOrValue<BigNumberish>,
      buyPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getItems(overrides?: CallOverrides): Promise<InstiShop.ItemStructOutput[]>;

    getItemsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<InstiShop.ItemStructOutput[]>;

    idToItem(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string
      ] & {
        name: string;
        description: string;
        media: string;
        location: string;
        buyPrice: BigNumber;
        rentPricePerDay: BigNumber;
        owner: string;
        validTill: BigNumber;
        renter: string;
      }
    >;

    rentItem(
      id: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    returnItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ItemAdded(address,tuple)"(
      owner?: PromiseOrValue<string> | null,
      post?: null
    ): ItemAddedEventFilter;
    ItemAdded(
      owner?: PromiseOrValue<string> | null,
      post?: null
    ): ItemAddedEventFilter;

    "ItemOwnershipChanged(address,tuple)"(
      owner?: PromiseOrValue<string> | null,
      item?: InstiShop.ItemStruct | null
    ): ItemOwnershipChangedEventFilter;
    ItemOwnershipChanged(
      owner?: PromiseOrValue<string> | null,
      item?: InstiShop.ItemStruct | null
    ): ItemOwnershipChangedEventFilter;
  };

  estimateGas: {
    addItem(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      media: PromiseOrValue<string>,
      location: PromiseOrValue<string>,
      rentPricePerDay: PromiseOrValue<BigNumberish>,
      buyPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getItems(overrides?: CallOverrides): Promise<BigNumber>;

    getItemsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idToItem(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rentItem(
      id: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addItem(
      name: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      media: PromiseOrValue<string>,
      location: PromiseOrValue<string>,
      rentPricePerDay: PromiseOrValue<BigNumberish>,
      buyPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getItems(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getItemsByOwner(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    idToItem(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rentItem(
      id: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnItem(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
