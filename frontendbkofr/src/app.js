import ProductScreen from "./Screens/ProductScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";
import { parseRequestUrl } from "./utils.js";
import Error404Screen from "./Screens/Erro404Screen.js";

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen,
}
const router = () => {
    const request = parseRequestUrl();
    //if request exist return request else return  homescreen concat ...
    const parseUrl = (request.resource ? `/${request.resource}`: '/')+ 
    (request.id? '/:id': '')+
    (request.verb ? `/${request.verb}`: '')
    const main = document.getElementById("main-container");
    const screen = routes[parseUrl] ? routes[parseUrl] : Erro404Screen;
    main.innerHTML = screen.render();
};

window.addEventListener('load', router);
window.addEventListener('haschange', router);