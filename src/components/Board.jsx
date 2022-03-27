import React from 'react';

export default function Board({ winner, board, handleCellClick }) {
    return (
        <div className={`board ${winner ? "game-over" : ""}`}>
            {board.map((item, index) => (
                <div
                    key={index}
                    className={`cell ${item}`}
                    onClick={() => handleCellClick(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}
