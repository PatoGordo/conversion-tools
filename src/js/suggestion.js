document.addEventListener("DOMContentLoaded", ()=>{
    var name, email, suggestion
    
    function Vars(){
        name = document.querySelector("#name").value
        email = document.querySelector("#email").value
        suggestion = document.querySelector("#suggestion").value
    }
    function UniqId(){
        var randLetter = String.fromCharCode(75 + Math.floor(Math.random() * 36));
        var uniqid = randLetter + Date.now();
        return uniqid
    }
    function Clear(){
        document.querySelector("#name").value = ''
        document.querySelector("#email").value = ''
        document.querySelector("#suggestion").value = ''
    }
    var db = firebase.database()
    document.querySelector("#form-send").addEventListener("submit", (e)=>{
        e.preventDefault();
        Vars()
            db.ref('Suggestions/'+name+ ' ' +UniqId()).set({
                name: name,
                email: email,
                suggestion: suggestion
            })
            .then(()=>{
                alert("Suggestion has been submitted!! ;)")
            }).catch((error) => {
                alert("Error to submit this Message!! :( error code: "+ error.message)
            })
        Clear()
    })
})