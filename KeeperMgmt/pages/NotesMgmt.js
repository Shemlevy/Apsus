'use strict'
import NotePreview from '../cmps/NotePreview.js'
import NoteService from '../services/NoteService.js'

export default {
    template: `
        <section>
            <router-link to="/notes" exact>All</router-link>
            <note-preview @viewNote="viewNoteDetails" v-for="note in notes" :note="note"></note-preview>
            <button @click="addNote">+</button>
            <button @click="dateSorted('date')">datesort</button>
            <button @click="prioritySorted('priority')">priority</button>
        </section>
    `,
    data() {
        return {
            notes: [],

        }
    },
    created() {
        NoteService.getNotes()
            .then(notes => {
                console.log('get notes?', notes);
                var userMsg = { txt: 'Notes Loaded', type: 'success' }
                this.notes = notes
            })
            .catch(err => {
                var userMsg = { txt: 'Notes Loaded Failed!', type: 'danger' }
                this.notes = []
            })

    },

    methods: {
        viewNoteDetails(noteId) {
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
        addNote() {
            var newNote = NoteService.emptyNote()
            NoteService.saveNote(newNote)
            this.$router.push(`notes/${newNote.id}`)
        },
        dateSorted() {
            var notes = NoteService.sortByDate()
            this.note = notes
        },
        prioritySorted() {
            var notes = NoteService.sortByDate()
            this.note = notes
        }
    },
    computed: {

    },
    components: {
        NotePreview
    }
}
