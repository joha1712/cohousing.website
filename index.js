import VueRouter from "vue-router"
import Vue from "vue"
import TheMealPlan from "./components/TheMealPlan.vue"

// Vue Router
const router = new VueRouter({
  mode: 'history',
  routes: []
});

Vue.use(VueRouter);

// Custom directives
const disableAllDirective = (function() {
    function disableAll(el, binding) {
        const tags = ["input", "button", "textarea", "select", "label"];
        tags.forEach(tagName => {
            const nodes = el.getElementsByTagName(tagName);
            let deactivate = binding.value;
            for (let i = 0; i < nodes.length; i++) {
                let node = nodes[i];
                if (node.classList.contains("disable-all-skip"))
                    continue;                                                
                if (deactivate) {
                    node.classList.add("not-active");
                } else {
                    node.classList.remove("not-active");                            
                }
            }
        });
    }

    return {
        // When all the children of the parent component have been updated         
        componentUpdated : function(el, binding) {                
            disableAll(el, binding);
        },
        inserted : function(el, binding) {                
            disableAll(el, binding);
        }
    }    
})();

Vue.directive("disable-all", disableAllDirective);

Vue.prototype.$window = window;

var vm = new Vue({ 
    router,
    el: "#app",
    render: h => h(TheMealPlan)
});