import Vue from "vue"
import MealOverview from "../views/MealOverview.vue"

Vue.prototype.$window = window;

var vm = new Vue({     
    el: "#app",
    render: h => h(MealOverview)
});