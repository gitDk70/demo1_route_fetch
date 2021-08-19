import _App from './App.mjs';
import Tache from './Tache.mjs';
import Affichage from './Affichage.mjs';

(function(){
    let App = {};
    document.addEventListener("DOMContentLoaded", ()=>{
        //App = new _App();
        //Tache.setUsager();
        Affichage.afficheEnregistrer();
        Tache.logUsager();
    })
})()
