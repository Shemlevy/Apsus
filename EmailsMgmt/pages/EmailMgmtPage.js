'use strict';
import EmailPreview from "../cmps/EmailPreview.js";
import EmailService from '../services/EmailService.js';
import EmailView from '../cmps/EmailView.js'


export default {
    template: `
    <section>

        <div class="md-layout ">
            <div class="md-layout-item md-size-30">
                <md-list class="md-triple-line" v-if="emails">
                    <email-preview @viewEmail="viewEmailDetails" v-if="emails" v-for="email in emails" :email="email"></email-preview>
                </md-list>
            </div>
            <div class="md-layout-item md-size-70">
                <email-view v-if="emailShow"></email-view>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            emails: [],
            emailShow: false
        }
    },
    created() {
        EmailService.getEmails().then(emails => {
            this.emails = emails
        })

    },
    methods: {
        viewEmailDetails(emailId) {
            this.$router.push('/emails/' + emailId)
            EmailService.getEmailById(emailId).then(email =>{
                this.emailShow = true
            })
        }
    },
    components: {
        EmailPreview,
        EmailView
    },
}