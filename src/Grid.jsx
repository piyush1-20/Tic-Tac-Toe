import { useState } from 'react';
import './Grid.css';
import Squares from './Btn';

function checkWinner(sqr){
    const p=[[0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let j=0;j<p.length;j++){
        const [x,y,z]=p[j];
        if( sqr[x] && sqr[x]===sqr[y] && sqr[y]===sqr[z] ){
            return sqr[x];
        }  
    }
    return null;
}
function Grid(){
   const [sqr,setSqr] = useState(Array(9).fill(null));
   const [turn,setTurn]=useState(1);
    function handleClick(i){
        if(sqr[i]!==null || checkWinner(sqr)){
            return;
        }
            const arr=sqr.slice();
            if(turn){
                arr[i]='X';
            }
            else{
                arr[i]='O';
            }
            setSqr(arr);
            setTurn(!turn);           
    }
  const winner=checkWinner(sqr);
  let status;
  if(winner){
    let k=winner;
    if(winner==='X'){
        k="Player 1";
    }
    else{
        k="Player 2";
    }
    status="Winner: "+ k;
  }
  else{
    if(winner===null){
        let r=true;
            for(let i=0;i<9;i++){
                if(sqr[i]===null){
                    r=false;
                    break;
                }
            }
        if(r){
            status="Draw";
        }
    }
    if(status!=="Draw"){
            let k;
            if(turn){
                k='X';
            }
            else{
                k='O';
            }
            status="Next Player: "+k;
    }
  }

 return(
    <>
        <div className="status"> {status}</div>
        
            <div className="grid ">
                <Squares k='zero' value={sqr[0]} onSqrClick={()=>handleClick(0)}/>
                <Squares k='one' value={sqr[1]} onSqrClick={()=>handleClick(1)}/>
                <Squares k='two' value={sqr[2]} onSqrClick={()=>handleClick(2)}/>
                <Squares k='three' value={sqr[3]} onSqrClick={()=>handleClick(3)}/>
                <Squares k='four' value={sqr[4]} onSqrClick={()=>handleClick(4)}/>
                <Squares k='five' value={sqr[5]} onSqrClick={()=>handleClick(5)}/>
                <Squares k='six' value={sqr[6]} onSqrClick={()=>handleClick(6)}/> 
                <Squares k='seven' value={sqr[7]} onSqrClick={()=>handleClick(7)}/>
                <Squares k='eight' value={sqr[8]} onSqrClick={()=>handleClick(8)}/>
            </div>
</>
    );
}
export default Grid;
