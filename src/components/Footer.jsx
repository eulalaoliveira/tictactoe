import React from 'react';
import Button from "../components/ResetButton";

export default function Footer({ winner, resetGame }) {
    return (
        <footer>
            {winner === "D" ? (
                <h2 className="winner-message">
                    <span className={winner}>It's a draw!</span>
                </h2>
            ) : (
                <h2 className="winner-message">
                    <span className={winner}>{winner}</span> won!
                </h2>
            )}

            <Button resetGame={resetGame} />
        </footer>
    );
}
