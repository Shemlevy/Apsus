import HomePage from './pages/HomePage.js'
import NoteDetailsPage from './pages/NoteDetailsPage.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },   
    {
        path: '/note/:noteId',
        component: NoteDetailsPage
    },
];

export default routes;