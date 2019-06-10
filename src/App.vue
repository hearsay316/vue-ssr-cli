<template>
    <div id="app">
        <Bal></Bal>
        <Foo></Foo>
    </div>
</template>

<script>
    import Bal from "./components/Bal.vue"
    import Foo from "./components/Foo.vue"
    export default {
        name: "App",
        components:{
            Bal,
            Foo
        }
    }
</script>

<style scoped>

</style>