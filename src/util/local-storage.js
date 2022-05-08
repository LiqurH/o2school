import Taro from "@tarojs/taro";
//写入一些本地存储的东西
/**
 *
 *
 * @export
 * @param {*} key
 * @returns {Promise}
 */
export function getStorage(key){
  return new Promise((resolve,reject)=>{
    Taro.getStorage({
      key:key,
      success:resolve,
      fail:reject
    })
  })
}
export function setStorage(key,value){
  return new Promise((resolve,reject)=>{
    Taro.setStorage({
      key:key,
      data:value,
      success:resolve,
      fail:reject
    })
  })
}
export function clearStorage(){
  Taro.clearStorage()
  console.log("hello");
}