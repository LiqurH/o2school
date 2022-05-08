import { View,Text } from "@tarojs/components";

import './index.scss'
export default function(){
  const time = ['1','2','3','4','5','6','7','8','9','10'];
  return (   
    <View className='left'>
      {
        time.map((item)=>{
          return <View className='item'>
            <Text>{item}</Text>
            </View>
        })
      }
    </View>
  )
}