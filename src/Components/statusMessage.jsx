const  StatusMessage = ({winner , gamingBoard}) =>{
    const { squares, isXNext} = gamingBoard;

    const nonMovesLeft = squares.every(squareValue => squareValue !== null);
    const nextPlayer = isXNext ? 'X' : 'O';

    const renderStatusMessage = () =>{
        if(winner){
            return <>Winner is {' '}
            <span className={winner ==='X' ?'text-green' : 'text-orange'} >
                {winner}
                </span>
                </>;
        }
        if (!winner && nonMovesLeft){
            return <><span className="text-orange">O</span> and {' '}
            <span className="text-green">X</span> tied
            </>
        }
        if (!winner && !nonMovesLeft){
            return <>Next Player is {' '}
                <span className={ isXNext ? 'text-green' : 'text-orange'} >
                {nextPlayer}
                </span>
                </>
        }
        return null;
    };
return <div className="status-message">{renderStatusMessage()}</div>
};

export default StatusMessage;