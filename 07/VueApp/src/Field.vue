<template>
    <div>
        <h2>Field component: {{msgInput}}</h2>
        <input type="text" :value="msg" @input="changeMsg">
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
        },
        methods: {
            changeMsg(event) {
                this.msg = event.target.value;
                this.$emit("funcMsgChange", this.msg)
            }
        }
    }
</script>

<style scoped>

</style>