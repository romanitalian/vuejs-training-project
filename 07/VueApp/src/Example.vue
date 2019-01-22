<template>
    <div>
        <h1>Text example</h1>
        <app-input></app-input>
    </div>
</template>

<script>
    import Input from "./Field.vue"
    export default {
        name: "Example",
        components: {
            "app-input": Input
        }
    }
</script>

<style scoped>

</style>