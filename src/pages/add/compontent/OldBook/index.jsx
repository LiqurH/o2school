// import { useState } from "react";
// import { View, Button } from "@tarojs/components";
// import { AtSteps } from "taro-ui";
// import "./index.scss";
// import { reLaunchPage } from "../../tools";
// const scanBookUrl = "/pages/add/compontent/OldBook/compontent/Scanbook/index";
// const supBookUrl = "/pages/add/compontent/OldBook/compontent/Supbook/index";
// const pubBookUrl = "/pages/add/compontent/OldBook/compontent/Pubbook/index";
// export default function index() {
//   return (
//     <View className="border-box">
//       <View className="content-box">
//         <View
//           onClick={() => {
//             reLaunchPage(scanBookUrl);
//           }}
//         >
//           点击扫码
//         </View>
//         {/* <View
//           onClick={() => {
//             reLaunchPage(supBookUrl);
//           }}
//         >
//           保存
//         </View>
//         <View
//           onClick={() => {
//             reLaunchPage(pubBookUrl);
//           }}
//         >
//           再来一本
//         </View> */}
//       </View>
//     </View>
//   );
// }

import React from "react";
import { AtIcon } from "taro-ui";
import { View, Button, Input, Text } from "@tarojs/components";
import "./index.scss";
import Header from "./compontent/Header/index";
import { toOtherPage } from "../../../tool/tools";
const supBookUrl = "/pages/add/compontent/OldBook/compontent/Supbook/index";
export default function index() {
  return (
    <View className="border-box">
      <Header state={0} />
      <View className="content-box">
        <View className="head-box">
          <Input
            type="number"
            placeholder="输入ISBN码"
            className="isbn-input"
          />
        </View>
        <View className="text-box">111</View>
        <View className="bottom-box">
          <Text>大家可以直接通过摄像头扫描出</Text>
          <Text>ISBN码</Text>
          <Text>
            <AtIcon
              prefixClass="ri"
              value="ri-arrow-down-s-fill"
              size="10"
              color="#999"
            ></AtIcon>
          </Text>
        </View>
        <View className="tosuppage">
          <Button>
            <Text>点击扫码</Text>
          </Button>
          <Button
            onClick={() => {
              toOtherPage(supBookUrl, "123");
            }}
          >
            <Text>提交</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
{
  /* <Button
          onClick={() => {
            toOtherPage(supBookUrl);
          }}
        >
          跳转一
        </Button> */
}
