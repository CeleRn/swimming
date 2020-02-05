import App from '../components/App';

import PageHome from 'PageHome';
import PageCompetitionsList from 'PageCompetitionsList';
import PageCompetitionItem from 'PageCompetitionItem';
// import ContactsPage from './pages/ContactsPage';
// import ProductPage from './pages/ProductPage';



export default [
    {
        component: App,
        routes: [
            {
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
        //     // {
        //     //     component: ProductPage,
        //     //     path: '/product/:aliasProduct'
        //     // }
        ]
    }
]