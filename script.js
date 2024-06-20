function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];

    const option = Math.floor(Math.random() * 3)
    return options[option];
}
console.log(getRandomComputerResult());