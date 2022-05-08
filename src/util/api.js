import Taro from "@tarojs/taro"
// mock baseUrl
const MOCK_BASE_URL = "https://www.fastmock.site/mock/94194e9373886d9d4f57acadedcfe2ef/weapp";
// 服务器 baseUrl
// const BASE_URL = "https://smallwx.vaiwan.com";
const BASE_URL = "http://47.108.165.1:8013";
/**
 * 发请求
 *
 * @param {{
 *          url: string,
 *          method: string,
 *          data: {}
 *         }} option method为全大写字符串
 */
function ajax(option) {
    return new Promise((resolve, reject) => {
        option.url = (option.mock ? MOCK_BASE_URL : BASE_URL) + option.url;
        Taro.request({
            ...option,
            success: res => resolve(res),
            fail: err => reject(err),
            dataType: "json"
        })
    })
}

export default ajax