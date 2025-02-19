function updateLength() {
    document.getElementById("lengthValue").textContent = document.getElementById("length").value;
}

function generatePassword() {
    let length = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    let lowercase = document.getElementById("lowercase").checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    let numbers = document.getElementById("numbers").checked ? "0123456789" : "";
    let symbols = document.getElementById("symbols").checked ? "!@#$%^&*" : "";
    
    let characters = uppercase + lowercase + numbers + symbols;
    if (characters === "") {
        alert("Выберите хотя бы один тип символов!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password;
}