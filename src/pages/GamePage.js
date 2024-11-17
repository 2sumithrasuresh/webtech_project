import React from "react";
import { Link } from "react-router-dom";

const GamePage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1>Select a Game to Play</h1>
      <div style={styles.gameList}>
        <div style={styles.gameCard}>
          <h2>Number Guessing Game</h2>
          <p>Guess the number between 1 and 100!</p>
          <Link to="/number-guessing">
            <button style={styles.button}>Play</button>
          </Link>
        </div>

        <div style={styles.gameCard}>
          <h2>Rock-Paper-Scissors</h2>
          <p>Play Rock-Paper-Scissors against the computer!</p>
          <Link to="/rock-paper-scissors">
            <button style={styles.button}>Play</button>
          </Link>
        </div>

        <div style={styles.gameCard}>
          <h2>Maze Game</h2>
          <p>Find your way through the maze!</p>
          <Link to="/maze-game">
            <button style={styles.button}>Play</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    textAlign: "center",
    padding: "20px",
  },
  gameList: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  gameCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    marginTop: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default GamePage;
