function isValidInput(text) {
    return /^[a-z\s]+$/.test(text);
}

function encrypt(message) {
    if (!isValidInput(message)) {
        return "Entrada inválida. Use apenas letras minúsculas, sem acentos ou caracteres especiais.";
    }
    return message.replace(/e/g, 'enter')
                  .replace(/i/g, 'imes')
                  .replace(/a/g, 'ai')
                  .replace(/o/g, 'ober')
                  .replace(/u/g, 'ufat');
}

function decrypt(message) {
    if (!isValidInput(message)) {
        return "Entrada inválida. Use apenas letras minúsculas, sem acentos ou caracteres especiais.";
    }
    return message.replace(/enter/g, 'e')
                  .replace(/imes/g, 'i')
                  .replace(/ai/g, 'a')
                  .replace(/ober/g, 'o')
                  .replace(/ufat/g, 'u');
}

function encryptMessage() {
    var message = document.getElementById("message").value;
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = encrypt(message);
}

function decryptMessage() {
    var message = document.getElementById("message").value;
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = decrypt(message);
}

function copyToClipboard() {
    var resultDiv = document.getElementById("result");
    var resultText = resultDiv.textContent || resultDiv.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = resultText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Texto copiado para a área de transferência!");
}
