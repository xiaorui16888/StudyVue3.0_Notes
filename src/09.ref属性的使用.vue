<template>
    <div class="container">
        <!-- vue2.0获取div元素 -->
        <!-- 1.通过ref属性绑定元素 -->
        <!-- 通过this.$refs.box获取元素 -->
        <!-- <div ref="box">我是box</div> -->

        <!-- 通过v-for遍历多个元素 -->
        <!-- 通过ref属性绑定元素 -->
        <!-- 通过this.$refs.li获取所有遍历元素 -->
        <!-- <ul>
            <li v-for="i in 4" :key="i" ref="li">{{i}}</li>
        </ul> -->

        <!-- 单个元素 -->
        <div ref="dom">我是box</div>

        <!-- 被遍历的元素 -->
        <ul>
            <li v-for="i in 4" :key="i" :ref="setDom">第{{ i }}个</li>
        </ul>

    </div>

</template>

<script>
import { onMounted, ref } from 'vue'

export default {
    name: 'App',
    setup() {
        // 1. 先定义一个空的响应式数据ref
        // 2.setup中返回该数据，使用ref属性绑定该dom元素
        const dom = ref(null)

        onMounted(() => {
            console.log(dom.value);
        })

        // 获取v-for遍历的元素
        // 定义一个空数组，接收所有的LI
        //定义一个函数，往空数组push DOM
        const domList=[]
        const setDom=(el)=>{
            domList.push(el)
        }

        console.log(domList);

        return { dom,setDom }
    }
}
</script>
