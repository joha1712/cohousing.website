import Vue from "vue"
import TheMealOverview from "../components/TheMealOverview.vue"

Vue.prototype.$window = window;

var vm = new Vue({     
    el: "#app",
    render: h => h(TheMealOverview)
});