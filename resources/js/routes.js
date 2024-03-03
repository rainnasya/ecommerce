// import HomePageComponent from './components/HomePageComponent.vue';
// import UserPageComponent from './components/UserPageComponent.vue';
import Produk from './components/Produk.vue'; 
import Home from './components/Home.vue'; 
import Navbar from './components/Navbar.vue'; 


export const routes = [
    {
        path: "/",
        name: 'home',
        component: Home
    },
    {
        path: "/navbar",
        name: 'navbar',
        component: Navbar,
    },
    {
        path: "/produk",
        name: 'produk',
        component: Produk,
    },
   
]