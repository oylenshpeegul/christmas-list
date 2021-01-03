
const H1 = document.querySelector("h1")
const Text = document.querySelector("#text")
const Buttons = document.querySelector("#buttons")

let names = ["Cindy", "Diana", "Donna", "Michelle", "Sharon", "Stephen", "Tim"];
let previousPicks = [6, 0, 5, 4, 1, 3, 2];
let year = 2021;
let newPicks = [];

function start() {
    
    H1.textContent = "Christmas " + year;
    showPicks(previousPicks);

    Buttons.innerHTML = `
        <input id="picks" type="button" value="Pick new names" onclick="getPicks()" />
      `
}

function showPicks(picks) {
    Text.innerHTML = "";
    for(let i = 0; i < picks.length; i++) {
        Text.innerHTML += "<p>" + names[i] + " has " + names[picks[i]] + "</p>";
    }
}

function getPicks() {
    newPicks = previousPicks.slice();
    
    let valid = false;
    while (! valid) {
        valid = true;
        shuffle();
        for(let i = 0; i < newPicks.length; i++) {
            if (newPicks[i] == i || newPicks[i] == previousPicks[i]) {
                valid = false;
            }
        }
    }

    console.log(newPicks);
    
    H1.textContent = "Christmas " + (year + 1);
    showPicks(newPicks);
    Buttons.innerHTML = `
        <input id="restart" type="button" value="Start over" onclick="start()" />
      `

}

function shuffle() {
    for(let i = 0; i < previousPicks.length; i++) {
        let j = i + Math.floor(Math.random() * (newPicks.length - i));

        // swap elements at i and j
        let tmp = newPicks[i];
        newPicks[i] = newPicks[j];
        newPicks[j] = tmp;
    }
}
