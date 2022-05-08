import React, { useState, useEffect } from "react";
import { View, Text, Input, Button } from "@tarojs/components";
import "./index.scss";
export default function index(props) {
  const [expValue, setExpValue] = useState();
  const [getValue, setGetValue] = useState();
  let getExpValue = event => {
    // console.log(event.detail.value);
    setExpValue(event.detail.value);
  };
  let getGetValue = event => {
    // console.log(event.detail.value);
    setGetValue(event.detail.value);
  };
  const obj = {
    expValue: expValue,
    getValue: getValue
  };
  const { getPrice } = props;
  useEffect(() => {
    getPrice(obj);
  }, [expValue, getValue]);
  return (
    <View className="center-box">
      <View className="exp-price">
        <Text>期望价格</Text>
        <View>
          <Input
            value={expValue}
            onInput={getExpValue}
            type="digit"
            placeholder="请输入"
            className="exp-input"
          />
        </View>
      </View>
      <View className="get-price">
        <Text>购入价格</Text>
        <View>
          <Input
            value={getValue}
            onInput={getGetValue}
            type="digit"
            placeholder="请输入"
            className="get-input"
          />
        </View>
      </View>
    </View>
  );
}
