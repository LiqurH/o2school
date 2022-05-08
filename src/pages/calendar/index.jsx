import { View } from "@tarojs/components";
import URL from "../tool/url";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import "./index.scss";
import Top from "./compontent/Top";
import Content from "./compontent/Content";
import NavBar from "../NavBar";
import { Picker } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
function theWeek() {
  var totalDays = 0;
  var now = new Date();
  let years = now.getYear();
  if (years < 1000) years += 1900;
  var days = new Array(12);
  days[0] = 31;
  days[2] = 31;
  days[3] = 30;
  days[4] = 31;
  days[5] = 30;
  days[6] = 31;
  days[7] = 31;
  days[8] = 30;
  days[9] = 31;
  days[10] = 30;
  days[11] = 31;
  //判断是否为闰年，针对2月的天数进行计算
  if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
    days[1] = 29;
  } else {
    days[1] = 28;
  }
  if (now.getMonth() == 0) {
    totalDays = totalDays + now.getDate();
  } else {
    var curMonth = now.getMonth();
    for (var count = 1; count <= curMonth; count++) {
      totalDays = totalDays + days[count - 1];
    }
    totalDays = totalDays + now.getDate();
  }
  //得到第几周
  // var week = Math.round(totalDays / 7);
  // console.log(week);
  var Tiweek = now.getDay();
  var SurDays = (totalDays % 7) - Tiweek;
  var week2 = (totalDays - SurDays) / 7 + 1;
  var str = week2.toString();
  // let result = str.match(/(\S*)\./)[1];
  let result = 7;
  console.log(result);
  return result;
}
export default function() {
  const [courseDate, setCourseDate] = useState([]);
  const [selector, setSelector] = useState(["美国", "中国", "巴西", "日本"]);
  const [selectorChecked, setSelectorChecked] = useState("美国");
  console.log(courseDate);
  // let data = [];
  // Taro.clearStorage();
  let onChange = () => {
    console.log(111);
  };
  async function getCourse() {
    let rtoken = "";
    await Taro.getStorage({
      key: "course",
      success: function(res) {
        console.log(res);
        setCourseDate(res.data);
      },
      fail: function() {
        Taro.getStorage({
          key: "token",
          success: function(res) {
            rtoken = res.data;
            Taro.request({
              url: URL + `/user/schedule?year=2021&grade=1`,
              method: "GET",
              header: {
                "content-type": "application/json",
                token: rtoken
              },
              success: function(res) {
                setCourseDate(res.data.data);
                Taro.setStorage({
                  key: "course",
                  data: res.data.data
                });
                console.log(res.data.data);
              },
              fail: function(err) {
                console.log(111);
                console.log(err);
              }
            });
          }
        });
      }
    });
  }
  useEffect(() => {
    console.log(111);
    getCourse();
  }, []);
  return (
    <View>
      <NavBar
        background="#54cdc8"
        color="white"
        iconTheme="white"
        back
        renderCenter={
          <View className="trace-rowAlignCenter">
            <View>
              <Picker mode="selector" range={selector} onChange={onChange}>
                <AtList className="at-list">
                  <AtListItem extraText={selectorChecked} />
                </AtList>
              </Picker>
            </View>
          </View>
        }
      />
      <View className="context-back">
        <View className="context">
          <Top />
          <Content courseDate={courseDate} thisWeek={theWeek()} />
        </View>
      </View>
    </View>
  );
}
