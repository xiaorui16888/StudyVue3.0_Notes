<template>
    <div class="container">
        <h1>父组件</h1>
        <p>{{money}}</p>
        <button @click="money=1000">发钱</button>
        <hr>
        <Son/>

    </div>

</template>

<script>
import { provide, ref } from 'vue';
import Son from './components/Son.vue'

export default {
    name: "App",
    components: { Son },
    //父组件的数据传递给子组件
    setup() {
        const money=ref(100)

        const changeMoney=(saleMoney)=>{
            console.log('changeMoney',saleMoney);
            money.value=money.value-saleMoney
        }

        //讲数据提供给后代组件使用 provide

        provide('money',money)
        provide('changeMoney',changeMoney)


        return {money}
    }
}
</script>
