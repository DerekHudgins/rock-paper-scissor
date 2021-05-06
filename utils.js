export function rockPaperScissor(userThrow, computerChoice) {
    if (userThrow === 'rock' && computerChoice === 'rock') {
        return 'draw';
    } else if (userThrow === 'rock' && computerChoice === 'paper') {
        return 'lose';
    } else if (userThrow === 'rock' && computerChoice === 'scissor') {
        return 'win';
    } else if (userThrow === 'scissor' && computerChoice === 'scissor') {
        return 'draw';
    } else if (userThrow === 'scissor' && computerChoice === 'rock') {
        return 'lose';
    } else if (userThrow === 'scissor' && computerChoice === 'paper') {
        return 'win';
    } else if (userThrow === 'paper' && computerChoice === 'paper') {
        return 'draw';
    } else if (userThrow === 'paper' && computerChoice === 'rock') {
        return 'win';
    } else if (userThrow === 'paper' && computerChoice === 'scissor') {
        return 'lose';
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
        computerChoice = 'scissor';
    }
    return computerChoice;
}