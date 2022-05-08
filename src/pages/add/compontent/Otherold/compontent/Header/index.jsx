import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import "./index.scss";
import { AtIcon } from "taro-ui";
import Taro, { hideLoading } from "@tarojs/taro";
import { useEffect } from "react";
export default function index(props) {
  const { msg, getMsg } = props;
  console.log(msg);
  const [msgArr, setMsgArr] = useState(msg);
  // console.log(msgArr);
  let msgNum = 9 - msgArr.length;
  console.log(msgNum);
  const getImage = async () => {
    await Taro.chooseImage({
      count: msgNum, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        setMsgArr([...msgArr, ...tempFilePaths]);
      }
    });
  };
  const showPics = item => {
    // console.log(e);
    console.log(item);
    Taro.previewImage({
      current: item, // 当前显示图片的http链接
      urls: [...msgArr] // 需要预览的图片http链接列表
    });
  };
  // console.log(msgArr);
  useEffect(() => {}, [msgNum]);
  useEffect(() => {
    // console.log(msgArr + 111);
    getMsg(msgArr);
  }, []);
  let onScrollToUpper = () => {
    console.log(111);
  };

  let onScroll = e => {
    console.log(e.detail);
  };
  return (
    <View className="header-box">
      <View className="pic-add">
        <ScrollView
          scrollX="true"
          enableFlex="true"
          scrollWithAnimation="true"
          onScrollToUpper={onScrollToUpper}
          onScroll={onScroll}
          className="pics"
        >
          {msgArr.map((item, index) => {
            return (
              <Image
                src={item}
                onClick={() => {
                  // console.log(item);
                  showPics(item);
                }}
              ></Image>
            );
          })}
        </ScrollView>
        <View className="add" onClick={getImage}>
          <Text className="pic-icon">
            <AtIcon
              prefixClass="ri"
              value="camera-3-line"
              size="40"
              color="#000"
            ></AtIcon>
          </Text>
          <Text className="letter">添加图片</Text>
        </View>
      </View>
    </View>
  );
}
