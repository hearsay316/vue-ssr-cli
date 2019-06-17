<template>
    <div @click="HandleClick">
        bal ggg {{$store.state.useranme}}
    </div>
</template>

<script>
    export default {
        name: "Bal",
        metaInfo:{
            title:"bal"
        },
        // 在neut 页面才能使用
        asyncData({store}){ // 异步数据 全部是promise
            console.log(store.state.useranme);
            return store.dispatch('set_username',"bal");
        },
        mounted(){
            return this.$store.dispatch('set_username',"bal");

        }
        ,
        methods:{
            HandleClick(){
                console.log(123);
            }
        }
    }
</script>

<style scoped>

</style>