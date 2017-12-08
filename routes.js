
import HomePage from './pages/HomePage.js'
import NotesMgmt from './KeeperMgmt/pages/NotesMgmt.js'
import NoteDetailsPage from './KeeperMgmt/pages/NoteDetailsPage.js'
import EmailsMgmt from './EmailsMgmt/pages/EmailMgmtPage.js'
import Testing from './KeeperMgmt/cmps/ColorPicker.js'
import PlacesMgmt from './PlacesMgmt/pages/PlacesMgmt.js'

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
        path: '/emails',
        component: EmailsMgmt
    },
    {
        path: '/emails/:emailId',
        component: EmailsMgmt
    },
    {
        path: '/maps',
        component: PlacesMgmt
    },
    {
        path: '/testing',
        component: Testing
    }
];

export default routes;