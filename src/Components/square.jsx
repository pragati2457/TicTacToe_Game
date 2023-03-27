const Square = ({value, onClick}) =>{

 // const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  //const winningClassName = isWinningSquare ? 'winning' :'';
    return(
        <button
         type = "button" 
         className= {`square ${value === 'X' ? 'text-green' : 'text-orange'}`}
        
         onClick={onClick}
         >
          {value}
        </button>
    );
    
};

export default Square;