'use strict'

export default {
    template:`
    <section class="md-layout-item">
        <md-list-item @click="openEmail">
        <div class="md-list-item-text">
          <h3 style="font-size: 18px">{{email.title}}</h3>
          <p>{{shortText}}</p>
          <span>{{email.date}}</span>
        </div>

        <md-button v-if="email.isRead" class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
      </md-list-item>
      <md-divider class="md-inset"></md-divider>
    </section>
    `,
    props: ['email'],
    computed: {
        shortText() {
            let string = this.email.txt
            var dots = "...";
            let limit = 50;
            if (string.length > limit) {
                string = string.substring(0, limit) + dots;
            }
            return string;
        }
    },
    methods: {
        openEmail() {
            this.$emit('viewEmail', this.email.id)
        },
    }

    
}