import App from '../components/App';

import PageHome from 'PageHome';
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
        //     {
        //         component: ContactsPage,
        //         path: '/contacts'
        //     },
        //     // {
        //     //     component: ProductPage,
        //     //     path: '/product/:aliasProduct'
        //     // }
        ]
    }
]