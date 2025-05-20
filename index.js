load("clicker")

let butt = document.getElementById("butt")

butt.onclick = butter_click

let Save = document.getElementById("Save")

Save.onclick = Savee

let Load = document.getElementById("Load")

Load.onclick = load

let Restart = document.getElementById("Restart")
Restart.onclick = restart

let Account = document.getElementById("Account")

Account.onclick = account

let Result = document.getElementById("Result")
Result.onclick = result

let shopp = document.getElementById("shopp")
shopp.onclick = Savee

console.log(game_state);

if (game_state.skin == 'old') {
    document.head.innerHTML += "<link rel='stylesheet' href='style-old.css'>"
}
else if (game_state.skin == 'new') {
    document.head.innerHTML += "<link rel='stylesheet' href='style.css'>"
}