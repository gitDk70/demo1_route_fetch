import _App from './App.mjs';
import Tache from './Tache.mjs';
import Affichage from './Affichage.mjs';
import page from "//unpkg.com/page/page.mjs";

(function(){
    let App = {};
    const info = {usager : {}, taches:[]};

    const aRoutes = [
        {chemin : "/enregistrer", fichier:"enregistrer.html", tmpl:"", cb: cbEnregistrer},
        {chemin : "/tache", fichier:"tache.html", tmpl:"", cb: cbTaches},
        {chemin : "/ajouter", fichier:"ajouter.html", tmpl:"", cb: cbAjouter},
        {chemin : "/", fichier:"tache.html", tmpl:"", cb: function(){}},
        {chemin : "/connecter", fichier:"connecter.html", tmpl:"", cb: cbConnecter},
    ];
    /**
     * Retourne le template pour l'affichage avec Mustache
     * Trop spécifique pour être placé dans le module Affichage (deux dépenses)
     *
     * @param {Object} ctx
     * @returns {string}
     */
    function getTemplate (ctx){
        let template;
        aRoutes.forEach(uneRoute => {            
            if(uneRoute.chemin == ctx.path){
                template = uneRoute.tmpl;
            }
        });
        return template;
    }
    
    function cbEnregistrer(ctx) {
        let template = getTemplate(ctx);

        if(template){
            Affichage.afficherTemplate(template, info, document.querySelector("main"));   // tmpl, data, noeud
        }
        
        console.log("enregistrer ...")
    };
    function cbConnecter(ctx) {
        let template = getTemplate(ctx);

        if(template){
            Affichage.afficherTemplate(template, info, document.querySelector("main"));   // tmpl, data, noeud
        }
        
        console.log("enregistrer ...")
    };

    function cbTaches(ctx) {
        let template = getTemplate(ctx);

        if(template){
            Affichage.afficherTemplate(template, info, document.querySelector("main"));   // tmpl, data, noeud
        }
        
        
    };

    function cbAjouter(ctx) {
        let template = getTemplate(ctx);
        if(template){
            Affichage.afficherTemplate(template, info, document.querySelector("main"));   // tmpl, data, noeud
        }
        
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
