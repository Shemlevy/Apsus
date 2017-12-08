'use strict';

import myRoutes from './routes.js'

Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    template: `
        <section class="main-body">
                <div class="page-container">
                    <md-app md-waterfall md-mode="fixed-last">
                        <md-app-toolbar class="md-large md-dense md-primary">
                            <div class="md-toolbar-row">
                                <div class="md-toolbar-section-start">
                                    <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                                    <md-icon>menu</md-icon>
                                    </md-button>
                                    <span class="md-title">Apsus</span>
                                </div>
                        
                                <div class="md-toolbar-section-end">
                                    <md-button @click="goToPage('/emails')">Mail</md-button>
                                    <md-button @click="goToPage('/notes')">notes</md-button>
                                    <md-button @click="goToPage('/maps')">Map</md-button>
                                </div>
                            </div>
                        </md-app-toolbar>
                
                        <md-app-drawer :md-active.sync="menuVisible">
                            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
                    
                            <md-list>
                            </md-list>
                        </md-app-drawer>
                
                        <md-app-content>
                                <router-view></router-view>
                        </md-app-content>
                    </md-app>
              </div>
        </section>
    `,
    created() {
        console.log('Vue App was created!');
    },
    data() {
        return {
            menuVisible: false
        }
    },
    methods: {
        goToPage(page) {
            this.$router.push(page)
        }
    },
    router: myRouter,
}).$mount('#app')