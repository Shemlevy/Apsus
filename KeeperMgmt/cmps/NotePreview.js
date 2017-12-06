'use strict';
export default {
    template: ` 
    <md-card>
    <div @click="openNote">
       <md-card-header>
           <md-card-header-text>
               <div class="md-subhead">{{note.date}}</div>
               <div class="md-title">{{note.title}}</div>
               <div class="md-subhead">{{shortText}}</div>
           </md-card-header-text>
           <md-card-media v-if="note.src">
               <img src="'img/note/' + note.id + '.png'">
           </md-card-media>
       </md-card-header>
   </div>
    </md-card>
    `,
    props: ['note'],
    computed: {
        shortText() {
            let string = this.note.text
            var dots = "...";
            let limit = 150;
            if (string.length > limit) {
                string = string.substring(0, limit) + dots;
            }
            return string;
        }
    },
    methods: {
        openNote() {
            this.$emit('viewNote', this.note.id)
        },
    }
}
