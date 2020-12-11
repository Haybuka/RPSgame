    let rules = document.querySelector('.rules');
    let openRules = document.querySelector('.rule--button');
    let playButton = document.querySelector('.button');
    let hideGamePick = document.querySelector('.game--pick');
    let closeRules = document.querySelector('.img-close');
    let gameDecide = document.querySelector('.game--decide');
    let paper = document.querySelector('.paper--img')
    let scissors = document.querySelector('.scissors--img')
    let rock = document.querySelector('.rock--img')
    let img = document.querySelector('.game--compare img')
    let gameItem = [paper,scissors,rock];

   gameItem.forEach( function(item){
       item.addEventListener('click',function(){
          hideGamePick.classList.add('hidden');
          gameDecide.classList.remove('hidden')
          console.log(this.id)
          for(let i=0;i<gameData.length; i++){
              if(this.id == gameData[i].name){
                  img.setAttribute('src',gameData[i].img)
                  img.setAttribute('class',gameData[i].class)
                img.getAttribute('class')
              }
          }
      })
    
   })
    // hideGamePick.addEventListener('click', function () {
    //   this.classList.add('hidden');
    //   gameDecide.classList.remove('hidden')
    // })
    closeRules.addEventListener('click', () => {
      rules.classList.add('close');
    })
    openRules.addEventListener('click', () => {
      rules.classList.remove('close');
    })
    playButton.addEventListener('click', function () {
      hideGamePick.classList.remove('hidden')
      gameDecide.classList.add('hidden')
    })
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
       
    