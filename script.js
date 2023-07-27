function afficherMessage() {
    var points = parseInt(document.getElementById('points').value);
    var messageDiv = document.getElementById('message');
    var message = "";

    if (isNaN(points)) {
        message = "Veuillez entrer un nombre valide.";
    } else {
        if (points >= 950) {
            for (var i = 1; i <= 20; i++) {
                message += "Va étudier, ces points ne vont pas se faire tout seuls.<br>";
            }
        } else {
            message = "Pourquoi êtes-vous allé à l'école ?";
        }
    }

    messageDiv.innerHTML = message;
}
