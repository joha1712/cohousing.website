import Vue from "vue"
import Treasurehunt from "../views/Treasurehunt.vue"

Vue.prototype.$window = window;

var vm = new Vue({     
    el: "#app",
    render: h => h(Treasurehunt)
});