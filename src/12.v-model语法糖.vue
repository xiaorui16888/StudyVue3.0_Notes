<template>
    <div class="container">
        <!-- 如果你想获取原生事件的事件对象 -->
        <!-- 如果绑定的是js表达式，此时提供一个默认的变量$event -->
        <h1 @click="$event.target.style.color='red'">父组件{{count}}</h1>
        <hr>
        
        <!-- 如果你想获取自定义事件，此时$event代表的是触发自定义事件的传参 -->
        <Son3 :modelValue="count" @update:modelValue="count=$event"/>

        <!-- vue3.0封装组件支持v-model的时候，父传子 :modelValue  子传父 @update:modelValue -->
        <Son3 v-model="count"/>

    </div>

</template>

<script>
import { ref } from "vue"
import Son3 from "./components/Son3.vue"

export default {
    name: "App",
    components:{
        Son3
    },
    setup() {
        const count=ref(20)
        return {count}
    }
}
</script>
