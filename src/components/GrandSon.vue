<template>
    <div class="container">
        <h1>子子组件{{ money }}</h1>
        <hr>
        <button @click="fn">消费50</button>
    </div>
</template>
<script>
import { inject } from 'vue'


export default {
    name: 'GrandSon',
    setup() {
        const money = inject('money')

        const changeMoney=inject('changeMoney')
        const fn=()=>{
            changeMoney(20)
        }
        
        return { money,fn }
    }

}
</script>