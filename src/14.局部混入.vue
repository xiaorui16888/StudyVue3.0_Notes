<template>

    <!-- 在vue2.0中一些可复用的逻辑可以使用mixins来封装，但是需要考虑逻辑代码冲突问题。 -->
    <!-- vue3.0的组合API很好的解决了这个问题，不推荐使用mixins -->
    <div class="container">
       <h1>作者：周杰伦 <a href="javascript:;" @click="followFn">{{loading?'正在请求...':'关注'}}</a></h1>
       <hr>
       <UserCard1Vue/>
    </div>

</template>

<script>
import UserCard1Vue from './components/UserCard1.vue';
import {followMixin} from './mixins.js'
export default {
    name: "App",
    components:{
        UserCard1Vue
    },
    mixins:[followMixin],
    setup() {
        return {};
    }
}
</script>
