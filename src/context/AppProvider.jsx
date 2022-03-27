/**
 * Context created to manage app's logic
 * @author Larissa Oliveira Santos
 */

import React, { createContext, useState } from 'react';

export const Context = createContext({});

export default function AppProvider({ children }) {
    const emptyBoard = Array(9).fill("");

    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState("O");
    const [winner, setWinner] = useState(null);

    /**
     * function to check the state of the game and the state of the cell. Then fill the cell with current player element and change player for next turn.
     */
    const handleCellClick = (index) => {
        if (!winner && board[index] === ""){
            setBoard(
                board.map((item, itemIndex) => 
                itemIndex === index ? currentPlayer : item)
            );

            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    }
    /**
     * function to check possible combinations in the array
     */
    const checkWinner = () => {
        const possibleWaysToWin = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],

            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],

            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]],
        ];

        possibleWaysToWin.forEach((cells) => {
            if (cells.every((el) => el === "O")) setWinner("O");
            if (cells.every((el) => el === "X")) setWinner("X");
        });

    };

    return (
        <Context.Provider value={{ winner, board, handleCellClick }}>
            {children}
        </Context.Provider>
    )
}
