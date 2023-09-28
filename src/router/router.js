import About from "../Pages/About";
import Items from "../Pages/Items"
import Basket from "../Pages/Basket"
import ItemIdPage from "../Pages/ItemIdPage";
import Login from "../Pages/Login"
export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/items', component: Items, exact: true},
    {path: '/basket', component: Basket, exact: true},
    {path: '/items/:id', component: ItemIdPage, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]