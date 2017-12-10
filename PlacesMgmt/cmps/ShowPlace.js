'use strict';
// import PlaceServices from '../services/PlaceService.js'

export default {
    template: `
    <section>
        <div class="place-modal">
            <img :src="currPlace.img" :alt="currPlace.title">
            <section class="info">
                <h1  :contenteditable="editable" autofocus>{{currPlace.title}}</h1>
                <p  :contenteditable="editable" >{{currPlace.info}}</p>
                <div class="picked-info category">
                    <i :class="currPlace.iconClass"  :title="currPlace.iconTitle" aria-hidden="true"></i>
                    <p>{{currPlace.iconTitle}}</p>
                </div>
            </section>
            <section class="btns-crud">
                <button class="btn-crud" @click="edit">Edit Place</button>
                <button class="btn-crud" @click="deletePlace">Delete Place</button> 
            </section>
        </div>
    </section>
    `,
    props: ['currPlace'],
    data: function () {
        return {
            editable: false,
        }   
    },
    methods: {
        edit(){
            this.editable = !this.editable
        },
        deletePlace () {
           this.$emit('place',this.currPlace.idx) 
        }
      
    },
    computed: {

    },
    mounted: function () {
       
    }
}

