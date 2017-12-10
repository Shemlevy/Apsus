'use strict';

import AppsPre from '../cmps/AppsPre.js'

export default {
    template: `
        <section>
        <h1>HomePage</h1>
        <apps-pre></apps-pre>
        </section>
    `,
    created(){
        console.log('shalom')
    },
    components:{
        AppsPre
    }
}