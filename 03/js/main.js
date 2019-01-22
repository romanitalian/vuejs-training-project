new Vue({
    el: "#app",
    data: {
        value: 1
    },
    methods: {
        increment(value) {
            this.value = value
            if (value == 20) {
                alert("Your enter the Number: " + value)
            }
        }
    },
    computed: {
        doubleValue() {
            return this.value * 2
        }
    }
});
