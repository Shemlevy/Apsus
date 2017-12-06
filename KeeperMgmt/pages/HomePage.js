import NoteService from '../services/NoteService.js'

export default {
    template: `
        <section>
            <div class="alert" :class="alertClass" v-if="userMsg">
                {{userMsg.txt}}
            </div>
            <ul class="container">
                <li class="note" v-for="note in notes">
                <router-link tag="div" :to="'/note/' + note.id">
                    <main>
                        <h5>{{note.date}}</h5>
                        <button @click="deleteNote(note.id)">x</button>
                    </main>    
                    <h1>{{note.title}}</h1>
                    <p>{{note.text}}</p>
                    <!-- <img :src="'img/note/' + note.id + '.png'" > -->
                </router-link>    
                </li>
            </ul>
            <button @click="addNote">+</button>
            
        </section>
    
    `,
    data() {
        return {
            notes: [],
            userMsg: null
        }
    },
    created() {
        NoteService.getNotes()
            .then(notes => {
                var userMsg = { txt: 'Notes Loaded', type: 'success' }
                this.showUserMsg(userMsg);
                this.notes = notes
            })
            .catch(err => {
                var userMsg = { txt: 'Notes Loaded Failed!', type: 'danger' }
                this.showUserMsg(userMsg);
                this.notes = []
            })
    },
    methods: {
        showUserMsg(userMsg, delay = 1000) {
            this.userMsg = userMsg;
            setTimeout(() => { this.userMsg = null }, delay)
        },

        deleteNote(noteId) {
            NoteService.deleteNote(noteId)
                .then(_ => {
                    var userMsg = { txt: `Note ${noteId} was succesfuly deleted`, type: 'success' }
                    this.showUserMsg(userMsg);
                })
                .catch(err => {
                    var userMsg = { txt: 'Note Delete Failed!', type: 'danger' }
                    this.showUserMsg(userMsg);
                })
        },
        addNote(){
            var newNote = NoteService.emptyNote()
            NoteService.saveNote(newNote)
            .then(_ => {
                var userMsg = { txt: `Note ${noteId} was created succesfuly`, type: 'success' }
                this.showUserMsg(userMsg);
                this.$router.push(`note/${newNote.id}`)
            })
            .catch(err => {
                var userMsg = { txt: 'Note Created Failed!', type: 'danger' }
                this.showUserMsg(userMsg);
            })
            
            
        }

    },
    computed: {
        alertClass() {
            if (!this.userMsg) return;
            return `alert-${this.userMsg.type}`
        }
    }
}