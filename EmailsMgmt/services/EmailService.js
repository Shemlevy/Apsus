
'use strict';

var emails = [
    {
        id: 1,
        title: 'ok',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.',
        from: 'ben123tu@gmail.com',
        date: '7/12/2015 11:40:24',
        isRead: false,
        isMine: false,
    },
    {
        id: 2,
        title: 'more then ok',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.',
        from: 'shemtov@gmail.com',
        date: '4/12/2016 16:24:24',
        isRead: false,
        isMine: false,
    },
    {
        id: 3,
        title: 'can get better',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.',
        from: 'wtf@gmail.com',
        date: '7/08/2014 13:24:24',
        isRead: true,
        isMine: true,
    },
]

function _emptyEmail() {
    return {
        id: _getNextId,
        title: '',
        txt: '',
        from: '',
        date: '',
        isRead: true,
        isMine: true,
    }
}

function _getNextId() {
    var maxId = emails.reduce((acc, email)=>{
        return (email.id > acc)? email.id : acc
    }, 0);
    return maxId + 1;
} 

function getEmails() {
    return new Promise((resolve, reject) => {
        if(emails){
            resolve(emails)
        }
        else{
            return reject()
        }
    })
}

function deleteEmail(emailId) {
    return new Promise((resolve, reject) => {
        var email = emails.find(email => email.id === emailId)
        if(email){
            emails.splice(email.id, 1)
            resolve()
        }else{
            reject()
        }
    })
}

function getEmailById(emailId) {
    return new Promise((resolve, reject) => {
        var email = emails.find(email => email.id === +emailId)
        if(email){
            resolve(email)
        }else{
            reject()
        }
    })
}


function sendMail(email) {
    emails.push(email)
}

function searchEmails(input) {
    var sortEmails = emails.fliter(email => {
        email.txt.includes(input)
    })
    return sortEmails
}

function sortReadEmails(boolean) {
    var sortEmails = emails.filter(email => {
        email.isRead === boolean
    })
}

function sortEmailsBy(param) {
    var sortEmails = emails.sort(function(a,b) {
        return a.param < b.param
    })
    return sortEmails
}

export default{
    getEmails,
    getEmailById,
    deleteEmail,
    searchEmails,
    sortReadEmails,
    sortEmailsBy,
    sendMail
}