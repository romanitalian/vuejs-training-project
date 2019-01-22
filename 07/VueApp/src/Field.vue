<template>
    <div>
        <input type="text" v-model="msg">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "Field",
        data() {
            return {
                msg: ""
            }
        }
    }
</script>

<style scoped>

</style>