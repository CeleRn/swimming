import App from '../components/App';

import PageHome from 'PageHome';
import PageCompetitionsList from 'PageCompetitionsList';
import PageCompetitionItem from 'PageCompetitionItem';
import PageContacts from 'PageContacts';
import PageManagments from 'PageManagments';
import PageNewsItem from 'PageNewsItem';
import PageOrders from 'PageOrders';
import PageDocuments from 'PageDocuments';
import PageMaterialsList from 'PageMaterialsList';
import PageMaterialItem from 'PageMaterialItem';
import PagePlacesList from 'PagePlacesList';


export default [{
    component: App,
    routes: [{
            component: PageHome,
            path: '/',
            exact: true
        },
        {
            component: PageCompetitionItem,
            path: '/competitions/:id'
        },
        {
            component: PageCompetitionsList,
            path: '/competitions'
        },
        {
            component: PageContacts,
            path: '/contacts'
        },
        {
            component: PageManagments,
            path: '/management'
        },
        {
            component: PageNewsItem,
            path: '/news/:id'
        },
        {
            component: PageOrders,
            path: '/orders'
        },
        {
            component: PageDocuments,
            path: '/documents'
        },
        {
            component: PageMaterialItem,
            path: '/professionals/materials/:id'
        },
        {
            component: PageMaterialsList,
            path: '/professionals/materials'
        },
        {
            component: PagePlacesList,
            path: '/professionals/places'
        }
    ]
}]