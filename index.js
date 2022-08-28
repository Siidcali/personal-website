
/* text animation */
function appear() {
  let text = document.querySelector('.text');
  let startDistance = text.getBoundingClientRect().top;
  console.log(text.getBoundingClientRect())
  let cDistance = window.innerHeight / 1.5;
  if (startDistance < cDistance) {
    text.classList.add('notext');
  } else {
    text.classList.remove('notext')
  }
}
window.addEventListener('scroll', appear)

/*Type effect*/ 
var i = 0;
var j = 0;
var arr = [' -Developer',' -Player?',' -Reader'];
text3 = document.getElementById('text-3')
text3.innerHTML = ''

function typer() {
  const str = arr[j].split('')

  setTimeout(function () {
    i++;
    text3.append(str[i - 1]);          
    if (i <str.length  ) {
      typer();
    } 
    if (j === 2 && i === str.length) { 
    setTimeout(function(){
        j = 0; i = 0;
        text3.innerHTML = ''
        typer()
},800) }
    else if (j < 2 && i === str.length  ) { 
        setTimeout(function(){
            j++; i = 0; 
            text3.innerHTML = ''
            typer()
    },800);}
  }, 220)


}
typer()




const arrayOfQuotes = [
 
  {'author': ' The Emperor’s Blades', 
   'quote': '"There’s no blade as keen as surprise.”'
  },
  {'author': 'The Lies of Locke Lamora', 
   'quote': '“There’s no freedom quite like the freedom of being constantly underestimated.”'
  },
  {'author': 'The Eye of the World ', 
   'quote': '“Death is lighter than a feather. Duty, heavier than a mountain.”'
  },
  {'author': 'Ranger’s Apprentice', 
   'quote': '“An ordinary archer practices until he gets it right. A ranger practices until he never gets it wrong."'
  },
  {
    'author': 'Antoine de Saint-Exupér',
    'quote':'“Perfection is reached not when there is nothing more to add, but when there is nothing more to subtract.”'
  }
];

var k = 0;
var x = 0;
text5 = document.getElementById('quoteOutput')
text5.innerHTML = ''

function qouter() {
const str1 = arrayOfQuotes[x].quote.split('')
setTimeout(function () {
  document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[x].author}`;
  k++;
  text5.append(str1[k - 1]);          
  if (k <str1.length  ) {
    qouter();
  } 
  if (x === 3 && k === str1.length) { 
  setTimeout(function(){
      x = 0; k = 0;
      text5.innerHTML = ''
      qouter()
},1300) }
  else if (x < 3 && k === str1.length  ) { 
      setTimeout(function(){
          x++; k = 0; 
          text5.innerHTML = ''
          qouter()
  },1300);}
}, 40)

}
qouter()


win=0
lose=0
draw=0
// left
function Rock(){
    var el=document.getElementById("left");
    el.innerHTML="<img class=\"lefts\" src=\"rockstill.gif\">"
}
function Paper(){
    var el=document.getElementById("left");
    el.innerHTML="<img class=\"lefts\" src=\"paperstill.gif\">"

}
function Scissor(){
    var el=document.getElementById("left");
    el.innerHTML="<img class=\"lefts\" src=\"scissorstill.gif\">"
}
// left

// right
function RRock(){
    var el=document.getElementById("right");
    el.innerHTML="<img class=\"rights\" src=\"rockstill.gif\">"
}
function RPaper(){
    var el=document.getElementById("right");
    el.innerHTML="<img class=\"rights\" src=\"paperstill.gif\">"

}
function RScissor(){
    var el=document.getElementById("right");
    el.innerHTML="<img class=\"rights\" src=\"scissorstill.gif\">"
}
// right

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click',function(){
    choice = Math.floor(Math.random() * 3);
    console.log(choice)
    Rock();
    switch (choice){
        case 0:
            RRock();
            draw++
            var D=document.querySelector(".draw");
            D.innerText=`Draw-${draw}`; 
            break;
        case 1:
            RPaper();
            lose++
            var L=document.querySelector(".lose");
            L.innerText=`Lose-${lose}`; 
            break;
        case 2:
            RScissor();
            win++
            var w=document.querySelector(".win");
            w.innerText=`Win-${win}`; 
            break;
        default:
            break
    }
})

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click',function(){
    choice = Math.floor(Math.random() * 3);
    console.log(choice)
    Paper();
    switch (choice){
        case 0:
            RRock();
            win++
            var w=document.querySelector(".win");
            w.innerText=`Win-${win}`; 
            break;
        case 1:
            RPaper();
            draw++
            var D=document.querySelector(".draw");
            D.innerText=`Draw-${draw}`; 
            break;
        case 2:
            RScissor();
            lose++
            var L=document.querySelector(".lose");
            L.innerText=`Lose-${lose}`; 
            break;
        default:
            break
    }
})

const scissorBtn = document.querySelector('.scissor');
scissorBtn.addEventListener('click',function(){
    choice = Math.floor(Math.random() * 3);
    console.log(choice)
    Scissor();
    switch (choice){
        case 0:
            RRock();
            lose++
            var L=document.querySelector(".lose");
            L.innerText=`Lose-${lose}`; 
            break;
        case 1:
            RPaper();
            win++  
            var w=document.querySelector(".win");
            w.innerText=`Win-${win}`; 
            break;
        case 2:
            RScissor();
            draw++
            var D=document.querySelector(".draw");
            D.innerText=`Draw-${draw}`; 
            break;
        default:
            break
    }
})


