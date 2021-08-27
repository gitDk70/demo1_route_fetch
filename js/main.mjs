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
        Tache.getListeTache(info.usager.token)
                .then(donnees => {
                    console.log(donnees)
                    info.taches = donnees.data;
                    console.log(info.taches)

                    if(template){
                        Affichage.afficherTemplate(template, info, document.querySelector("main"));   // tmpl, data, noeud
                    }
                });
        
        
        
        
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

        
        page({
            hashbang : true
        });


        document.querySelector("main").addEventListener("click", function(evt){
            console.log(evt.target)

            if(evt.target.classList.contains("actionEnregistrer")){
              
                let enrNode = document.querySelector("#enregistrer");
                let uname = enrNode.querySelector("input[name='name']").value;
                let uemail = enrNode.querySelector("input[name='email']").value;
                let upwd = enrNode.querySelector("input[name='password']").value;
                let uage = enrNode.querySelector("input[name='age']").value;

                let usager = {
                    name: uname,
                    email : uemail,
                    password : upwd,
                    age : uage
                }

                Tache.setUsager(usager);
            }

            if(evt.target.classList.contains("actionEffacerUsager")){
                if(info.usager.token){
                    Tache.delUsager(info.usager.token);
                    info.usager = {};
                }
                
            }

            if(evt.target.classList.contains("actionConnecter")){
               
                let coNode = document.querySelector("#connection"),
                    uemail = coNode.querySelector("input[name='email']").value,
                    upwd   = coNode.querySelector("input[name='password']").value;

                let usager = {
                        email : uemail,
                        password : upwd,
                    }

                Tache.logUsager(usager)
                    .then(infoLogin =>{
                        info.usager = infoLogin;
                        console.log(info.usager)
                    });
            }
            
            
            if(evt.target.classList.contains("actionDeconnecter")){
                info.usager = {};
            }

           

            if(evt.target.classList.contains("actionAjouter")){
                
                let tacheNode = document.querySelector('#ajouterTache'),
                    tdescription = tacheNode.querySelector("input[name='description']").value;
                
                let tache = {
                        description : tdescription,
                        
                    }  
                    console.log(info.usager.token);  
                if(info.usager.token){

                    Tache.setTache(tache, info.usager.token);
                }   
            }

            if(evt.target.classList.contains("material-icons")){
                //click sur l'icone du delete
                let liNode = evt.target.parentNode;  //recuperation du id de la tache avec le dataset
                console.log("tache id : "+liNode.dataset.id);
              
                Tache.delTache(liNode.dataset.id,info.usager.token) //appel de la methode delTache pour la suppression de la tache
            }

            // Si l'evenement click se fait sur une tache
            if(evt.target.getAttribute("data-id")){

                let liNode = evt.target;
                console.log("tache id : "+liNode.dataset.id);

                Tache.updateTache(liNode.dataset.id,info.usager.token)
                .then(infoTache => {   //les données de la tache clickee, reçue suite au fetch (PUT sur {{url}}/task/idTache)
                      console.log(infoTache.data.completed)
                      console.log(infoTache.data.completed)
                      evt.target.classList.toggle("complete"); //tache completee, toggle de la classe "complete" 
                      console.log(infoTache.data);  
                      
                });
                    
                
            }

        })

    })
})()
