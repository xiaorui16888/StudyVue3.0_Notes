<template>
  <div class="container">
    <view @click="say()">{{ msg }}
    </view>
  </div>

</template>

<script>
import { onBeforeMount, onMounted } from 'vue'


export default {
  name: 'App',
  // 1.组合API的起点
  // 2.可以理解为在beforeCreate钩子执行前执行，组件实例创建前
  // 3. 函数中不能使用this（组件实例）===>undefined
  // 4.模板中需要使用的数据和函数，需要在setup中返回

  setup() {
    // DOM渲染前钩子
    onBeforeMount(() => {
      console.log('DOM渲染前钩子', document.querySelector('.container'))
    })

    //DOM渲染后钩子
    onMounted(()=>{
      console.log('DOM渲染后钩子', document.querySelector('.container'))
    })

    const msg = 'hi vue3'

    const say = () => {
      console.log('say hi~')
    }

    return { msg, say }
  }
}
</script>
