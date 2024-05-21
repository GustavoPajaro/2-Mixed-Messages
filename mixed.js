const phrases = {
    knock: ['knock, knock,'],
    who: ['who\'s there,'],
    jokes: [
        'Water. Water who? Water you doing today?',
        'Waddle. Waddle who? Waddle it take to get you to open the door?',
        'Radio. Radio who? Radio not, here I come!',
        'Thermos. Thermos who? Thermos be a better punchline than this!',
        'Ice cream. Ice cream who? ICE CREAM SO YOU CAN HEAR ME!',
        'Weirdo. Weirdo who? Weirdo you think you\'re going?',
        'Canoe. Canoe who? Canoe come out now?'
    ]
};

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
};

function createRandomJoke() {
    const knock = getRandomElement(phrases.knock);
    const who = getRandomElement(phrases.who);
    const jokes = getRandomElement(phrases.jokes);

    return `${knock} ${who} ${jokes}`
};

console.log(createRandomJoke());