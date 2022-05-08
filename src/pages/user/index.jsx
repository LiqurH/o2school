import { View } from "@tarojs/components";
import NavBar from "../NavBar";
export default function() {
  return (
    <View>
      <NavBar
        background="#43BA6A"
        color="#fff"
        iconTheme="white"
        back
        renderCenter={
          <View className="trace-rowAlignCenter">自定义导航栏标题</View>
        }
      />
    </View>
  );
}
