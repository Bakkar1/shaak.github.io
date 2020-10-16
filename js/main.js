
var myDataImg;

var tdList = document.querySelectorAll('i');

tdList.forEach(elm => {
    if(elm.getAttribute('class') == null)
    {
        elm.classList.add('full');
    }
    elm.ondblclick = function(){
            myDataImg = this.classList;
            myelm = elm;
            this.parentNode.classList.add('getFocus');
            this.classList.add('childGetFocus');
    }
})

window.addEventListener('click', function(e){
    if(myDataImg != null && e.target.getAttribute('class') != 'game-over' 
    && myelm.getAttribute('data-team') != e.target.getAttribute('data-team')){       
        if(e.target.classList.contains('fa-chess-king')){
            var i = 0;
                var nieuwIntervale = setInterval(function(){
                    e.target.parentNode.classList.add('red');
                    i++;
                    if(i > 3){
                        clearInterval(nieuwIntervale);
                        e.target.parentNode.classList.remove('red');
                    }
                }, 100);
            e.target.setAttribute('class' , myDataImg);
            var GameOver = document.createElement('div');
            GameOver.classList.add('game-over');
            var gameoverp = document.createElement('p');
            gameoverp.classList.add('game-overp');
            if(e.target.classList.contains('wit')){
                var txt = document.createTextNode('Game Over zwart win');
            }
            else{
                var txt = document.createTextNode('Game Over wit win');
            }
            gameoverp.appendChild(txt);
            GameOver.appendChild(gameoverp);
            document.body.appendChild(GameOver);
        }
        else{
            if(e.target.getAttribute('class') != '' && e.target.getAttribute('class') != 'full'){
                var i = 0;
                var nieuwIntervale = setInterval(function(){
                    e.target.parentNode.classList.add('red');
                    i++;
                    if(i > 3){
                        clearInterval(nieuwIntervale);
                        e.target.parentNode.classList.remove('red');
                    }
                }, 100);
            }
            e.target.setAttribute('class' , myDataImg);
            e.target.setAttribute('data-team', myelm.getAttribute('data-team'));
            myDataImg = null;
            myelm.setAttribute('class', 'full');
            myelm.parentNode.classList.remove('getFocus');
            e.target.classList.remove('childGetFocus', 'ful');
        }
    }
})