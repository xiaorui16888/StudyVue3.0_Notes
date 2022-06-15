<template>
    <div class="container">
        <h2>作者：周杰伦 <button @click="followFn">{{loading?'正在请求...':'关注'}}</button></h2>
    </div>
</template>
<script>
import {followMixin} from '../mixins.js'
export default{
    name:'UserCard1',
    mixins:[followMixin]
}
</script>