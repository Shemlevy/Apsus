import NoteService from '../services/NoteService.js'
import NotesMgmt from './NotesMgmt.js'
import ColorPicker from '../cmps/ColorPicker.js'

export default {
    template: `
        <section class="note-details" v-if="note">
            <div class="note-view" v-if="note">
                <div class="note-edit-date"">{{note.date}}</div>
                <div class="note-edit-title" @click.once="clearInput"  @blur="updateTitle($event ,note)" :contenteditable="true">{{note.title}}</div>
                <div class="note-edit-text"  @click.once="clearInput" @blur="updateText($event ,note)" :contenteditable="true">{{note.text}}</div>
                <div class="note-edit-img-container">
                    <!-- <img :src="'img/note/' + note.id + '.png'" > -->
                </div>
                <section class="tools">
                    <color-picker :value="note.color" @saveColor="changeColor"></color-picker>
                    <select>{{note.priority}}</select>
                </section>
                <md-button class="md-raised md-accent" @click="deleteNote(note.id)">Delete</md-button>
            </div>
        </section>
    `,
    data() {
        return {
            note :  null,
        }
    },
    created() {
        var noteId = +this.$route.params.noteId
        NoteService.getNoteById(noteId)
         .then(note => {
             this.note = note
            })
         .catch(err => {
             this.$router.push('/notes')
         })
    },

    methods: {
        changeColor(color){
            this.note.color = color
        },
        updateTitle(ev, note) {
            this.note.title = ev.target.innerText
            this.note.newTitle = false;
            NoteService.saveNote(note)
        },
        updateText(ev, note) {
            this.note.text = ev.target.innerText
            this.note.newText = false;
            NoteService.saveNote(note)
        },
        deleteNote(noteId) {
            NoteService.deleteNote(+noteId)
                .then(_ => {
                    this.$router.push('/notes')
                })
                .catch(err =>
                    console.log('Error')     
            )
        },
        clearInput(ev){
            var text = this.note
            if (text.newTitle || text.newText) ev.target.innerText = ''
            
        }
    },
    components: {
        ColorPicker
    },
}

