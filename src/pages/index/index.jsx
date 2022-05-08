import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import "./index.scss";

const Header = () => (
  <View className="header">
    <Text>西邮小O❤AllSpark工作室</Text>
  </View>
);
export default function() {
  Taro.getStorage({
    key: "userMess",
    success: function(res) {
      console.log(res.data);
    }
  });
  return (
    <View>
      <Header />
      <AtButton>hello world</AtButton>
    </View>
  );
}
