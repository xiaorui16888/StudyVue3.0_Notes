<template>
    <div class="container">
        <h1>父组件</h1>
        <Son/>
    </div>

</template>

<script>
import Son from './components/Son4.vue'
export default {
    name: "App",
    setup() {
        return {};
    },
    components: { Son }
}
</script>
