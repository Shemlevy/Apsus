
import HomePage from './pages/HomePage.js'
import NotesMgmt from './KeeperMgmt/pages/NotesMgmt.js'
import NoteDetailsPage from './KeeperMgmt/pages/NoteDetailsPage.js'

const routes = [

    {
        path: '/',
        component: HomePage
    },   
        {
        path: '/notes',
        component: NotesMgmt
    },
    {
        path: '/notes/:noteId',
        component: NoteDetailsPage
    },
];

export default routes;