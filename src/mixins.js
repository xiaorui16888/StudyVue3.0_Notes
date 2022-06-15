// 提供mixin逻辑

//做关注需求的混入选项
export const followMixin={
    data(){
        return {
            loading:false
        }
    },methods:{
        followFn(){
            this.loading=true
            //模拟请求
            setTimeout(()=>{
                //关注成功的逻辑
                this.loading=false
            },2000)
        }
    }
}