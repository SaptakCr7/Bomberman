const bombs=[];
let gamepoints=0;

let canplay=true;

function updategamepoints(){
     const gamepointsElement=document.getElementById("gamepoints");
     gamepointsElement.style.textAlign='center';
     gamepointsElement.innerHTML="GAME POINTS :"+gamepoints;
     gamepointsElement.style.fontFamily='cursive';
     gamepointsElement.style.border='3px solid blue';
     gamepointsElement.style.backgroundColor='pink';
     gamepointsElement.style.width='400px';
     gamepointsElement.style.justifyContent='center';

     
}
function reloadpage(){
    window.location.reload();
}
function relaodme(){
    const reElement=document.getElementById("reloadme");
    reElementfontFamily='cursive';
    reElement.innerHTML=
    reElement
    reElement
}
function mainbody(){
    const mainbodyElement=documnet.getElementById("mainbody");
    mainbodyElement.style.backgroundColor='pink';

}
function title(){
    const titleElement=document.getElementById("title");
    titleElement.style.fontFamily='cursive';
    titleElement.style.width='400px';
    titleElement.style.justifyContent='center';
    titleElement.innerHTML="BOMBER MAN GAME ";
    titleElement.style.textAlign='center';
    titleElement.style.border='3px solid blue';
    titleElement.style.backgroundColor='pink';
}
function addGrid(){
    const appElement=document.getElementById('app');
    for(let i=0; i<9;i++){
        const row=document.createElement('div');
        row.style.textAlign="center";
        row.style.backgroundColor='solid white';
        for(let j=0;j<9;j++){
            const index=i* 9+ j;


            const column=document.createElement('div');
            column.style.display='inline-block';
            column.style.width='40px';
            column.style.height='40px';
            column.style.border='3px solid white';
            column.style.textAlign="center";
            column.style.verticalAlign='middle';
            column.setAttribute("index", index);

            column.addEventListener("click",function(){
                if (canplay){
                if(bombs.includes(index) ){
                    
                    column.style.backgroundColor="red";
                    canplay=false;
                }
                else{
                    column.style.background="green";
                    gamepoints++;
                    updategamepoints();
                    }
                }
            })

            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
}


function generatebombs(){
    while(bombs.length!==10){
    const randomnum=Math.floor(Math.random()*100);
    if(randomnum<81&&!bombs.includes(randomnum)){
        bombs.push(randomnum);
    }

   }
}
addGrid();
generatebombs();
console.log(bombs);
title();
mainbody();
relaodme();