export default class Tache {


    static setUsager(usager){
        //console.log(usager);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(usager),
            redirect: 'follow'
          };
          
            
            
    }   

    static logUsager(usager){
       
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(usager),
            redirect: 'follow'
          };
          
    }   

    static delUsager(auth){
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+auth);

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
          };
          
    }   

    static getUsager(auth){
       
    }   

    

    static setTache (tache, auth){
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+auth);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(tache),
            redirect: 'follow'
          };
          
    }

    static getListeTache (auth){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+auth);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
    }
}
