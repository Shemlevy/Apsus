'use strict'
import EmailService from '../services/EmailService.js'


export default {
    template: `
        <section v-if="email">
            <div v-if="email">
                <div>{{email.date}}</div>
                <div>{{email.from}}</div>
                <div>{{email.title}}</div>
                <div>{{email.txt}}</div>
                <section class="tools">

                </section>
                <md-button class="md-raised md-accent" @click="deleteNote(note.id)">Delete</md-button>
            </div>
        </section>
    `,
    data (){
        return {
            email: null,
        }
    },
    created (){
        var initalId = this.$route.params.emailId
        EmailService.getEmailById(initalId).then(email =>{
            this.email = email
        })
    },
    watch: {
        emailId: function (currId) {
            EmailService.getEmailById(currId).then(email =>{
                this.email = email
            })
        }
    },
    computed:{
        emailId: function(){
            return this.$route.params.emailId
        }
    }
}