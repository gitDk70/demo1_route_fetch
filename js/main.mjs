import _App from './App.mjs';
import Tache from './Tache.mjs';
import Affichage from './Affichage.mjs';
import page from "//unpkg.com/page/page.mjs";

(function(){
    let App = {};
    const info = {usager : {}, taches:[]};

    const aRoutes = [
        {chemin : "/enregistrer", fichier:"enregistrer.html", tmpl:"", cb: cbEnregistrer},
        {chemin : "/tache", fichier:"tache.html", tmpl:"", cb: function(){}},
        {chemin : "/ajouter", fichier:"ajouter.html", tmpl:"", cb: function(){}},
        {chemin : "/", fichier:"tache.html", tmpl:"", cb: function(){}},
        {chemin : "/connecter", fichier:"connecter.html", tmpl:"", cb: cbConnecter},
    ];
    
    
    
    function cbEnregistrer(ctx) {
        let template;
        aRoutes.forEach(uneRoute => {            
            if(uneRoute.chemin == ctx.path){
                template = uneRoute.tmpl;
            }
        });

        if(template){
            Affichage.afficherTemplate(template, info, document.querySelector("main"));   // tmpl, data, noeud
        }
        
        console.log("enregistrer ...")
    };
    function cbConnecter(ctx) {
        let template;
        aRoutes.forEach(uneRoute => {            
            if(uneRoute.chemin == ctx.path){
                template = uneRoute.tmpl;
            }
        });

        if(template){
            Affichage.afficherTemplate(template, info, document.querySelector("main"));   // tmpl, data, noeud
        }
        
        console.log("enregistrer ...")
    };

    // Toujours s'assurer que le DOM est prêt avant de manipuler le HTML.
    document.addEventListener("DOMContentLoaded", ()=>{
        
        Affichage.chargementTemplate(aRoutes)
            .then(() => {
                // prêt à afficher/créer mes routes.
                aRoutes.forEach(uneRoute =>{
                    page(uneRoute.chemin, uneRoute.cb); // Configuration de l'ensemble des routes.
                })
            });

        // Lancement du router, avec les #!/routes (hashbang)
        page({
            hashbang : true
        });

    })
})()
