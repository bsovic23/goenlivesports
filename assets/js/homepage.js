var formBtnEl = document.querySelector('#stayConnectedBtn');
var twitterUlEl = document.querySelector('#homepageTwitterList');

tweetArray = [
    tweet1 = {
        sport:"nfl",
        info: "bears lose 19-14"
    },
    tweet2 = {
        sport:"nba",
        info: "WOW what a dunk by Lebron"
    },
    tweet3 = {
        sport:"mlb",
        info: "the guardians have traded oscar mercado to the twins"
    },
    ];

formBtnEl.addEventListener('click',  function createTweet(){
    for (i=0; i<tweetArray.length; i++) {
        divEl = document.createElement('div');
        h1El = document.createElement('h1');
        pEl = document.createElement('p');
        
        tweetArrayTitle = tweetArray[i].sport;
        tweetArrayInfo = tweetArray[i].info;

        h1El.textContent = tweetArrayTitle;
        pEl.textContent = tweetArrayInfo;

        divEl.appendChild(h1El);
        divEl.appendChild(pEl);
        twitterUlEl.appendChild(divEl);

        h1El.setAttribute("style", "background-color: blue; padding: 10px")
        pEl.setAttribute("style", "background-color: orange; padding: 10px")
        divEl.setAttribute("style", "background-color: teal; margin-top: 10px; padding: 10px")
    }
});

console.log(tweetArray.length);
