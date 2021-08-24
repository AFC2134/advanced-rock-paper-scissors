function rpsGame(yourChoice) {
    console.log(yourChoice);
    // console.log(yourChoice.src);
    let humanChoice, BotChoice;
    humanChoice = yourChoice.id
    BotChoice = numberToChoice(randomToRpsInt());
    console.log('computer choice:', BotChoice);
    results = decideWinner(humanChoice, BotChoice); // [o, 1] human lost
    console.log(results)
    message = finalMessege(results); // object {message: 'you won!', 'color': 'green'}
    rpsFrontEnd(yourChoice.id, BotChoice, message);
    console.log(message);
}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
} 

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }
    
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessege([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'YOU LOST!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'YOU TIED!', 'color': 'yellow'};
    } else {
        return {'message': 'YOU WON!!!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, BotImageChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
 
    // remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] +"'height=150 width=150 style='box-shadow: 0px 15px 60px: rgba(37, 50, 233, 1);'>"
    botDiv.innerHTML = "<img src='" + imagesDataBase[BotImageChoice] +"'height=150 width=150 style='box-shadow: 0px 15px 60px: rgba(243, 28, 24, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px '>" + finalMessage['message'] + "</h1>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
   
}
function reset() {
    document.getElementById('flex-box-rps-div').remove()
}