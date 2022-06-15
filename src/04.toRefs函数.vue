<template>
    <div class="container">
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <button @click="updateName">修改名字</button>
    </div>

</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'App',
    setup() {
        //普通数据
        const obj = reactive({
            name: 'xiaorui',
            age: 18
        })

        console.log(obj)

        const obj2=toRefs(obj)
        console.log(obj2)

        
        //修改名字
        const updateName = () => {
            // obj2.name.value = 'guoxiaorui'
            obj.name='guoxiaorui'
        }

        return { ...obj2,updateName }
    }
}
</script>
