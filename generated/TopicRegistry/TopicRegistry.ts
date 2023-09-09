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

export class PoolTopic extends ethereum.Event {
  get params(): PoolTopic__Params {
    return new PoolTopic__Params(this);
  }
}

export class PoolTopic__Params {
  _event: PoolTopic;

  constructor(event: PoolTopic) {
    this._event = event;
  }

  get topicId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TopicRegistry__getTopicResultValue0Struct extends ethereum.Tuple {
  get title(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get maintainer(): Address {
    return this[2].toAddress();
  }

  get evaluator(): Address {
    return this[3].toAddress();
  }

  get state(): i32 {
    return this[4].toI32();
  }
}

export class TopicRegistry__topicsResult {
  value0: string;
  value1: string;
  value2: Address;
  value3: Address;
  value4: i32;

  constructor(
    value0: string,
    value1: string,
    value2: Address,
    value3: Address,
    value4: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    return map;
  }

  getTitle(): string {
    return this.value0;
  }

  getDescription(): string {
    return this.value1;
  }

  getMaintainer(): Address {
    return this.value2;
  }

  getEvaluator(): Address {
    return this.value3;
  }

  getState(): i32 {
    return this.value4;
  }
}

export class TopicRegistry extends ethereum.SmartContract {
  static bind(address: Address): TopicRegistry {
    return new TopicRegistry("TopicRegistry", address);
  }

  createTopic(
    _title: string,
    _description: string,
    _maintainer: Address,
    _evaluator: Address
  ): BigInt {
    let result = super.call(
      "createTopic",
      "createTopic(string,string,address,address):(uint256)",
      [
        ethereum.Value.fromString(_title),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromAddress(_maintainer),
        ethereum.Value.fromAddress(_evaluator)
      ]
    );

    return result[0].toBigInt();
  }

  try_createTopic(
    _title: string,
    _description: string,
    _maintainer: Address,
    _evaluator: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createTopic",
      "createTopic(string,string,address,address):(uint256)",
      [
        ethereum.Value.fromString(_title),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromAddress(_maintainer),
        ethereum.Value.fromAddress(_evaluator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTopic(topicId: BigInt): TopicRegistry__getTopicResultValue0Struct {
    let result = super.call(
      "getTopic",
      "getTopic(uint256):((string,string,address,address,uint8))",
      [ethereum.Value.fromUnsignedBigInt(topicId)]
    );

    return changetype<TopicRegistry__getTopicResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getTopic(
    topicId: BigInt
  ): ethereum.CallResult<TopicRegistry__getTopicResultValue0Struct> {
    let result = super.tryCall(
      "getTopic",
      "getTopic(uint256):((string,string,address,address,uint8))",
      [ethereum.Value.fromUnsignedBigInt(topicId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TopicRegistry__getTopicResultValue0Struct>(value[0].toTuple())
    );
  }

  topics(param0: BigInt): TopicRegistry__topicsResult {
    let result = super.call(
      "topics",
      "topics(uint256):(string,string,address,address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TopicRegistry__topicsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toI32()
    );
  }

  try_topics(param0: BigInt): ethereum.CallResult<TopicRegistry__topicsResult> {
    let result = super.tryCall(
      "topics",
      "topics(uint256):(string,string,address,address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TopicRegistry__topicsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toI32()
      )
    );
  }
}

export class CreateTopicCall extends ethereum.Call {
  get inputs(): CreateTopicCall__Inputs {
    return new CreateTopicCall__Inputs(this);
  }

  get outputs(): CreateTopicCall__Outputs {
    return new CreateTopicCall__Outputs(this);
  }
}

export class CreateTopicCall__Inputs {
  _call: CreateTopicCall;

  constructor(call: CreateTopicCall) {
    this._call = call;
  }

  get _title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _maintainer(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _evaluator(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateTopicCall__Outputs {
  _call: CreateTopicCall;

  constructor(call: CreateTopicCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DisableTopicCall extends ethereum.Call {
  get inputs(): DisableTopicCall__Inputs {
    return new DisableTopicCall__Inputs(this);
  }

  get outputs(): DisableTopicCall__Outputs {
    return new DisableTopicCall__Outputs(this);
  }
}

export class DisableTopicCall__Inputs {
  _call: DisableTopicCall;

  constructor(call: DisableTopicCall) {
    this._call = call;
  }

  get topicId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DisableTopicCall__Outputs {
  _call: DisableTopicCall;

  constructor(call: DisableTopicCall) {
    this._call = call;
  }
}

export class EnableTopicCall extends ethereum.Call {
  get inputs(): EnableTopicCall__Inputs {
    return new EnableTopicCall__Inputs(this);
  }

  get outputs(): EnableTopicCall__Outputs {
    return new EnableTopicCall__Outputs(this);
  }
}

export class EnableTopicCall__Inputs {
  _call: EnableTopicCall;

  constructor(call: EnableTopicCall) {
    this._call = call;
  }

  get topicId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EnableTopicCall__Outputs {
  _call: EnableTopicCall;

  constructor(call: EnableTopicCall) {
    this._call = call;
  }
}
