let boxes =  document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let trunO=true;

 resetBtn.addEventListener("click",()=>{
    console.log("reset");
    enableButton();

 });
const winpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerText="abcd"
        if(trunO){
            box.innerText="O";
            trunO=false;
        }else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
       checkWinner();
    });
});

const checkWinner= ()=>{
    for(let pattern of winpatter){
       // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2Val!="" && pos3Val!="" ){
            console.log(pos1val);
            console.log(pos2Val);
            console.log(pos3Val);
            if(pos1val===pos2Val && pos2Val===pos3Val){
                setTimeout(()=>{
                    setTimeout(()=>{
                        alert("winner is "+ pos1val);
                        disableButton();
                    },10);
                },10)
                
            }
        }
    }
};


// const showWinner= (winner)=>{
//     alert("winner "+ pos1val);
//     disableButton();
// }
function disableButton(){
    for(let box of boxes){
        box.disabled=true;
    };
};

function enableButton(){
    
    for(let box of boxes){
         trunO=true;
        box.disabled=false;
        box.innerText="";
    };
}


 
