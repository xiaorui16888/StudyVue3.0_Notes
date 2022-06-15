<template>
    <div class="container">
        <div>{{ obj.name }}</div>
        <button @click="updateName">修改名字</button>
    </div>

</template>

<script>
import { reactive, toRef } from 'vue'
export default {
    name: 'App',
    setup() {
        //普通数据
        const obj = reactive({
            name: 'xiaorui',
            age: 18
        })
        //模板中只需要使用name数据
        //注意：从响应式数据对象中解构出的属性数据，不再是响应式数据
        // let {name} =obj 不能直接解构，出来的是一个普通数据
        let name= toRef(obj,'name')
        
        //修改名字
        const updateName = () => {
            console.log('updateName')
            //toRef转换响应式数据包装成对象，value存放值的位置
            name.value = 'guoxiaorui'
        }

        return { obj, updateName }
    }
}
</script>
