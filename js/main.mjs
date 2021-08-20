import _App from './App.mjs';
import Tache from './Tache.mjs';
import Affichage from './Affichage.mjs';
import page from "//unpkg.com/page/page.mjs";

(function(){
    let App = {};
    
    // Toujours s'assurer que le DOM est prêt avant de manipuler le HTML.
    document.addEventListener("DOMContentLoaded", ()=>{
        //App = new _App();
        //Tache.setUsager();
        Affichage.afficheEnregistrer();
        //Tache.logUsager();

        // Création des routes avec page.js => Devra être déplacé dans App pour plus de cohérence.
        page("/", ()=>{console.log("page d'accueil")});
        page("/tache", ()=>{console.log("page tache")});
        
        page("/tache/:id", (ctx)=>{console.log(ctx)});  // Exemple d'une route avec un paramètre.
        
        page("/connecter", ()=>{console.log("page de login")});
        page("/enregistrer", ()=>{console.log("Enregistrement")});
        page("/ajouter", ()=>{console.log("ajouter")});
        page("*", ()=>{console.log("non trouvé")});
        
        // Lancement du router, avec les #!/routes (hashbang)
        page({
            hashbang : true
        });

    })
})()
