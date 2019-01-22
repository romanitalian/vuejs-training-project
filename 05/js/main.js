Vue.filter("capitalize", function (value) {
    if (!value) {
        return "";
    }
    value = value.toString();
    return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    });
});

new Vue({
    el: "#app",
    data: {
        show: true,
        msg: "Hello, hello Roman!"
    },
    methods: {},
    computed: {
        showMsg() {
            return this.msg.toUpperCase()
        }
    },
    filters: {
        lowercase(value) {
            return value.toLowerCase()
        }
    }
});
