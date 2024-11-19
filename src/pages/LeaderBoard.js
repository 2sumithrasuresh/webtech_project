import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You need to install axios

import '../styles/LeaderBoard.css';

const LeaderBoard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the server
    axios.get('http://localhost:5000/leaderboard')
  .then(response => {
    setPlayers(response.data);
  })
  .catch(error => {
    console.error("Error fetching leaderboard data:", error.response || error.message);
  });

  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">🏆 Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Ranks are based on array index */}
              <td>{player.username}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
