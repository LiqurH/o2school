import { useState, useEffect } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Header from "../Header/index";
import { AtInputNumber, AtTag } from "taro-ui";
import { toOtherPage } from "../../../../../tool/tools";
export default function index(props) {
  useEffect(option => {
    console.log(option);
    console.log(this);
  });
  console.log(props);
  const newlevel = ["九成新", "全新", "八成新", "七成新"];
  const [price, setPrice] = useState(6);
  const [activeIndex, setActive] = useState(false);
  const pubBookUrl = "/pages/add/compontent/OldBook/compontent/Pubbook/index";
  let handleChange = value => {
    setPrice(value);
  };
  // let getPrimary = target => {
  //   console.log(target);
  //   target.active = 'false'
  // };
  return (
    <View className="border-box">
      <Header state={1} />
      <View className="content-box">
        <View className="header-box">
          <View className="header-left">1</View>
          <View className="header-right">
            <Text className="book-title">程序员的数学</Text>
            <View className="book-author">
              <Text>爱上等哈</Text>
              <Text></Text>
            </View>
            <Text className="book-text">
              爱程序员的数学上等哈程序员的数学程序员的数学程序员的学上等哈程序员的数学程序员的数学程序员的学上等哈程序员的数学程序员的数学程序员的数学程序员的数学程序员的数学程序员的数学程序员学程序员的数学程序员的数的数学程序员的数学
            </Text>
            <Text className="perch" />
          </View>
        </View>
        <View className="masster-box">
          <View className="content">
            <View className="content-text">
              <View className="header">
                <View className="title">价格(元)</View>
                <View className="addprice">
                  <AtInputNumber
                    className="price-add"
                    min={0}
                    max={10}
                    step={1}
                    width={100}
                    value={price}
                    onChange={handleChange}
                  />
                </View>
              </View>
              <View className="center">
                <View className="title">几成新</View>
                <View className="new-level">
                  {newlevel.map((item, index) => (
                    <View>
                      <AtTag
                        className="attag"
                        type="primary"
                        active={activeIndex === index}
                        name={item}
                        onClick={e => {
                          console.log(e);
                          setActive(index);
                        }}
                      >
                        {item}
                      </AtTag>
                    </View>
                  ))}
                </View>
              </View>
              <View className="bottom">
                <Button
                  className="topubpage"
                  onClick={() => {
                    toOtherPage(pubBookUrl);
                  }}
                >
                  <Text>保存</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
