// import { useState ,useEffect } from "react";
import { View } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";
import { toOtherPage } from "../tool/tools";
import { AtIcon } from "taro-ui";
const oldBookUrl = "/pages/add/compontent/OldBook/index";
const otherOldUrl = "/pages/add/compontent/Otherold/index";
const schoolCardUrl = "/pages/add/compontent/Schoolcard/index";
export default function() {
  // const [picNum, setPicNum] = useState(0);

  let getItemPhoto = async () => {
    await Taro.chooseImage({
      count: 9, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFilePaths);
        Taro.navigateTo({
          url: `${otherOldUrl}?msg=${res.tempFilePaths}`
        });
      }
    });
  };
  return (
    <View className="content-box">
      <View className="title-click">
        <View
          className="bookold-box"
          onClick={() => {
            toOtherPage(oldBookUrl);
          }}
        >
          <View className="in-box">
            <View className="image"></View>
            <View className="letter">
              <View className="title">二手教辅</View>
              <View className="describe">扫码即可录入系统</View>
            </View>
          </View>
        </View>
        <View
          className="schoolcard-box"
          onClick={() => {
            toOtherPage(schoolCardUrl);
          }}
        >
          <View className="in-box">
            <View className="image"></View>
            <View className="letter">
              <View className="title">上传一卡通</View>
              <View className="describe">直接推送消息给丢卡者</View>
            </View>
          </View>
        </View>
        <View
          className="otherold-box"
          onClick={() => {
            getItemPhoto();
          }}
        >
          <View className="in-box">
            <View className="image"></View>
            <View className="letter">
              <View className="title">其他二手物品</View>
              <View className="describe">立即转卖换钱</View>
            </View>
          </View>
        </View>
      </View>
      <View className="quit-page">
        <View
          className="quit-button"
          onClick={() => {
            Taro.switchTab({
              url: "/pages/index/index"
            });
          }}
        >
          <AtIcon
            className="quit-icon"
            prefixClass="ri"
            value="close-line"
            size="45"
            color="#000"
          ></AtIcon>
        </View>
      </View>
    </View>
  );
}
