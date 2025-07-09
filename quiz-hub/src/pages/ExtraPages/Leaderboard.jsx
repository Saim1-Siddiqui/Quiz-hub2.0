import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Leaderboard.css';

const Leaderboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quizData = location.state?.quizData;
  
  const [currentUserId] = useState(() => {
    const storedId = localStorage.getItem('quizUserId');
    return storedId ? parseInt(storedId) : Math.floor(Math.random() * 10000);
  });

  useEffect(() => {
    localStorage.setItem('quizUserId', currentUserId.toString());
  }, [currentUserId]);

  const [players, setPlayers] = useState(() => {
    const savedPlayers = JSON.parse(localStorage.getItem('leaderboardPlayers')) || [
      { id: 1, name: "Farhan Zulfi", score: 980 },
      { id: 2, name: "Saim Siddiqui", score: 855 },
      { id: 3, name: "Zain Ishfaq", score: 710 },
      { id: 4, name: "Mohsan 001", score: 570 },
      { id: 5, name: "Taha 012", score: 425 },
      { id: 6, name: "Ali karachi", score: 285 },
      { id: 7, name: "Rizwan khan", score: 143 },
      { id: 8, name: "Subhan Lee", score: 142 },
      { id: 9, name: "Anas Patwari", score: 142 },
      { id: 10, name: "Liyaqat Perez", score: 142 },
    ];
    return savedPlayers;
  });

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
  if (!quizData) return;

  const userScore = quizData.percentageScore || 0;
  const updatedPlayers = [...players];
  const existingUserIndex = updatedPlayers.findIndex(p => p.id === currentUserId);

  // Update or add user score
  if (existingUserIndex !== -1) {
    if (userScore > updatedPlayers[existingUserIndex].score) {
      updatedPlayers[existingUserIndex].score = userScore;
    }
  } else if (userScore > 0) {
    updatedPlayers.push({
      id: currentUserId,
      name: "You",
      score: userScore
    });
  }

  // Sort by score descending and keep top 10
  updatedPlayers.sort((a, b) => b.score - a.score);
  const top10Players = updatedPlayers.slice(0, 10);
  
  // Update state and storage if changed
  if (JSON.stringify(top10Players) !== JSON.stringify(players)) {
    setPlayers(top10Players);
    localStorage.setItem('leaderboardPlayers', JSON.stringify(top10Players));
  }

  // Set current user data
  const userRank = top10Players.findIndex(p => p.id === currentUserId);
  setCurrentUser({
    id: currentUserId,
    name: "You",
    score: userScore,
    rank: userRank !== -1 ? userRank + 1 : null
  });
}, [quizData, currentUserId, players]);

  const topPlayers = players.slice(0, 3);
  const otherPlayers = players.slice(3, 10);

  return (
    <div className="leaderboard-container">
      <h1>Quiz Leaderboard</h1>
      <p className="subtitle">Top performers in our community</p>
      
      <div className="divider"></div>
      
      {/* Top 3 Podium */}
      <div className="podium-container">
        {topPlayers.map((player, index) => (
          <div key={player.id} className={`podium-place place-${index + 1}`}>
            <div className="podium-rank">{index + 1}</div>
            <div className="podium-info">
              <h3>{player.name}</h3>
              <p>{player.score} pts</p>
              {player.id === currentUserId && <span className="you-badge">You</span>}
            </div>
          </div>
        ))}
      </div>
      
      <div className="divider"></div>
      
      {/* Leaderboard Table */}
      <div className="leaderboard-table">
        <h2>Top 10 Players</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {otherPlayers.map((player, index) => (
              <tr key={player.id} className={player.id === currentUserId ? 'highlight-row' : ''}>
                <td>{index + 4}</td>
                <td>
                  {player.name}
                  {player.id === currentUserId && <span className="you-indicator"> (You)</span>}
                </td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Current User's Stats */}
      {currentUser && (
        <div className="user-stats">
          <h2>Your Performance</h2>
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-label">Your Rank:</span>
              <span className="stat-value">
                {currentUser.rank ? `#${currentUser.rank}` : 'Not ranked'}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Your Score:</span>
              <span className="stat-value">{currentUser.score} points</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="action-buttons">
        <button className="primary-btn" onClick={() => navigate('/')}>
          Back to Quiz
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;