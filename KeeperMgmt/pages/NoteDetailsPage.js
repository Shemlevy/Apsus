import NoteService from '../services/NoteService.js'
import NotesMgmt from './NotesMgmt.js'

export default {
    template: `
        <section class="note-details" v-if="note">
            <div class="note-view" v-if="note">
                <div class="note-edit-date"">{{note.date}}</div>
                <div class="note-edit-title" @click.once="clearInput"  @blur="updateNote($event ,note)" :contenteditable="true">{{note.title}}</div>
                <div class="note-edit-text"  @click.once="clearInput" @blur="updateNote($event ,note)" :contenteditable="true">{{note.text}}</div>
                <div class="note-edit-img-container">
                    <!-- <img :src="'img/note/' + note.id + '.png'" > -->
                </div>
                <section class="tools">
                    <select>{{note.color}}</select>
                    <select>{{note.priority}}</select>
                </section>
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
        updateNote(ev, note) {
            this.note.text = ev.target.innerText
            NoteService.saveNote(note)
        },
        toggleEditable() {
            this.editable = !this.editable
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
            if (this.note.isNew) ev.target.innerText = ''
            
        }
    }
}

// <main>
// <h5>{{note.date}}</h5>
// <button @click="deleteNote(note.id)">x</button>
// </main>
// <h1 @blur="updateNote($event ,note)" :contenteditable="true">{{note.title}}</h1>
// <p  @blur="updateNote($event ,note)" :contenteditable="true">{{note.text}}</p>
// <!-- <img :src="'img/note/' + note.id + '.png'" > -->
// <section class="tools">
// <select>{{note.color}}</select>
// <select>{{note.priority}}</select>
// </section>