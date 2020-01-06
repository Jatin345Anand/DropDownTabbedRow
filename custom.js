window.addEventListener('load',init);
var TabRow,TabUI,li;
function init(){
    document.getElementById('t').addEventListener('click',TOP);
    document.getElementById('b').addEventListener('click',BOTTOM);
    document.getElementById('l').addEventListener('click',LEFT);
    document.getElementById('r').addEventListener('click',RIGHT);
    TabRow = document.getElementById('tabRow');
    TabUI = document.getElementById('uiR');
    li = document.getElementsByTagName('li');
}
function TOP(){
    console.log('top!')
    TabRow.className = 'tab_row_TOP';
    TabUI.className = 'ulTop';
    // li.className = 'liTB';
    for(var i=0;i<10;i++){
        console.log(li[i].className);
        li[i].className = 'liTB';
    }
}
function BOTTOM(){
    console.log('bottom!')
    TabRow.className = 'tab_row_BOTTOM';
    TabUI.className = 'ulBottom';
    // li.className = 'liTB';
    for(var i=0;i<10;i++){
        console.log(li[i].className);
        li[i].className = 'liTB';
    }
}
function LEFT(){
    console.log('left!')
    TabRow.className = 'tab_row_LEFT';
    TabUI.className = 'ulLeft';
    li.className = 'liLR'; 
}
function RIGHT(){
    console.log('right!')
    TabRow.className = 'tab_row_RIGHT';
    TabUI.className = 'ulRight';
    li.className = 'liLR';
}