import { useState } from "react";
import { View } from "@tarojs/components";
import { AtSteps } from "taro-ui";
import "./index.scss";
export default function index(props) {
  const [current, setCurrent] = useState();
  // setStatus(props.state);
  const items = [
    {
      title: "步骤一",
      desc: "扫描isbn码",
      icon: {
        value: "camera",
        activeColor: "#fff",
        inactiveColor: "#78A4FA",
        size: "10"
      }
    },
    {
      title: "步骤二",
      desc: "补充图书信息",
      icon: {
        value: "shopping-cart",
        activeColor: "#fff",
        inactiveColor: "#78A4FA",
        size: "10"
      }
    },
    {
      title: "步骤三",
      desc: "发布成功",
      icon: {
        value: "camera",
        activeColor: "#fff",
        inactiveColor: "#78A4FA",
        size: "10"
      }
    }
  ];
  let onChange = current => {
    console.log(current);
    setCurrent({
      current
    });
  };

  return (
    <AtSteps
      className="article-steps"
      items={items}
      current={props.state}
      onChange={onChange}
    />
  );
}
