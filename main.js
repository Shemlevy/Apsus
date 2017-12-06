'use strict';

import myRoutes from './routes.js'

Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const myRouter = new VueRouter({routes : myRoutes})

new Vue({
    template: `
        <section class="main-body">
                <h1>Notes</h1> 
                <nav>
                    <router-link to="/" exact>All</router-link>
                </nav>
                <router-view></router-view>
                <footer>Since 1953</footer>            
        </section>
    `,
    created() {
        console.log('Vue App was created!');
    },
    router: myRouter,
}).$mount('#app')