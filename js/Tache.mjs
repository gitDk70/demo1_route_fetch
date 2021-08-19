export default class Tache {


    static setUsager(usager){
       
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        
        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(usager),
            redirect: 'follow'
          };
          
            
            
    }   

    static logUsager(usager){
       
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        
        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(usager),
            redirect: 'follow'
          };
          
    }   

    static delUsager(auth){
        const entete = new Headers();
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'DELETE',
            headers: entete,
            redirect: 'follow'
          };
          
    }   

    static getUsager(auth){
       
    }   

    

    static setTache (tache, auth){
        
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(tache),
            redirect: 'follow'
          };
          
    }

    static getListeTache (auth){
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'GET',
            headers: entete,
            redirect: 'follow'
          };
          
    }
}
