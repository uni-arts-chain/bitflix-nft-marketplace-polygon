// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CloseOffer extends ethereum.Event {
  get params(): CloseOffer__Params {
    return new CloseOffer__Params(this);
  }
}

export class CloseOffer__Params {
  _event: CloseOffer;

  constructor(event: CloseOffer) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ItemBought extends ethereum.Event {
  get params(): ItemBought__Params {
    return new ItemBought__Params(this);
  }
}

export class ItemBought__Params {
  _event: ItemBought;

  constructor(event: ItemBought) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NewOffer extends ethereum.Event {
  get params(): NewOffer__Params {
    return new NewOffer__Params(this);
  }
}

export class NewOffer__Params {
  _event: NewOffer;

  constructor(event: NewOffer) {
    this._event = event;
  }

  get offerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Marketplace__offersResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: Address;
  value4: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: Address,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }
}

export class Marketplace__getOfferResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: Address;
  value4: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: Address,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
  }

  bitfilxNFTContractAddress(): Address {
    let result = super.call(
      "bitfilxNFTContractAddress",
      "bitfilxNFTContractAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_bitfilxNFTContractAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "bitfilxNFTContractAddress",
      "bitfilxNFTContractAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isMarketPlaceOpen(): boolean {
    let result = super.call(
      "isMarketPlaceOpen",
      "isMarketPlaceOpen():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isMarketPlaceOpen(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isMarketPlaceOpen",
      "isMarketPlaceOpen():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lockPointRate(): BigInt {
    let result = super.call("lockPointRate", "lockPointRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lockPointRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lockPointRate",
      "lockPointRate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  marketplaceFee(): BigInt {
    let result = super.call("marketplaceFee", "marketplaceFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_marketplaceFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "marketplaceFee",
      "marketplaceFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minPrice(): BigInt {
    let result = super.call("minPrice", "minPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minPrice", "minPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  offers(param0: BigInt): Marketplace__offersResult {
    let result = super.call(
      "offers",
      "offers(uint256):(uint256,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Marketplace__offersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBoolean()
    );
  }

  try_offers(param0: BigInt): ethereum.CallResult<Marketplace__offersResult> {
    let result = super.tryCall(
      "offers",
      "offers(uint256):(uint256,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__offersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBoolean()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  payCoinContractAddress(): Address {
    let result = super.call(
      "payCoinContractAddress",
      "payCoinContractAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_payCoinContractAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "payCoinContractAddress",
      "payCoinContractAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  payCoinSymbol(): string {
    let result = super.call("payCoinSymbol", "payCoinSymbol():(string)", []);

    return result[0].toString();
  }

  try_payCoinSymbol(): ethereum.CallResult<string> {
    let result = super.tryCall("payCoinSymbol", "payCoinSymbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  pointContractAddress(): Address {
    let result = super.call(
      "pointContractAddress",
      "pointContractAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_pointContractAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pointContractAddress",
      "pointContractAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usersToOffersId(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "usersToOffersId",
      "usersToOffersId(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_usersToOffersId(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "usersToOffersId",
      "usersToOffersId(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOffersTotal(): BigInt {
    let result = super.call("getOffersTotal", "getOffersTotal():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getOffersTotal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOffersTotal",
      "getOffersTotal():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOffer(offerId: BigInt): Marketplace__getOfferResult {
    let result = super.call(
      "getOffer",
      "getOffer(uint256):(uint256,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(offerId)]
    );

    return new Marketplace__getOfferResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBoolean()
    );
  }

  try_getOffer(
    offerId: BigInt
  ): ethereum.CallResult<Marketplace__getOfferResult> {
    let result = super.tryCall(
      "getOffer",
      "getOffer(uint256):(uint256,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(offerId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__getOfferResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBoolean()
      )
    );
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class CreateOfferCall extends ethereum.Call {
  get inputs(): CreateOfferCall__Inputs {
    return new CreateOfferCall__Inputs(this);
  }

  get outputs(): CreateOfferCall__Outputs {
    return new CreateOfferCall__Outputs(this);
  }
}

export class CreateOfferCall__Inputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }

  get itemId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateOfferCall__Outputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }
}

export class CloseOfferCall extends ethereum.Call {
  get inputs(): CloseOfferCall__Inputs {
    return new CloseOfferCall__Inputs(this);
  }

  get outputs(): CloseOfferCall__Outputs {
    return new CloseOfferCall__Outputs(this);
  }
}

export class CloseOfferCall__Inputs {
  _call: CloseOfferCall;

  constructor(call: CloseOfferCall) {
    this._call = call;
  }

  get offerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CloseOfferCall__Outputs {
  _call: CloseOfferCall;

  constructor(call: CloseOfferCall) {
    this._call = call;
  }
}

export class BuyItemCall extends ethereum.Call {
  get inputs(): BuyItemCall__Inputs {
    return new BuyItemCall__Inputs(this);
  }

  get outputs(): BuyItemCall__Outputs {
    return new BuyItemCall__Outputs(this);
  }
}

export class BuyItemCall__Inputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }

  get offerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyItemCall__Outputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }
}

export class SetBitflixNFTContractAddressCall extends ethereum.Call {
  get inputs(): SetBitflixNFTContractAddressCall__Inputs {
    return new SetBitflixNFTContractAddressCall__Inputs(this);
  }

  get outputs(): SetBitflixNFTContractAddressCall__Outputs {
    return new SetBitflixNFTContractAddressCall__Outputs(this);
  }
}

export class SetBitflixNFTContractAddressCall__Inputs {
  _call: SetBitflixNFTContractAddressCall;

  constructor(call: SetBitflixNFTContractAddressCall) {
    this._call = call;
  }

  get newBitflixNFTContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBitflixNFTContractAddressCall__Outputs {
  _call: SetBitflixNFTContractAddressCall;

  constructor(call: SetBitflixNFTContractAddressCall) {
    this._call = call;
  }
}

export class SetPayCoinContractAddressCall extends ethereum.Call {
  get inputs(): SetPayCoinContractAddressCall__Inputs {
    return new SetPayCoinContractAddressCall__Inputs(this);
  }

  get outputs(): SetPayCoinContractAddressCall__Outputs {
    return new SetPayCoinContractAddressCall__Outputs(this);
  }
}

export class SetPayCoinContractAddressCall__Inputs {
  _call: SetPayCoinContractAddressCall;

  constructor(call: SetPayCoinContractAddressCall) {
    this._call = call;
  }

  get newpayCoinSymbol(): string {
    return this._call.inputValues[0].value.toString();
  }

  get newPayCoinContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetPayCoinContractAddressCall__Outputs {
  _call: SetPayCoinContractAddressCall;

  constructor(call: SetPayCoinContractAddressCall) {
    this._call = call;
  }
}

export class SetPointContractAddressCall extends ethereum.Call {
  get inputs(): SetPointContractAddressCall__Inputs {
    return new SetPointContractAddressCall__Inputs(this);
  }

  get outputs(): SetPointContractAddressCall__Outputs {
    return new SetPointContractAddressCall__Outputs(this);
  }
}

export class SetPointContractAddressCall__Inputs {
  _call: SetPointContractAddressCall;

  constructor(call: SetPointContractAddressCall) {
    this._call = call;
  }

  get newPointContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPointContractAddressCall__Outputs {
  _call: SetPointContractAddressCall;

  constructor(call: SetPointContractAddressCall) {
    this._call = call;
  }
}

export class OpenMarketplaceCall extends ethereum.Call {
  get inputs(): OpenMarketplaceCall__Inputs {
    return new OpenMarketplaceCall__Inputs(this);
  }

  get outputs(): OpenMarketplaceCall__Outputs {
    return new OpenMarketplaceCall__Outputs(this);
  }
}

export class OpenMarketplaceCall__Inputs {
  _call: OpenMarketplaceCall;

  constructor(call: OpenMarketplaceCall) {
    this._call = call;
  }
}

export class OpenMarketplaceCall__Outputs {
  _call: OpenMarketplaceCall;

  constructor(call: OpenMarketplaceCall) {
    this._call = call;
  }
}

export class CloseMarketplaceCall extends ethereum.Call {
  get inputs(): CloseMarketplaceCall__Inputs {
    return new CloseMarketplaceCall__Inputs(this);
  }

  get outputs(): CloseMarketplaceCall__Outputs {
    return new CloseMarketplaceCall__Outputs(this);
  }
}

export class CloseMarketplaceCall__Inputs {
  _call: CloseMarketplaceCall;

  constructor(call: CloseMarketplaceCall) {
    this._call = call;
  }
}

export class CloseMarketplaceCall__Outputs {
  _call: CloseMarketplaceCall;

  constructor(call: CloseMarketplaceCall) {
    this._call = call;
  }
}

export class SetLockPointRateCall extends ethereum.Call {
  get inputs(): SetLockPointRateCall__Inputs {
    return new SetLockPointRateCall__Inputs(this);
  }

  get outputs(): SetLockPointRateCall__Outputs {
    return new SetLockPointRateCall__Outputs(this);
  }
}

export class SetLockPointRateCall__Inputs {
  _call: SetLockPointRateCall;

  constructor(call: SetLockPointRateCall) {
    this._call = call;
  }

  get newLockPointRate(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLockPointRateCall__Outputs {
  _call: SetLockPointRateCall;

  constructor(call: SetLockPointRateCall) {
    this._call = call;
  }
}

export class WithdrawFundsCall extends ethereum.Call {
  get inputs(): WithdrawFundsCall__Inputs {
    return new WithdrawFundsCall__Inputs(this);
  }

  get outputs(): WithdrawFundsCall__Outputs {
    return new WithdrawFundsCall__Outputs(this);
  }
}

export class WithdrawFundsCall__Inputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }
}

export class WithdrawFundsCall__Outputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }
}

export class WithdrawCoinsCall extends ethereum.Call {
  get inputs(): WithdrawCoinsCall__Inputs {
    return new WithdrawCoinsCall__Inputs(this);
  }

  get outputs(): WithdrawCoinsCall__Outputs {
    return new WithdrawCoinsCall__Outputs(this);
  }
}

export class WithdrawCoinsCall__Inputs {
  _call: WithdrawCoinsCall;

  constructor(call: WithdrawCoinsCall) {
    this._call = call;
  }
}

export class WithdrawCoinsCall__Outputs {
  _call: WithdrawCoinsCall;

  constructor(call: WithdrawCoinsCall) {
    this._call = call;
  }
}
