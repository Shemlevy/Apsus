
import HomePage from './pages/HomePage.js'
import NotesMgmt from './KeeperMgmt/pages/NotesMgmt.js'
import NoteDetailsPage from './KeeperMgmt/pages/NoteDetailsPage.js'
import Testing from './KeeperMgmt/cmps/ColorPicker.js'

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
    {
        path: '/testing',
        component: Testing
    }
];

export default routes;