<template>
    <div>
        <h1>Example component: {{message}}</h1>
        <app-input :msgInput="message" @funcMsgChange="message = $event"></app-input>
    </div>
</template>

<script>
    import Input from "./Field.vue"
    export default {
        name: "Example",
        data() {
            return {
                message: "Some text from this component - Example"
            }
        },
        components: {
            "app-input": Input
        }
    }
</script>

<style scoped>

</style>