o// Select color input
// Select size input
const table=document.getElementById('pixelCanvas');
const color=document.getElementById('colorPicker');
const form=document.getElementById('sizePicker');
const inputHeight=document.getElementById('inputHeight');
const inputWidth=document.getElementById('inputWidth');


// When size is submitted by the user, call makeGrid()
form.addEventListener('submit',function(e){
    table.innerHTML='';
    e.preventDefault();
    makeGrid();
});
table.addEventListener('click',function(evt){
    if(evt.target.nodeName === "TD"){
        evt.target.style.backgroundColor=color.value;
    }
})

function makeGrid(){
    // Your code goes here!
    var valueH=inputHeight.value;
    var valueW=inputWidth.value;
    for(let i=1;i<=valueH;i++){  
        var x=document.createElement('tr');
        table.appendChild(x);
        for(let j=1;j<=valueW;j++){
            var y=document.createElement('td');
            y.innerText=`  `;
            x.appendChild(y);
        }
    }
}
// function addE(){
    //     var td=document.getElementsByTagName('td');
    //     for(var i=0;i<td.length;i++){
        //         td[i].addEventListener('click',function(e){
            //             var curr=e.target;
            //             curr.style.backgroundColor=color.value;
            //         })
            //     }
            // }
            
 // function makeGrid(){
            //     for(let i=1;i<inputHeight.value;i++){
            //         const rw=table.insertRow(0);
            //         for(let j=0;j<inputWidth.value;j++){
            //             rw.insertCell(0);
            //         }
            //     }
            // }
