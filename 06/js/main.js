Vue.component("app-car", {
    data: function () {
        return {
            cars: [
                {model: "BMW", speed: 132},
                {model: "Audi", speed: 454},
                {model: "Lada", speed: 154},
                {model: "Honda", speed: 313}
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{car.model}}</p></div></div>'
});

new Vue({
    el: "#app",
});

new Vue({
    el: "#app2",
});
