'use strict'

import NoteService from '../services/NoteService.js'

export default {
    template: `
        <section>
            <md-card v-for="note in notes">
                 <div @click="viewNoteDetails(note.id)">
                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-subhead">{{note.date}}</div>
                            <div class="md-title">{{note.title}}</div>
                            <div class="md-subhead">{{note.text}}</div>
                        </md-card-header-text>
                        <md-card-media v-if="note.src">
                            <img src="'img/note/' + note.id + '.png'">
                        </md-card-media>
                    </md-card-header>
                </div>
            </md-card>
          


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
                this.notes = notes
            })
            .catch(err => {
                var userMsg = { txt: 'Notes Loaded Failed!', type: 'danger' }
                this.notes = []
            })
    },
    methods: {
        viewNoteDetails(noteId){
            this.$router.push('/notes/' + noteId)
        },
        deleteNote(noteId) {
            NoteService.deleteNote(noteId)
                .then(_ => {
                    var userMsg = { txt: `Note ${noteId} was succesfuly deleted`, type: 'success' }
                })
                .catch(err => {
                    var userMsg = { txt: 'Note Delete Failed!', type: 'danger' }
                })
        },
        addNote(){
            var newNote = NoteService.emptyNote()
            NoteService.saveNote(newNote)
            this.$router.push(`notes/${newNote.id}`)
        }

    },
    computed: {
        alertClass() {
            if (!this.userMsg) return;
            return `alert-${this.userMsg.type}`
        }
    }
}


// {/* <ul class="container">
// <li class="note" v-for="note in notes">
// <router-link tag="div" :to="'/note/' + note.id">
//     <main>
//         <h5>{{note.date}}</h5>
//         <button @click="deleteNote(note.id)">x</button>
//     </main>    
//     <h1>{{note.title}}</h1>
//     <p>{{note.text}}</p>
//     <!-- <img :src="'img/note/' + note.id + '.png'" > -->
// </router-link>    
// </li>
// </ul> */}