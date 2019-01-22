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
    components: {
        'app-car-local': {
            data: function () {
                return {
                    cars: [
                        {model: "BMW", speed: 132},
                        {model: "AUDI", speed: 454},
                        {model: "LADA", speed: 154},
                        {model: "HONDA", speed: 313},
                        {model: "FORD", speed: 12}
                    ]
                }
            },
            template: '<div><div class="car" v-for="car in cars"><p>{{car.model | lower}}</p></div></div>',
            filters: {
                lower: function (value) {
                    return value.toLowerCase()
                }
            }
        }
    }
});

new Vue({
    el: "#app2",
});
