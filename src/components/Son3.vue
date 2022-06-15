<template>
    <div class="container">
        <h1>子组件{{modelValue}}</h1>
        <button @click="fn">修改</button>
    </div>
</template>
<script>


export default {
    name: 'Son3',
    props:{
        modelValue:{
            type:Number,
            default:0
        }
    },
    setup(props,{emit}) {
        const fn=()=>{
            //改变数据
            emit('update:modelValue',300)
        }
        return {fn}
    }

}
</script>