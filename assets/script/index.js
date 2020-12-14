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
    let announce = document.querySelector('.announce')
    let playAgain = document.querySelector('#play--again')
    let gameCount = document.querySelector('.count--score');
    let gameItem = [paper,scissors,rock];
    let counting = 0;
    
//   iterating over game Item to determine choice
    gameItem.forEach( function(item){
        var name;
        var houseName;
       item.addEventListener('click',function(){
        //    removing and adding classes
          // hideGamePick.setAttribute('class','animate__animated animate__rotateOut')
         hideGamePick.classList.add('hidden');
          gameDecide.classList.remove('hidden')

          //   selecting user choice from array gameData
          for(let i=0;i<gameData.length; i++){
            name = this.id;
            if(this.id == gameData[i].name){      
                imgUser.setAttribute('src',gameData[i].img)
                imgUser.setAttribute('class',gameData[i].class)
                 imgUser.parentElement.setAttribute('class',gameData[i].parentClass)

            }
        }

        //Resetting House Chosen Image to blank
        imageBlank()
        
        //   House Choice using Random Number
         
          setTimeout(() => {
            let rand = randx()
            houseName = gameData[`${rand}`].name
            imgHouse.setAttribute('src',gameData[`${rand}`].img)
            imgHouse.setAttribute('class',gameData[`${rand}`].class)
            imgHouse.parentElement.setAttribute('class',gameData[`${rand}`].parentClass)
            decideWinner(name,houseName)
          }, 1500);
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
    //   hideGamePick.classList.remove('hidden')
      hideGamePick.setAttribute('class','game--pick animate__animated animate__rotateIn')

      gameDecide.classList.add('hidden')
    })

//Game Data to store Data of Items and enable easy Automation
    let gameData = [
        {
            name : "scissor",
            img : "assets/images/icon-scissors.svg",
            class:"scissors--img",
            count:2,
            paper : 1,
            rock:3,
            scissor:2,
            parentClass:'scissors--picked'
           },
           {
            name : "paper",
            img : "assets/images/icon-paper.svg",
            class : "paper--img",
            count:2,
            rock:1,
            scissor:3,
            paper:2,
            parentClass:'paper--picked'
           },
           {
            name : "rock",
            img : "assets/images/icon-rock.svg",
            class:"rock--img",
            count:2,
            scissor:1,
            paper:3,
            rock:2,
            parentClass:'rock'
           }
    ]

//Function to Pick Random Number 
    let randx = function pickHouse(){
        return Math.floor(Math.random()*gameData.length)
    }
//Function to reset blank
    function imageBlank(){
        imgHouse.setAttribute('class','house--blank')
        imgHouse.setAttribute('src','assets/images/house.png')
        playAgain.setAttribute('class','button')
        announce.innerHTML = ' '
    }

    function decideWinner(name,houseName){
     for(let i=0; i<gameData.length; i++){
        let user = gameData[i].count;
        let comp =gameData[i][houseName];
         if(gameData[i].name == name){
            if(user > comp){
                announce.innerHTML = `you win`
                playAgain.classList.add ('win')
                counting++;
                    gameCount.innerHTML = counting;
            }else if(user < comp){
                announce.innerHTML = `you lose`
                playAgain.classList.add ('lose')
                counting--;
                gameCount.innerHTML = counting;
            }else if(user === comp){
                announce.innerHTML = `Draw`
                playAgain.setAttribute('class','button draw ')
            }
         }
     }
}