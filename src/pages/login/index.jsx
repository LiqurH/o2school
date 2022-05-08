import { View, Text, Input, Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import { useState, useEffect } from "react";
import URL from "../tool/url";
import { reLaunchPage, toOtherPage } from "../tool/tools";
import { AtToast } from "taro-ui";
let captchaID;
export default function() {
  const [verifyURL, setVerifyURL] = useState(undefined);
  const [schoolIDValue, setSchoolIDValue] = useState();
  const [passWordValue, setPassWordValue] = useState();
  const [verifyValue, setVerifyValue] = useState();
  const [userMessage, setUserMessage] = useState({});
  const [bgCopacity, setBgCopacity] = useState("opacity:0.5");
  const [textValue, setTextValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [isOpenedValue, setIsOpenedValue] = useState(0);
  const IndexUrl = "/pages/index/index";
  useEffect(() => {
    getVerify();
  }, []);
  useEffect(() => {
    setIsOpenedValue(0);
    if (schoolIDValue != null) {
      if (passWordValue != null) {
        if (verifyValue != null) {
          setBgCopacity("opacity:1");
        }
      }
    }
    if (schoolIDValue == "" || passWordValue == "" || verifyValue == "") {
      setBgCopacity("opacity:0.5");
    }
  }, [schoolIDValue, passWordValue, verifyValue]);
  let getVerify = () => {
    Taro.request({
      url: URL + "/login/code",
      method: "GET",
      success: function(res) {
        setVerifyURL("data:image/png;base64," + res.data.img);
        captchaID = res.data.code;
        // console.log(res.data.data.img);
        // Object.assign(data, res.data);
        // console.log(res.data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  };
  let getSchoolID = event => {
    console.log(event.detail.value);
    setSchoolIDValue(event.detail.value);
  };
  let getPassWord = event => {
    console.log(event.detail.value);
    setPassWordValue(event.detail.value);
  };
  let getVerifyValue = event => {
    console.log(event.detail.value);
    setVerifyValue(event.detail.value);
  };
  let giveloginMes = () => {
    Taro.showLoading({
      title: "加载中"
    });
    Taro.request({
      url: URL + "/login/school",
      method: "POST",
      data: {
        code: verifyValue,
        schoolID: schoolIDValue,
        password: passWordValue,
        codeID: captchaID
      },
      success: function(res) {
        console.log(res);
        Taro.setStorage({
          key: "token",
          data: res.data.data
        });
        Taro.hideLoading();
        console.log(res.data);
        if (res.data.code == 0) {
          Taro.getUserProfile({
            desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: res => {
              Taro.setStorage({
                key: "userMess",
                data: res.userInfo
              });
              console.log(res.userInfo);
              Taro.reLaunch({ url: IndexUrl });
            }
          });
        } else {
          setIsOpenedValue(1);
          setTextValue("信息不正确");
        }
      }
    });
  };
  return (
    <View className="context-back">
      <View className="context">
        <View className="label">
          <View className="text">
            <View className="image" />
            <Text>氧气校园</Text>
          </View>
        </View>
        <View className="login-input">
          <View className="username">
            <View className="up"></View>
            <Input
              value={schoolIDValue}
              onInput={getSchoolID}
              className="input"
              type="number"
              name="username"
              placeholder="输入学号"
            />
            <View className="down"></View>
          </View>
          <View className="passworld">
            <Text className="up"></Text>
            <Input
              value={passWordValue}
              onInput={getPassWord}
              className="input"
              type="password"
              name="password"
              placeholder="输入密码"
            />
            <Text className="down"></Text>
          </View>
          <View className="auth-code">
            <Text className="up"></Text>
            <Input
              value={verifyValue}
              onInput={getVerifyValue}
              className="input"
              type="text"
              name="text"
              placeholder="输入验证码"
            />
            <View className="down">
              <Image
                id="verify_img"
                src={verifyURL}
                title="看不清？请点击刷新"
                onClick={getVerify}
              />
            </View>
          </View>
        </View>

        <View className="login-in">
          <View className="login">
            <Button
              style={bgCopacity}
              onClick={() => {
                console.log(schoolIDValue.length);
                if (schoolIDValue.length != 8) {
                  setIsOpenedValue(1);
                  setTextValue("学号长度输入有误");
                } else {
                  if (passWordValue == "" || passWordValue == null) {
                    setIsOpenedValue(1);
                    setTextValue("密码不能为空");
                  } else {
                    if (verifyValue == "" || verifyValue == null) {
                      setIsOpenedValue(1);
                      setTextValue("验证码不能为空");
                    } else {
                      giveloginMes();
                    }
                  }
                }
              }}
            >
              <Text>登录</Text>
            </Button>
          </View>
          <View className="deal">
            登录代表我已阅读并同意
            <View
              className="role"
              onClick={() => {
                console.log(111);
                // toOtherPage();
              }}
            >
              用户协议
            </View>
            ，
            <View
              className="role"
              onClick={() => {
                console.log(111);
                // toOtherPage();
              }}
            >
              隐私政策
            </View>
          </View>
        </View>
        <View className="hint">
          <AtToast
            isOpened={isOpenedValue}
            text={textValue}
            icon={iconValue}
            status={statusValue}
          ></AtToast>
          <Text>用的开心，买的放心。</Text>
        </View>
      </View>
    </View>
  );
}
