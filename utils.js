export function rockPaperScissor(userThrow, cpuThrow) {
    if (
        (userThrow === 'rock' && cpuThrow === 'scissor')
        ||
        (userThrow === 'scissor' && cpuThrow === 'paper')
        || (userThrow === 'paper' && cpuThrow === 'rock')
    ) 
    { return 'user';}
    else if (userThrow === cpuThrow) {
        return 'draw';
    } else {
        return 'computer';
    }
}

export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = 'rock'; 
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}