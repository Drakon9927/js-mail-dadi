
document.querySelector('button').addEventListener('click', function() {
    const player1 = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;

    // Array
    const scores = [player1, computer];

    console.log("Punteggio Player 1: ", scores[0]);
    console.log("Punteggio Computer: ", scores[1]);

    let winner;
    if (scores[0] > scores[1]) {
        winner = "Player 1";
    } else if (scores[1] > scores[0]) {
        winner = "Computer";
    } else {
        winner = "Pareggio";
    }

    document.querySelector('h2').textContent = `Il vincitore è: ${winner}`;
    console.log("Il vincitore è: ", winner);
});