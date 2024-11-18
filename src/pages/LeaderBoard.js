import React from 'react';
import './LeaderBoard.css';

const LeaderBoard = () => {
  const players = [
    { rank: 1, name: 'Alice', score: 1500 },
    { rank: 2, name: 'Bob', score: 1200 },
    { rank: 3, name: 'Charlie', score: 1000 },
    { rank: 4, name: 'David', score: 800 },
    { rank: 5, name: 'Eve', score: 600 },
  ];

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">🏆 Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
