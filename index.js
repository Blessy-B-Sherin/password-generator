let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "1","2","3","4","5","6","7","8","9",
    "!","@","#","$","%","&","*"];

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        let pass = Math.floor(Math.random() * characters.length);
        password += characters[pass];
    }
    return password;
}

document.getElementById('generatePassword').addEventListener('click', () => {
    let length = parseInt(document.getElementById('password-length').value);
    if (isNaN(length) || length <= 0) {
        alert('Please enter a valid number');
        return;
    }
    
    let passwordOutputs = document.querySelectorAll('.password-output');
    passwordOutputs.forEach(output => {
        output.value = generatePassword(length);
    });
});

document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
        let passwordOutput = btn.previousElementSibling;
        passwordOutput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });
});