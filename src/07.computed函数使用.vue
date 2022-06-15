<template>
    <div class="container">
        <div>今年：{{ age }}岁</div>
        <div>后年：{{ newAge }}岁</div>
        <input type="text" v-model="newAge">
    </div>

</template>

<script>
import { computed,ref } from 'vue'

export default {
    name: 'App',
    setup() {
        //计算属性：当你需要依赖现有的响应式数据，根据一定的逻辑得到一个新的数据。

        const age = ref(18)
        // const newAge = computed(() => {
        //     return age.value + 2
        // })

        const newAge = computed({
            get() {
                return age.value + 2
            },
            //set函数，当给计算属性设置的时候触发
            set(value){
                console.log(value)
                age.value=value-2
            }
        })


        return { age, newAge }
    }
}
</script>
