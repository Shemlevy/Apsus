
var notes = [
    {
        id: 101,
        title: 'Audi',
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maxime dolores, sunt necessitatibus inventore culpa recusandae fugit provident, alias unde totam molestiae nostrum voluptate obcaecati facere, beatae sit soluta officia?`,
        img: 'url',
        color: 'red',
        priority: 3,
        date: '7/12/2015 11:40:24'
    },
    {
        id: 102,
        title: 'Rangler',
        text: `Lorem, ipsum alias unde totam molestiae nostrum voluptate obcaecati facere, beatae sit soluta officia?`,
        img: 'url',
        color: 'blue',
        priority: 5,
        date: '4/12/2016 16:24:24'
    },
    {
        id: 103,
        title: 'Rangler',
        text: `Lorem, ipsum alias unde totam molestiae anie when you want wnath want me taga dam dam da tam nostrum voluptate obcaecati facere, beatae sit soluta officia?`,
        img: 'url',
        color: 'black',
        priority: 1,
        date: '7/08/2014 13:24:24'
    },
]
var _upAndDown = !_upAndDown


function emptyNote() {
    return { id: '', title: 'Title', text: 'Text', img: '', color: '', priority: '', date: _getDate(), newTitle: true, newText: true }
}

function _getNextId() {
    if (!maxId) {
        var maxId = notes.reduce((acc, note) => {
            return (note.id > acc) ? note.id : acc
        }, 0);
    }
    return maxId + 1;
}

function _getDate() {
    var result = '';
    var d = new Date();
    result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() +
        ' ' + d.getHours() + ':' + d.getMinutes() + ':' +
        d.getSeconds();
    return result;
}


function getNotes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(notes)
        }, 500)
    });
}

function saveNote(note) {
    console.log('note save')
    return new Promise((resolve, reject) => {
        if (note.id) {
            var noteToUpdateIdx = notes.findIndex(currNote => currNote.id === note.id)
            notes.splice(noteToUpdateIdx, 1, note);
            console.log('note number', note.id, 'was save');
        } else {
            note.id = _getNextId();
            notes.push(note);
            console.log('i create a new one');
        }
        resolve(notes)
    });
}

function deleteNote(noteId) {
    return new Promise((resolve, reject) => {
        var noteIdx = notes.findIndex(note => note.id === noteId)
        notes.splice(noteIdx, 1);
        resolve()
    });
}


function getNoteById(noteId) {
    return new Promise((resolve, reject) => {
        var foundNote = notes.find(note => note.id === noteId)
        if (foundNote) resolve(foundNote)
        else reject();
    })
}

function sortByDate() {
    _upAndDown = !_upAndDown
    notes.sort(function (a, b) {
        if (_upAndDown) return a.date > b.date;
        else return b.date > a.date;
    })
    return notes
}
function sortBypriority() {
    _upAndDown = !_upAndDown
    notes.sort(function (a, b) {
        if (_upAndDown) return a.priority > b.priority;
        else return b.priority > a.priority;
    })
    return notes
}



export default {
    getNotes,
    saveNote,
    deleteNote,
    emptyNote,
    getNoteById,
    sortByDate
}