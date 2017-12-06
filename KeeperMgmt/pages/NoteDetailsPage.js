import NoteService from '../services/NoteService.js'
import HomePage from './HomePage.js'

export default {
    template: `
        <section class="note-details" v-if="note">
             <main>
             {{userMsg.txt}}
                <h5>{{note.date}}</h5>
                <button @click="deleteNote(note.id)">x</button>
            </main>
            <h1 @blur="updateNote($event ,note)" :contenteditable="true">{{note.title}}</h1>
            <p  @blur="updateNote($event ,note)" :contenteditable="true">{{note.text}}</p>
            <!-- <img :src="'img/note/' + note.id + '.png'" > -->
            <section class="tools">
                <select>{{note.color}}</select>
                <select>{{note.priority}}</select>
            </section>
        </section>
    `,
    data() {
        return {
            note :  null,
            userMsg: {txt:'',type:''}
        }
    },
    created() {
        var noteId = +this.$route.params.noteId
        NoteService.getNoteById(noteId)
         .then(note => this.note = note)
         .catch(err => {
             this.$router.push('/')
         }) 
    },
    methods: {
        updateNote(ev, note) {
            this.note.txt = ev.target.innerText
            NoteService.saveNote(note)
            console.log('note updsate');
        },
        toggleEditable() {
            this.editable = !this.editable
        },
        deleteNote(noteId) {
            NoteService.deleteNote(+noteId)
                .then(_ => {
                    var userMsg = { txt: `Note ${noteId} was succesfuly deleted`, type: 'success' }
                    this.$router.push('/')
                    HomePage.showUserMsg(userMsg);
                })
                .catch(err => {
                    var userMsg = { txt: 'Note Delete Failed!', type: 'danger' }
                    this.showUserMsg(userMsg);
                    HomePage.showUserMsg(userMsg);
                    
                })
        },
    }
}