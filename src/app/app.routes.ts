import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { NewProduct } from './pages/products/section/new-product/new-product';

export const routes: Routes = [
    /* Definimos ruta raíz o por defecto en el proyecto */
    {
        path: "", component: Home
    },
    {
        path: "home", component: Home
    },
    {
        path: "about", component: About
    },
    {
        path: "contact", component: Contact
    },
    {
        path: "products", component: Products
    },
    {
        path: "new-products", component: NewProduct
    }
];
