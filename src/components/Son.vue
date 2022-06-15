<template>
    <div class="container">
        <h1>子组件 {{money}}</h1>
        <hr>
        <GrandSon/>
    </div>
</template>
<script>
import { inject } from 'vue'
import GrandSon from './GrandSon.vue'

export default {
    name: 'Son',
    components:{
        GrandSon
    },
    setup(){
        //接收祖先组件提供的数据
        const money=inject('money')

        return {money}

    }
    
}
</script>