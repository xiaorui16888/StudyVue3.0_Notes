<template>
    <div class="container">
        <p>count的值:{{count}}</p>
        <button @click="add()">点我累+1</button>
        
        <p>姓名：{{obj.name}}</p>
        <p>年龄：{{obj.age}}</p>
        <p>车品牌：{{obj.brand[0].name}}</p>
        <button @click="updateName()">修改名字</button>
        <button @click="updateBrandName()">修改车品牌</button>
    </div>

</template>

<script>
import { reactive, ref,watch } from 'vue'



export default {
    name: 'App',
    setup() {
       const count=ref(0)
       const add=()=>{
        count.value++
       }

       const obj=reactive({
        name:'xiaorui',
        age:23,
        brand:[
            {
                id:1,
                name:'宝马'
            }
        ]
       })

       const updateName=()=>{
            obj.name='guoxiaorui'
       }

       const updateBrandName=()=>{
            obj.brand[0].name='奔驰';
       }

        //当需要监听数据的变化可以使用watch
        
        //监听ref数据
        // watch(count,(newVal,oldVal)=>{
        //     console.log(newVal,oldVal);
        // })

        // watch(obj,()=>{
        //     console.log('数据改变了');
        // })

        watch(()=>obj.brand,()=>{
            console.log('brand数据改变了');
        },{
            //深度监听
            deep:true,
            //默认执行
            immediate:true
        })

        //监听reactive数据
        // watch(obj,(newVal,oldVal)=>{
        //     console.log(newVal,oldVal);
        // })

        //监听多个数据的变化
        // watch([obj,count],()=>{
        //     console.log('监听多个数据发生了改变');
        // })

        // 只监听对象中某个属性的变化
        // 需要写成函数返回该属性的方式才能监听到
        // watch(()=>obj.name,()=>{
        //     console.log('name发生了变化');
        // })

        return { count,add,obj,updateName,updateBrandName}
    }
}
</script>
