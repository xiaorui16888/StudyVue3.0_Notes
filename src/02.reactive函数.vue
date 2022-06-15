<template>
    <div class="container">
        <div>{{ obj.name }}</div>
        <div>{{ obj.age }}</div>
        <button @click="updateName">修改名字</button>
    </div>

</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'App',
    setup() {
        //普通数据
        const obj = reactive({
            name: 'xiaorui',
            age: 18
        })

        //修改名字
        const updateName = () => {
            obj.name = 'guoxiaorui'
        }

        return { obj, updateName }
    }
}
</script>
