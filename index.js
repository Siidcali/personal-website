
/* text animation */
function appear() {
  let text = document.querySelector('.text');
  let startDistance = text.getBoundingClientRect().top;
  console.log(text.getBoundingClientRect())
  let cDistance = window.innerHeight / 1.3;
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

