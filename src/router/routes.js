import { About, Home, Contact, News, OEM, Products, Clients } from '../views'

export const routes = [{
    pathname: '/',
    component: Home,
    isNav: true, 
    exact: true,
    title: 'Home'
},{
    pathname: '/aboutus',
    component: About,
    isNav: true, 
    exact: true,
    title: 'About'
},{
    pathname: '/products',
    component: Products,
    isNav: true, 
    exact: true,
    title: 'Products'
},{
    pathname: '/news',
    component: News,
    isNav: true, 
    exact: true,
    title: 'News'
},{
    pathname: '/clients',
    component: Clients,
    isNav: true, 
    exact: true,
    title: 'Clients'
},{
    pathname: '/oem',
    component: OEM,
    isNav: true, 
    exact: true,
    title: 'OEM'
},{
    pathname: '/contact',
    component: Contact,
    isNav: true, 
    exact: true,
    title: 'Contact'
}]