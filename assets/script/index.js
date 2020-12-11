    let rules = document.querySelector('.rules');
    let openRules = document.querySelector('.rule--button');
    let playButton = document.querySelector('.button');
    let hideGamePick = document.querySelector('.game--pick');
    let closeRules = document.querySelector('.img-close');
    let gameDecide = document.querySelector('.game--decide');
    let paper = document.querySelector('.paper--img')
    let scissors = document.querySelector('.scissors--img')
    let rock = document.querySelector('.rock--img')
    let imgUser = document.querySelector('#pickA')
    let imgHouse = document.querySelector('#pickB')
    let gameItem = [paper,scissors,rock];

//   iterating over game Item to determine choice
    gameItem.forEach( function(item){
       item.addEventListener('click',function(){
        //    removing and adding classes
          hideGamePick.classList.add('hidden');
          gameDecide.classList.remove('hidden')

        //   selecting user choice from array gameData
          for(let i=0;i<gameData.length; i++){
            if(this.id == gameData[i].name){
                imgUser.setAttribute('src',gameData[i].img)
                imgUser.setAttribute('class',gameData[i].class)
            }
        }

        //   House Choice using Random Number
         let rand = randx()
          imgHouse.setAttribute('src',gameData[`${rand}`].img)
          imgHouse.setAttribute('class',gameData[`${rand}`].class)
      })
    
   })

//Handling Close of Rules Section
    closeRules.addEventListener('click', () => {
      rules.classList.add('close');
    })

// Handling Open for Rules Section 
    openRules.addEventListener('click', () => {
      rules.classList.remove('close');
    })

//Play Button to Toggle Rules
    playButton.addEventListener('click', function () {
      hideGamePick.classList.remove('hidden')
      gameDecide.classList.add('hidden')
    })

//Game Data to store Data of Items and enable easy Automation
    let gameData = [
        {
            name : "scissor",
            img : "assets/images/icon-scissors.svg",
            class:"scissors--img"
           },
           {
            name : "paper",
            img : "assets/images/icon-paper.svg",
            class : "paper--img"
           },
           {
            name : "rock",
            img : "assets/images/icon-rock.svg",
            class:"rock--img"
           }
    ]

//Function to Pick Random Number 
    let randx = function pickHouse(){
        return Math.floor(Math.random()*gameData.length)
                }