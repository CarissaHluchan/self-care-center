var affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.',
];

var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don\'t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.',
];

/**### Add Random Affirmation and Mantra feature
- When a user selects a message option and then clicks the “Receive Message” button, 
the user sees a random message from the list of possible messages for that category
- When the message appears, the mediation icon disappears from the message area */

var affirmationButton = document.querySelector('#affirmation-radio');
var mantraButton = document.querySelector('#mantra-radio');
var messageButton = document.querySelector('#message-button');
var messageSection = document.querySelector('#visible-message')
var deleteButton = document.querySelector('#delete-button');

affirmationButton.addEventListener('click', affirmationClick);
mantraButton.addEventListener('click', mantraClick);
// messageButton.addEventListener('click', receiveMessage);
deleteButton.addEventListener('click', deleteMessage);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function affirmationClick() {
    console.log('affirmation', event.target.checked);
    console.log('opposite', mantraButton.checked)
    // radio button
    // returns a random item from the array of affirmations
    // use getRandomIndex 
    receiveMessage(affirmations);
};

function mantraClick() {
    console.log('mantra', event.target.checked);
    console.log('opposite', affirmationButton.checked)
    // radio button 
    // returns a random string from the array of mantras
    // recieve message
    receiveMessage(mantras);
};

function receiveMessage(messages) {
    var randomIndex = getRandomIndex(messages);
    console.log('message', messages[randomIndex]);
    // useing the results of the affirmation Click or mantra click 
    // returns a random message
    // shows the message to the page
    // saves the message to a new dom array
    // research: how to take in one string and ignore the other
    // pass a single arrg 
    // use getRandomIndex 

    // when a user clicks recieve message the image will go away
    // clear out the inner.HTML
    // once clear use the inner.HTML to insert the message
}

// if (affirmationClick()) {
//     messageButton.addEventListener('click', affirmationMessage)
// }
// function affirmationMessage() {
//     messageSection.innerHTML += `<section id="visible message">${messages[randomIndex]}</section>`;
// }
// function receiveMessageButton(messages) {
//     if (messageButton.addEventListener('click', receiveMessage)) {
//         console.log(messages[randomIndex])
//         messageSection.innerHTML += `<section id="visible message">${messages[randomIndex]}</section>`;
//     }
// }

/**### User can delete a message
- Add the ability to delete a message 
(ie: when a message shows up, show a button that says “I don’t like this message” (or something similar), 
and remove it from the list so that it will not show up any more.
Make sure to alert the user in some way that the message has been removed. */
function deleteMessage() {
    // when delete message is clicked 
    // the message is deleted from the Dom array
    // a new message appears that says the message has been deleted

}