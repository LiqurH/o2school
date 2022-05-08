import React, { useState, useEffect } from "react";
import { View, Text, Input, Button, Radio } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import { AtToast, AtTag } from "taro-ui";
import { toOtherPage, reLaunchPage } from "../../../../../tool/tools";
import URl from "../../../../../tool/url";
const addURl = "/pages/add/index";
export default function index(props) {
  const [titleValue, setTitleValue] = useState("");
  const [detailValue, setDetailValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [isOpenedValue, setIsOpenedValue] = useState(0);
  const [activeIndex, setActive] = useState(false);
  const [newLev, setNewLev] = useState(85);
  const [imageURl, setImageURl] = useState();
  const [rulCheck, setRulCheck] = useState(false);
  // const [rtoken, setRtoken] = useState("");
  const newlevel = ["九成新", "全新", "八成新", "七成新"];
  const numlevel = [95, 100, 85, 70];

  console.log(props);
  let { expValue, getValue } = props.priceData;
  let { msg } = props.msgData;
  console.log(msg + 222);
  let submitValue = {
    titleValue,
    detailValue,
    expValue: parseInt(expValue),
    getValue: parseInt(getValue),
    msg,
    newLev
  };
  console.log(submitValue);
  let getTitleValue = event => {
    console.log(event.detail.value);
    setTitleValue(event.detail.value);
  };
  let getDetailValue = event => {
    console.log(event.detail.value);
    setDetailValue(event.detail.value);
  };
  let getNewPic = () => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: URl + "/api/upload",
        method: "GET",
        header: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYzODcwMjEwMSwiZXhwIjoxNjM5OTk4MTAxfQ.XYKsJruE55gErlP3GjMDxw93jRLrcFa4VNEzMBxBqGI"
        },
        success: function(res) {
          console.log(res.data.data);
          resolve(res.data.data);
        }
      });
    });
  };
  let giveOtherOld = () => {
    console.log(titleValue.length);
    console.log(expValue.length);
    console.log(getValue);
    if (msg.length < 1) {
      setTextValue("商品图片最少为一张");
      setIsOpenedValue(1);
    } else {
      if (expValue == "") {
        setTextValue("期望价格不能没有");
        setIsOpenedValue(1);
      } else {
        if (getValue == "") {
          setTextValue("购入价格不能没有");
          setIsOpenedValue(1);
        } else {
          if (titleValue.length < 2) {
            setTextValue("标题字数应在2-30");
            setIsOpenedValue(1);
          } else {
            if (rulCheck) {
              Taro.showLoading({
                title: "加载中"
              });
              getNewPic().then(data => {
                console.log(data);
                let imageUrl = [];
                msg.map((item, index) => {
                  Taro.uploadFile({
                    url: "https://api.superbed.cn/upload",
                    filePath: item,
                    name: "file",
                    formData: {
                      id: data.id,
                      ts: data.ts,
                      sign: data.sign
                    },
                    success: function(res) {
                      console.log(res);
                      imageUrl.push(JSON.parse(res.data).url);
                      console.log(msg.length);
                      console.log(index);
                      if (index == msg.length - 1) {
                        console.log(imageUrl);
                        let showImage = imageUrl.splice(0, 1);
                        console.log(showImage);
                        let informImage = JSON.stringify(imageUrl);
                        console.log(informImage);
                        let rtoken = "";
                        Taro.getStorage({
                          key: "token",
                          success: function(res) {
                            // setRtoken(res.data);
                            // console.log(rtoken);
                            rtoken = res.data;
                            console.log(rtoken);
                            console.log(res.data);
                            Taro.request({
                              url: URl + "/used-goods/item",
                              method: "PUT",
                              header: {
                                "content-type": "application/json",
                                token: rtoken
                              },
                              data: {
                                quantity: 1,
                                type: 2,
                                title: titleValue,
                                showImgURL: showImage[0],
                                damaged: newLev,
                                originPrice: expValue,
                                price: getValue,
                                describe: detailValue,
                                inform: informImage
                              },
                              success: function(res) {
                                Taro.hideLoading();
                                // setIconValue("check-circle");
                                setTextValue("上传成功");
                                setIsOpenedValue(1);
                                console.log(res);
                                reLaunchPage(addURl);
                              },
                              fail: function() {
                                Taro.hideLoading();
                                setTextValue("上传失败");
                                setIsOpenedValue(1);
                              }
                            });
                          }
                        });
                      }
                    }
                  });
                });
              });
            } else {
              setIsOpenedValue(1);
              setTextValue("请勾选用户协议哦");
            }
          }
        }
      }
    }
  };
  let changeChecked = () => {
    setRulCheck(!rulCheck);
  };
  useEffect(() => {
    setIsOpenedValue(0);
  }, [titleValue, rulCheck, getValue, expValue, msg]);
  return (
    <View className="bottom-box">
      <View className="content">
        <AtToast
          isOpened={isOpenedValue}
          text={textValue}
          icon={iconValue}
          status={statusValue}
          hasMask="true"
        ></AtToast>
        <View className="title">
          <Text>宝贝标题</Text>
          <Input
            value={titleValue}
            onInput={getTitleValue}
            className="title-input"
            type="text"
            placeholder="请写物品名(2-30字)"
            maxlength="30"
            minlength="2"
          />
        </View>
        <View className="detail">
          <Text>详情描述</Text>
          <Input
            value={detailValue}
            onInput={getDetailValue}
            className="detail-input"
            type="text"
            placeholder="选填"
          />
        </View>
        <View className="sub-box">
          <View className="center">
            <View className="title">几成新</View>
            <View className="new-level">
              {newlevel.map((item, index) => (
                <View>
                  <AtTag
                    className="attag"
                    type="primary"
                    active={activeIndex === index}
                    name={item}
                    onClick={e => {
                      setNewLev(numlevel[index]);
                      setActive(index);
                    }}
                  >
                    {item}
                  </AtTag>
                </View>
              ))}
            </View>
          </View>
          <View className="sub">
            <Button
              onClick={() => {
                giveOtherOld();
              }}
            >
              <Text>发布</Text>
            </Button>
            <View className="sub-role">
              <Radio
                onClick={() => {
                  changeChecked();
                }}
                checked={rulCheck}
              >
                我已成功阅读并同意《
              </Radio>
              <View className="role">发布规则</View>
              <Text>》</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
