// Adding a comment. Or two or three
const messages = ['Happy wife, happy life', 'Don\'t drink and drive', 'We don\'t need no stinking badges!', 'Beam me up, Scotty', 'The sun is shining... but the ice is slippery', 'May the Force be with you', 'Play it again, Sam.', 'Love will find a way.', 'Kittens be cute', 'Dragons in heraldry', 'Uncles are cool'];
let randomNumber = Math.floor(Math.random() * 11);
let printedMessage = messages[randomNumber];
document.getElementById("message").innerHTML = printedMessage

function displayMessage(){
    const messages = ['Happy wife, happy life', 'Don\'t drink and drive', 'We don\'t need no stinking badges!', 'Beam me up, Scotty', 'The sun is shining... but the ice is slippery', 'May the Force be with you', 'Play it again, Sam.', 'Love will find a way.', 'Kittens be cute', 'Dragons in heraldry', 'Uncles are cool'];
    let randomNumber = Math.floor(Math.random() * 11);
    let printedMessage = messages[randomNumber];
    document.getElementById("message").innerHTML = printedMessage
}
// adding another comment Just to see if it works!