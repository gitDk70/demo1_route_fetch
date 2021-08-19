import _App from './App.mjs';
import Tache from './Tache.mjs';
import Affichage from './Affichage.mjs';
import page from "//unpkg.com/page/page.mjs";

(function(){
    let App = {};
    document.addEventListener("DOMContentLoaded", ()=>{
        //App = new _App();
        //Tache.setUsager();
        Affichage.afficheEnregistrer();
        Tache.logUsager();

        page("/", ()=>{console.log("page d'accueil")});
        page("/tache", ()=>{console.log("page tache")});
        page("/tache/:id", (ctx)=>{console.log(ctx)});
        page("/connecter", ()=>{console.log("page de login")});
        page("/enregistrer", ()=>{console.log("Enregistrement")});
        page("/ajouter", ()=>{console.log("ajouter")});
        page("*", ()=>{console.log("non trouvé")});
        page({
            hashbang : true
        });

    })
})()
