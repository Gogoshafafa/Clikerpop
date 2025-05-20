function set_default_gamestate() {
    game_state = {
        score: 0,
        main_level: 1,
        main_level_price: 10,
        main_auto: 0,
        main_level_auto: 25,
        skin:'old',
        skin_prise: 10,
    }
}

function Savee() {
    const jsonString = JSON.stringify(game_state);

    localStorage.setItem("game_state", jsonString)
    console.log(game_state);
    // alert(jsonString); // Виводить JSON-рядок

}

function update_html_shop() {
    level_up.innerHTML = `1. Level Up (${game_state.main_level_price} CLICKS)( level up:${game_state.main_level})`
}
function update_html_shop1() {
    Auto.innerHTML = `2. Autoclicker(${game_state.main_level_auto} CLICKS)( level up:${game_state.main_auto})`
}
function load(name) {
    // const jsonString = prompt("Введіть ваш результат "); 
    const jsonString = localStorage.getItem("game_state")

    if (jsonString == null) {
        restart();
    }
    else {
        game_state = JSON.parse(jsonString)
    }

    if (name == "clicker") {
        const intervalID = setInterval(auto_mine, 100)

    } else if (name == "shop") {

    }
    console.log(game_state);
}



function restart() {
    set_default_gamestate()
    console.log(game_state);
}



function account() {
    const jsonString = JSON.stringify(game_state);



    alert(jsonString);
    console.log(jsonString);

}




function result() {
    const jsonString = prompt("Введіть ваш результат ");

    console.log(jsonString);
    game_state = JSON.parse(jsonString)

}

function butter_click() {

    game_state.score += game_state.main_level
    butt.innerText = game_state.score
    console.log(game_state);
    Savee()
}

function Level_up() {
    if (game_state.score >= game_state.main_level_price) {

        game_state.score -= game_state.main_level_price
        game_state.main_level_price = game_state.main_level_price * 2
        game_state.main_level++

        update_html_shop()

    } else {
        alert("Не вистачає КЛІКІВ!!!")
    }

    console.log(game_state);
    Savee()
}

function auto_mine() {
    game_state.score += game_state.main_auto
    butt.innerText = game_state.score
}

function auto() {
    if (game_state.score >= game_state.main_level_auto) {
        game_state.score -= game_state.main_level_auto
        game_state.main_level_auto = game_state.main_level_auto * 2
        game_state.main_auto += 2


        update_html_shop1()
    }
    else {
        alert("Не вистачає КЛІКІВ!!!")
    }

    console.log(game_state);
    Savee()
}

function skin() {
    console.log(game_state);
    if (game_state.score >= game_state.skin_prise) {
        game_state.score -= game_state.skin_prise
        game_state.skin = 'new'

    }
    else {
        alert("Не вистачає КЛІКІВ!!!")
    }
Savee()
}