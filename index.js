
/* text animation */
function appear() {
  let text = document.querySelector('.text');
  let startDistance = text.getBoundingClientRect().top;
  console.log(text.getBoundingClientRect())
  let cDistance = window.innerHeight / 1.1;
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
  {'author': 'James M. Barrie', 
   'quote': 'Life is a long lesson in humility.'
  },
  {'author': ' The Emperor’s Blades', 
   'quote': '"There’s no blade as keen as surprise.”'
  },
  {'author': 'The Lies of Locke Lamora', 
   'quote': '“There’s no freedom quite like the freedom of being constantly underestimated.”'
  },
  {'author': 'The Eye of the World ', 
   'quote': '“Death is lighter than a feather. Duty, heavier than a mountain.”'
  },
  {'author': 'Nelson Mandela', 
   'quote': '“An ordinary archer practices until he gets it right. A ranger practices until he never gets it wrong."'
  },
  {'author': 'Elbert Hubbard', 
   'quote': 'Do not take life too seriously. You will not get out alive.'
  },

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
  if (x === 5 && k === str1.length) { 
  setTimeout(function(){
      x = 0; k = 0;
      text5.innerHTML = ''
      qouter()
},1300) }
  else if (x < 5 && k === str1.length  ) { 
      setTimeout(function(){
          x++; k = 0; 
          text5.innerHTML = ''
          qouter()
  },1300);}
}, 40)

}
qouter()

