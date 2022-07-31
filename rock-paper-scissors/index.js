option=['rock','paper','scissor']
// left
function Rock(){
    var el=document.getElementById("left");
    el.innerHTML="<img src=\"rockstill.gif\">"
}
function Paper(){
    var el=document.getElementById("left");
    el.innerHTML="<img src=\"paperstill.gif\">"

}
function Scissor(){
    var el=document.getElementById("left");
    el.innerHTML="<img src=\"scissorstill.gif\">"
}
// left

// right
function RRock(){
    var el=document.getElementById("right");
    el.innerHTML="<img src=\"rockstill.gif\">"
}
function RPaper(){
    var el=document.getElementById("right");
    el.innerHTML="<img src=\"paperstill.gif\">"

}
function RScissor(){
    var el=document.getElementById("right");
    el.innerHTML="<img src=\"scissorstill.gif\">"
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
            break;
        case 1:
            RPaper();
            break;
        case 2:
            RScissor();
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
            break;
        case 1:
            RPaper();
            break;
        case 2:
            RScissor();
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
            break;
        case 1:
            RPaper();
            break;
        case 2:
            RScissor();
            break;
        default:
            break
    }
})
