import About from "../components/frontend/About";
import Contact from "../components/frontend/Contact";
import Hoempage from "../components/frontend/Homepage";
import Misson from "../components/frontend/Misson";
import Product from "../components/frontend/Product";
import Profile from "../components/frontend/Profile";
import Vission from "../components/frontend/Vission";

const routes = [
    {path: '/', exact: true, name:  'Homepage', component: Hoempage},
    {path: '/about', exact: true, name: 'About', component: About},
    {path: '/profile', exact: true, name: 'profile', component: Profile},
    {path: '/misson', exact: true, name: 'misson', component: Misson},
    {path: '/vission', exact: true, name: 'vission', component: Vission},
    {path: '/product', exact: true, name: 'product', component: Product},
    {path: '/contact', exact: true, name: 'contact', component: Contact},
];

export default routes;