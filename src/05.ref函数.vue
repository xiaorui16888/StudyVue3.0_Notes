<template>
    <div class="container">
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <button @click="updateName">修改名字</button>
    </div>

</template>

<script>
import { ref } from 'vue'
export default {
    name: 'App',
    setup() {
        const name=ref('xiaorui')
        console.log(name)
        const age=ref(10)
        console.log(age)
        
        //修改名字
        const updateName = () => {
            name.value='guoxiaorui'
        }

        return {name,age,updateName }
    }
}
</script>
