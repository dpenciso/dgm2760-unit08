const question = {
    stem: "Who is burried in Grant's Tomb?",
    option1: "Gary",
    option2: "Teddy",
    option3: "Grant",
    option4: "Ned",
    correct: 3,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent = "You are CORRECT!"
        } 
        else {
            document.querySelector('.feedback').textContent = "You are INCORRECT..."
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))

document.querySelector('#answer2').addEventListener('click', () => question.check(2))

document.querySelector('#answer3').addEventListener('click', () => question.check(3))

document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()