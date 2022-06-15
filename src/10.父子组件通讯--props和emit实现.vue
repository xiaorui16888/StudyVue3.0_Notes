<template>
    <div class="container">
        <h1>父组件</h1>
        <p>{{money}}</p>
        <hr>
        <Son2 :money="money" @change-money="updateMoney" />

    </div>

</template>

<script>
import { ref } from 'vue';
import Son2 from './components/Son2.vue'

export default {
    name: "App",
    setup() {
        return {};
    },
    components: { Son2 },
    //父组件的数据传递给子组件
    setup() {
        const money=ref(100)
        const updateMoney=(newMoney)=>{
            console.log(newMoney);
            money.value=newMoney
        }

        return {money,updateMoney}
    }
}
</script>
