<template>
    <div>
        <h2>Field component: {{msgInput}}</h2>
        <input type="text" v-model="msg">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "Field",
        props: ["msgInput"],
        data() {
            return {
                msg: ""
            }
        }
    }
</script>

<style scoped>

</style>