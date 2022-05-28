import About from '../component/About';
import Contact from '../component/Contact';
import Home from '../component/Home/Home';
import { Login } from '../component/Login';
import Service from '../component/Service';


export const PublicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/contuct", name: "Contact", Component: Contact },
    { path: "/service", name: "Service", Component: Service },
    { path: "/login", name: "Login", Component: Login },
]
