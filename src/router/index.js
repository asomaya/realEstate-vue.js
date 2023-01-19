import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main";
import About from "../views/About";
import Clients from "../views/Clients";
import Blog from "../views/Blog";
import Contact from "../views/Contact";
const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/About",
    name: "AboutUs",
    component: About,
  },
  {
    path: "/Broker",
    name: "OurClients",
    component: Clients,
  },
  {
    path: "/Blog",
    name: "OurBlog",
    component: Blog,
  },
  {
    path: "/Contact",
    name: "ContactUs",
    component: Contact,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
