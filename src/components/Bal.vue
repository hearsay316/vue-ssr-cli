<template>
    <div @click="HandleClick">
        bal {{$store.state.useranme}}
    </div>
</template>

<script>
    export default {
        name: "Bal",
        // 在neut 页面才能使用
        asyncData({store}){ // 异步数据 全部是promise
            return store.dispatch('set_username');
        },
        methods:{
            HandleClick(){
                console.log(123);
            }
        }
    }
</script>

<style scoped>

</style>