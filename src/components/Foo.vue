<template>
    <div>
        foo测试
        <ul>
            <li v-for="i of item">{{i}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Foo",
        data(){
            return{
                item:[1,2,3,5]
            }
        }
    }
</script>

<style scoped>

</style>