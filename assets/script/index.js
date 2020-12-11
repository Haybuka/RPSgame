    let rules = document.querySelector('.rules');
    let openRules = document.querySelector('.rule--button');
    let playButton = document.querySelector('.button');
    let hideGamePick = document.querySelector('.game--pick');
    let closeRules = document.querySelector('.img-close');
    let gameDecide = document.querySelector('.game--decide');
    let paper = document.querySelector('.paper--img')
    let scissors = document.querySelector('.scissors--img')
    let rock = document.querySelector('.rock--img')
    let gameItem = [paper,scissors,rock];
   gameItem.forEach( function(item){
       item.addEventListener('click',function(){
          hideGamePick.classList.add('hidden');
          gameDecide.classList.remove('hidden')
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