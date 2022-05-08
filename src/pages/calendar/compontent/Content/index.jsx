import { View } from "@tarojs/components";
import "./index.scss";
import Left from "./Left";
import Right from "./Right";
export default function(props) {
  const courseDate = props.courseDate;
  const thisWeek = props.thisWeek;
  return (
    <View className="content">
      <Left />
      <Right courseDate={courseDate} thisWeek={thisWeek} />
    </View>
  );
}
