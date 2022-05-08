import { View, Text } from "@tarojs/components";
import "./index.scss";
export default function() {
  var myDate = new Date();
  let weekDay = myDate.getDay();
  let monthDay = myDate.getMonth();
  // console.log(myDate.getDate());
  // console.log(monthDay);
  // console.log(Date.prototype.WeekNumOfYear);
  // "周一", "周二", "周三", "周四", "周五", "周六", "周日"
  const dateOfToday = Date.now();
  const dayOfToday = (new Date().getDay() + 7 - 1) % 7;
  const daysOfThisWeek = Array.from(new Array(7)).map((_, i) => {
    const date = new Date(dateOfToday + (i - dayOfToday) * 1000 * 60 * 60 * 24);
    console.log(String(date.getDate()).padStart(2, "0"));
    return String(date.getDate()).padStart(2, "0");
  });

  const weeks = [
    {
      week: "周一",
      num: 1
    },
    {
      week: "周二",
      num: 2
    },
    {
      week: "周三",
      num: 3
    },
    {
      week: "周四",
      num: 4
    },
    {
      week: "周五",
      num: 5
    },
    {
      week: "周六",
      num: 6
    },
    {
      week: "周日",
      num: 0
    }
  ];
  return (
    <View className="week-header">
      <View className="week-in">
        <Text className="item1">{monthDay + 1}月</Text>
        {weeks.map((item, index) => {
          console.log(index);
          console.log(item);
          if (item.num == weekDay) {
            return (
              <View className="item2">
                <View className="item active">
                  <View className="item-box">
                    {item.week}
                    <View className="month-time">
                      {monthDay + 1}/{parseInt(daysOfThisWeek[index])}
                    </View>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <View className="item2">
                <View className="item">
                  <View className="item-box">
                    {item.week}
                    <View className="month-time">
                      {monthDay + 1}/{parseInt(daysOfThisWeek[index])}
                    </View>
                  </View>
                </View>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
}
