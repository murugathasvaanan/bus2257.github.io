// var firebase = require("firebase/app");
// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBbTnjlyAujsH5rQlC9NxdPfnE1TH9klFQ",
//     authDomain: "bus2257-2993d.firebaseapp.com",
//     databaseURL: "https://bus2257-2993d-default-rtdb.firebaseio.com",
//     projectId: "bus2257-2993d",
//     storageBucket: "bus2257-2993d.appspot.com",
//     messagingSenderId: "507712596118",
//     appId: "1:507712596118:web:0a5bb3bc314d5e938d3ab7",
//     measurementId: "G-S6NVGPSYBM"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);

import dashboard from "./views/dashboard.js";
import business from "./views/business.js";
import petOwner from "./views/petOwner.js";
import createAccount from "./views/createAccount.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null,null,url);
    router();
};

const router = async() => {
    // console.log(pathToRegex("/business/:id"));
    const routes = [
        {path: "/", view: dashboard},
        {path: "/business", view: business},
        {path: "/petOwner", view: petOwner},
        {path: "/business/:id", view: createAccount},
        {path: "/petOwner/:id", view: createAccount}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            routes: routes[0],
            result: [location.pathname]
        };
    };

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(potentialMatches);
    // console.log(match.route.view());
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});