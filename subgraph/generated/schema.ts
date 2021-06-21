// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity", id.toString(), this);
  }

  static load(id: string): ExampleEntity | null {
    return store.get("ExampleEntity", id) as ExampleEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approved(): Bytes {
    let value = this.get("approved");
    return value.toBytes();
  }

  set approved(value: Bytes) {
    this.set("approved", Value.fromBytes(value));
  }
}

export class All extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save All entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save All entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("All", id.toString(), this);
  }

  static load(id: string): All | null {
    return store.get("All", id) as All | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numTokenContracts(): BigInt {
    let value = this.get("numTokenContracts");
    return value.toBigInt();
  }

  set numTokenContracts(value: BigInt) {
    this.set("numTokenContracts", Value.fromBigInt(value));
  }

  get numTokens(): BigInt {
    let value = this.get("numTokens");
    return value.toBigInt();
  }

  set numTokens(value: BigInt) {
    this.set("numTokens", Value.fromBigInt(value));
  }

  get numOwners(): BigInt {
    let value = this.get("numOwners");
    return value.toBigInt();
  }

  set numOwners(value: BigInt) {
    this.set("numOwners", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get mintTime(): BigInt {
    let value = this.get("mintTime");
    return value.toBigInt();
  }

  set mintTime(value: BigInt) {
    this.set("mintTime", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }
}

export class TokenContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenContract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenContract", id.toString(), this);
  }

  static load(id: string): TokenContract | null {
    return store.get("TokenContract", id) as TokenContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get doAllAddressesOwnTheirIdByDefault(): boolean {
    let value = this.get("doAllAddressesOwnTheirIdByDefault");
    return value.toBoolean();
  }

  set doAllAddressesOwnTheirIdByDefault(value: boolean) {
    this.set("doAllAddressesOwnTheirIdByDefault", Value.fromBoolean(value));
  }

  get supportsEIP721Metadata(): boolean {
    let value = this.get("supportsEIP721Metadata");
    return value.toBoolean();
  }

  set supportsEIP721Metadata(value: boolean) {
    this.set("supportsEIP721Metadata", Value.fromBoolean(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get numTokens(): BigInt {
    let value = this.get("numTokens");
    return value.toBigInt();
  }

  set numTokens(value: BigInt) {
    this.set("numTokens", Value.fromBigInt(value));
  }

  get numOwners(): BigInt {
    let value = this.get("numOwners");
    return value.toBigInt();
  }

  set numOwners(value: BigInt) {
    this.set("numOwners", Value.fromBigInt(value));
  }
}

export class TokenInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenInfo entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenInfo entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenInfo", id.toString(), this);
  }

  static load(id: string): TokenInfo | null {
    return store.get("TokenInfo", id) as TokenInfo | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get class_id(): BigInt {
    let value = this.get("class_id");
    return value.toBigInt();
  }

  set class_id(value: BigInt) {
    this.set("class_id", Value.fromBigInt(value));
  }

  get size(): BigInt {
    let value = this.get("size");
    return value.toBigInt();
  }

  set size(value: BigInt) {
    this.set("size", Value.fromBigInt(value));
  }
}

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Owner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Owner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Owner", id.toString(), this);
  }

  static load(id: string): Owner | null {
    return store.get("Owner", id) as Owner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get numTokens(): BigInt {
    let value = this.get("numTokens");
    return value.toBigInt();
  }

  set numTokens(value: BigInt) {
    this.set("numTokens", Value.fromBigInt(value));
  }
}

export class OwnerPerTokenContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save OwnerPerTokenContract entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnerPerTokenContract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnerPerTokenContract", id.toString(), this);
  }

  static load(id: string): OwnerPerTokenContract | null {
    return store.get(
      "OwnerPerTokenContract",
      id
    ) as OwnerPerTokenContract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get numTokens(): BigInt {
    let value = this.get("numTokens");
    return value.toBigInt();
  }

  set numTokens(value: BigInt) {
    this.set("numTokens", Value.fromBigInt(value));
  }
}

export class Lock extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Lock entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Lock entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Lock", id.toString(), this);
  }

  static load(id: string): Lock | null {
    return store.get("Lock", id) as Lock | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get redeemed(): boolean {
    let value = this.get("redeemed");
    return value.toBoolean();
  }

  set redeemed(value: boolean) {
    this.set("redeemed", Value.fromBoolean(value));
  }
}

export class TokenTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenTransaction", id.toString(), this);
  }

  static load(id: string): TokenTransaction | null {
    return store.get("TokenTransaction", id) as TokenTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tx_hash(): Bytes {
    let value = this.get("tx_hash");
    return value.toBytes();
  }

  set tx_hash(value: Bytes) {
    this.set("tx_hash", Value.fromBytes(value));
  }
}
