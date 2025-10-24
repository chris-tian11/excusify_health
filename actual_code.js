const excuses = ["I slept past my alarm.", "My dog ate my homework.", "I was playing MMC sumo.", 
    "My phone died.", "My parents won't let me.", "I am too tired.","My toe hurts.", "I was sleepy.", 
    "I left my second bag at camp.","My hand slipped.", "I spent all my money on Excusify Pro.", "I broke the diving board at Knollwood (ifykyk).", "My sim card fell in the pool.", "It has meat in it.", "I'm grounded.", "I was playing Clash.", "I got suspended for fighting over Brawl Stars.", "He threw the first punch.", "ChatGPT wrote the correct answers on my test on its own."
    ]
let i = 0
let h2_element = document.getElementById("h2")
var coins = 0
var coin_counter = document.getElementById("coin_counter")
var code_box = document.getElementById("code_box")
var new_coin_header = document.getElementById("clicker_label")
var code_entered = false
var container = document.getElementById("lit_everything")
var horizontal_row = document.getElementById("line_2")
var button = document.getElementById("button")
var bg_credit = document.getElementById("bg_credit")





function generate() {
    i = random(excuses.length)
    h2_element.innerHTML = excuses[i]
    if (code_entered === true) {
        coins ++
        if (coins === 67) {
            document.body.style.backgroundImage = "url('67.webp')"
            document.body.style.color = "white"
            horizontal_row.style.borderColor = "white"
            
            
        }
        else if (coins === 3000000000000000) {
            document.body.style.backgroundImage = "url('peter_lee.jpg')"
        }
        else if (coins === 20) {
            document.body.style.backgroundColor = "#3B9797"
            button.style.backgroundColor = "#16476A"
        }
        else if (coins === 68) {
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "#FFC400"
            document.body.style.color = "black"
            horizontal_row.style.borderColor = "black"
            button.style.backgroundColor = "#FFBBE1"
            
        }
        else if (coins === 100) {
            excuses.push("I was fully prepared to show up, but then my cat sat on my phone, and booked a flight to Japan.")
            alert("You have unlocked a new excuse!")
            alert("New Excuse: I was fully prepared to show up, but then my cat sat on my phone, and booked a flight to Japan.")
        }

        else if (coins === 120) {
            document.body.style.backgroundColor = "#B4DEBD"
            button.style.backgroundColor = "#80A1BA"
            
        }
        else if (coins === 145) {
            document.body.style.backgroundImage = "url('ren.jpg')"
            document.body.style.color = "white"
        }

        else if (coins === 180) {
            document.body.style.backgroundImage = "url('optical_illusion.jpg')"
            document.body.style.color = "black"
        }

        else if (coins === 190) {
            document.body.style.backgroundColor = "#C2A68C"
            document.body.style.backgroundImage = "none"
            button.style.backgroundColor = "#5D866C"
            document.body.style.color = "black"

        }

        else if (coins === 220) {
            document.body.style.backgroundColor = "none"
            document.body.style.backgroundSize = '200px 150px'
            document.body.style.color = "white"
            document.body.style.backgroundImage = "url('sho.jpg')"
        }

        else if (coins === 250) {
            document.body.style.backgroundImage = "none"
            button.style.backgroundColor = "#00ff4cff"
            document.body.style.backgroundColor = "#00ff4cff"
            document.body.style.color = "#00ff4cff"
            document.body.style.backgroundColor = "black"
        }

        else if(coins === 280) {
            document.body.style.backgroundImage = "url('excusify.png')"
            document.body.style.color = "black"
            document.body.style.backgroundSize = '250px 170px'
        }
        else if(coins === 325) {
            document.body.style.backgroundImage = "url('jeff.jpg')"
            document.body.style.color = "white"
            document.body.style.backgroundSize = '250px 170px'
        }

        else if (coins === 365) {
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "black"
            button.style.backgroundColor = "white"
        }

        else if(coins === 400) {
            document.body.style.backgroundColor = "#C7D9DD"
            button.style.backgroundColor = "#D5E5D5"
            document.body.style.color = "black"
        }
        new_coin_header.textContent = "Clicks: " + coins
    }
    
    
}


function random(max) {
    return Math.floor(Math.random() * max)
}



function enter_clicked() {
    if (code_box.value === "6741") {
        new_coin_header.textContent = "Clicks: 0"
        bg_credit.textContent = "Background Ideas: Shouei Yoo, Owen lee, Arjun Gupta, Ethan Xia, Yugo Sakai, Christian Leung"
        code_entered = true
        document.body.style.backgroundColor = "#FBF3D1"
    }
}

function redirect() {
    window.location.href = 'http://127.0.0.1:5500/excusify/background.html'

}
