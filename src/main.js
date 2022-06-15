import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
const app=createApp(App)

//vue2.0 Vue.minix({ 全局混入的选项对象 })
//vue3.0 app.minix({ 全局混入的选项对象 })

app.mixin({
    methods:{
        say(){
            console.log('say~~~');
        }
    },
    //在任何组件 dom准备好的时候 打印一句话
    mounted(){
        // $el 组件的根元素
        console.log(this.$el,'dom准备好');
        this.say()
    }
})

app.mount('#app')
