load("shop")

console.log(game_state);
let level_up = document.getElementById("level_up")
level_up.onclick = Level_up
update_html_shop()
let Auto = document.getElementById("Auto")
Auto.onclick = auto
update_html_shop1()

let Skin = document.getElementById("skin")
Skin.onclick = skin

if (game_state.skin == 'old') {
    document.head.innerHTML += "<link rel='stylesheet' href='style-old.css'>"
}
else if (game_state.skin == 'new') {
    document.head.innerHTML += "<link rel='stylesheet' href='style.css'>"
}