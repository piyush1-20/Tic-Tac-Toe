import './Btn.css'

function Squares({k,value,onSqrClick}){
   
    return(
    <button className={`btn2 ${k}`} onClick={onSqrClick}> {value}</button>
    );
}
export default Squares;