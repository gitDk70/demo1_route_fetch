
export default class Affichage {
    static afficheEnregistrer(){
        const template = document.querySelector("#tmplEnregistrer").innerHTML;
        const render = Mustache.render(template, {});
        document.querySelector("main").innerHTML = render;
    }
    
}