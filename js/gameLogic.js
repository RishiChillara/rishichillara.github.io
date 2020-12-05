

const flowChart = {"start" : {"prompt": "You wake up in your cell. It is early in the morning, and you walk towards the cell door to discover it is unlocked.", "choices": ["run", "leave it alone", "let your cell mate know"]}, // if you dont include the gif key, nothing will show up
                                      
                   "let your cell mate know": {"prompt": "Your cell mate appreciates letting him know, and he suggests waiting until the coast is clear.", "choices": ["hide in supply closet", "jump guard", "head down main corridor"]},
                   
                   "leave it alone": {"prompt": "You wait until there are no guards nearby and leave your cell. What do you do?", "choices": ["hide in supply closet", "jump guard", "head down main corridor"]},
                   
                   "hide in supply closet": {"prompt": "You escape to the supply closet and find some items. But you can only carry one. Which do you choose?", "choices": ["take weapon", "take walkie-talkie"], "gif": "images/walkingOutDoor"},
                   
                   "jump guard": {"prompt": "You catch the guard by surprise and are able to fight him off.", "choices": ["take weapon", "go to warden's office"], "gif": "images/deathSkull"},
                   
                   "go to warden's office": {"prompt": "You walk in to the warden's office to find it empty. What do you do?", "choices": ["steal uniform", "steal keys"], "gif": "images/walkingOutDoor"},
                   
                   "head down main corridor": {"prompt": "You sneakily walk down the main corridor and find a fork in the hallway.", "choices": ["go to warden's office", "go to mess hall", "go to security office"], "gif": "images/walkingOutDoor"},
                   
                   "go to mess hall": {"prompt": "You arrive in the empty mess hall.", "choices": ["steal food", "steal utensil", "hide in closet"], "gif": "images/walkingOutDoor"},
                   
                   "take weapon": {"prompt": "Weapon in hand, you see a guard down the hall.", "choices": ["attack guard", "find different hallway"]},
                   
                   "take walkie-talkie": {"prompt": "You go back to your cell to give your cell mate the other walkie talkie. You both head to the wardens office", "choices": ["steal uniform", "steal keys"]},

                   "attack guard": {"prompt": "You successfully fight off the guard and head see that the warden's office is straight ahead. Boldy you step in. It is empty. What do you do?", "choices": ["steal uniform", "steal keys"], "gif": "images/deathSkull"},
                   
                   "steal keys": {"prompt": "You steal the keys and unlock the door to the security office. It is empty.", "choices": ["disable cams", "open all cells", "call cell mate on walkie-talkie"], "gif":"images/key.gif"}
                                                         
                };


setTimeout(fade, 1500, document.getElementById("startingText"));
setTimeout(setVisible, 3000);
setTimeout(updateCard, 3000, flowChart.start)
// Game Logic Starts here;

function setVisible() {
  document.getElementById("mainPanel").classList.remove("uk-hidden");
}

function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
  
}

function updateCard(promptChoiceMap) {
    document.getElementById("prompt").innerHTML = promptChoiceMap.prompt;
    document.getElementById("choice1").innerHTML = promptChoiceMap.choices[0];

    document.getElementById("choice2").innerHTML = promptChoiceMap.choices[1];

    if (promptChoiceMap.choices.length == 3) {
      document.getElementById("choice3").classList.remove("uk-hidden");
      document.getElementById("choice3").innerHTML = promptChoiceMap.choices[2];
    } else {
      document.getElementById("choice3").classList.add("uk-hidden");
    }

    if ("gif" in promptChoiceMap) {
      document.getElementById("gifHolder").classList.remove("uk-hidden");
      document.getElementById("gifHolder").setAttribute("data-src", promptChoiceMap.gif);
    } else {
      document.getElementById("gifHolder").classList.add("uk-hidden");
    }

}

function displayWin() {
  document.getElementById("mainPanel").classList.add("uk-hidden");
  document.getElementById("endingText").classList.remove("uk-hidden");
}


function displayDeath(deathText) {
  document.getElementById("mainPanel").classList.add("uk-hidden");
  document.getElementById("death").classList.remove("uk-hidden");
  document.getElementById("deathtext").innerHTML = deathText;
}


function gameLogic(choice) {
  console.log(choice);
  //MAKE SURE PHRASES ARE LOWERCASE
  const victoryPhrases = ["run towards the light", "hide in closet", "steal uniform", "open all cells"]
  
  
  const deathPhrases = {"run": "You make a break for it down the hallway just to get tackled from behind by a guard. Refresh to restart.", 
  "steal food": "You open the fridge and begin to eat the food but you are too noisy and the chef comes and catches you. Refresh to restart.",
  "steal utensil": "You open the utensil drawer to find something to use as a tool, but are too noisy and the chef comes in and catches you. Refresh to restart.", 
  "find different hallway": "You turn the corner to walk straight into a pair of guards. Refresh to restart.",
  "disable cams": "You disable the security cameras and immediately the alarm goes off. Guards rush into the office and you are caught red-handed. Refresh to restart."};
    
  var txt = document.getElementById(choice).innerText.toLowerCase();
  if (victoryPhrases.includes(txt)) {
    displayWin();
  } else if (txt in deathPhrases) {
    displayDeath(deathPhrases[txt]);
  } else {
    updateCard(flowChart[txt]);
  }
}

document.getElementById("choice1").addEventListener("click", function(e) {
  gameLogic("choice1");
});
document.getElementById("choice2").addEventListener("click", function(e) {
  gameLogic("choice2");
});
document.getElementById("choice3").addEventListener("click", function(e) {
  gameLogic("choice3");
});

