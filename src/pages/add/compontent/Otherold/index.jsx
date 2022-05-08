import React, { useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import Header from "./compontent/Header";
import Center from "./compontent/Center";
import Bottom from "./compontent/Bottom";
export default function index() {
  // const [expValue, setExpValue] = useState("");
  var id = Taro.getCurrentInstance().router.params.msg;
  console.log(id);
  const msgArr = id.split(",");
  console.log(msgArr);
  const [msgObj, setMsgObj] = useState({ msg: [] });
  const [priceObj, setPriceObj] = useState({
    expValue: Number,
    getValue: Number
  });

  let getThePrice = e => {
    console.log(e);
    const { expValue, getValue } = e;
    setPriceObj({ expValue, getValue });
  };
  let getTheMsg = e => {
    // console.log(e);
    setMsgObj({ msg: e });
  };
  return (
    <View className="border-box">
      <Header msg={msgArr} getMsg={getTheMsg} />
      <Center getPrice={getThePrice} />
      <Bottom priceData={priceObj} msgData={msgObj} />
      {/* <Bottom data={oldThingMess} /> */}
    </View>
  );
}
