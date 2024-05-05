import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Whiskeys from '../components/Whiskeys'
import Cart from '../components/Cart/Cart'
import CartPage from '../pages/CartPage'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    },
    {
      path: "/whiskeys",
      component: Whiskeys,
      name: "whiskeys",
      protected: false
    },
    {
      path: "/Cart",
      component: CartPage,
      name: "Cart",
      protected: false
    }
];

export default routes