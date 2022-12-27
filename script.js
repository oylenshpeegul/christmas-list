
const H1 = document.querySelector("h1")
const Text = document.querySelector("#text")
const Buttons = document.querySelector("#buttons")

//            0        1        2        3           4         5          6
let names = ["Cindy", "Diana", "Donna", "Michelle", "Sharon", "Stephen", "Tim"];
// let previousPicks = [3, 6, 0, 1, 2, 4, 5];
// let year = 2022;
let previousPicks = [4, 0, 5, 2, 6, 3, 1];
let year = 2023;
let newPicks = [];

function start() {
    
    H1.textContent = "Christmas " + year;
    showPicks(previousPicks);

    Buttons.innerHTML = `
        <input id="picks" type="button" value="Pick new names" onclick="getPicks()" />
      `
}

function showPicks(picks) {
    console.log(picks);
    
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
