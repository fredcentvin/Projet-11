const apiUrl ="http://localhost:3001/api/v1";

const email = username
const password = 


async function AuthenUser() {
    try{
        const response = await fetch(apiUrl+"user/login",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(email.value,password.value),
        })
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            window.location.href = ".././index.html";
            
        } else {
            console.error("Erreur lors de la connexion à l'API");
            // messError.textContent = "Erreur lors de la connexion, veuillez reessayer";
        }
    }
    catch (error) {
        console.error("Erreur réseau :", error);
        // messError.textContent = "Veuillez saisir vos identifiants";
    }
    }
    export default AuthenUser