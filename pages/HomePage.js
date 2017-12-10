'use strict';

import AppsPre from '../cmps/AppsPre.js'

export default {
    template: `
<<<<<<< HEAD
        <section>
        <h1>HomePage</h1>
        <apps-pre></apps-pre>
=======
        <section class="welcome">
        <h1 class="main-title">ShBan</h1>
        <img src="/img/background.jpg" alt="">
>>>>>>> bea77a54421e7be62e6508dd9c2a5a9360665f7f
        </section>
    `,
    created(){
        console.log('shalom')
    },
    components:{
        AppsPre
    }
}