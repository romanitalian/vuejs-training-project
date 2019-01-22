new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        styleCss: ""
    },
    methods: {
        changeText() {
            this.title = 'Some new text from method!'
        }
    }
});
