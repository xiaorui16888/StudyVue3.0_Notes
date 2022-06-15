<template>
    <div class="container">
        <p>X坐标：{{ x }}</p>
        <p>Y坐标：{{ y }}</p>

        <hr>

        <p>{{ count }}</p>
        <button @click="add()">累加+1</button>
    </div>

</template>

<script>
import { onMounted, onUnmounted, reactive, toRefs, ref } from 'vue'

const useMouse = () => {
    // 记录鼠标坐标
    //申明一个响应式数据
    const mouse = reactive({
        x: 0,
        y: 0
    })

    //修改响应式数据
    const move = (e) => {
        mouse.x = e.pageX
        mouse.y = e.pageY
    }

    //dom渲染完毕，去监听事件
    onMounted(() => {
        document.addEventListener('mousemove', move)
    })

    //组件销毁的时候， 
    onUnmounted(() => {
        document.removeEventListener('mousemove', move)
    })

    return mouse
}

export default {
    name: 'App',
    setup() {
        const mouse = useMouse()

        //数字累加
        const count = ref(0)
        const add = () => {
            count.value++
        }

        return { ...toRefs(mouse), count, add }
    }
}
</script>
