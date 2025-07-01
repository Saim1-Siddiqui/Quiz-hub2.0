// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Leaderboard.css';

// const Leaderboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const quizData = location.state?.quizData;
  
//   // Generate a random user ID if not already set
//   const [currentUserId] = useState(() => {
//     const storedId = localStorage.getItem('quizUserId');
//     return storedId ? parseInt(storedId) : Math.floor(Math.random() * 10000);
//   });

//   // Store the user ID in localStorage
//   useEffect(() => {
//     localStorage.setItem('quizUserId', currentUserId.toString());
//   }, [currentUserId]);

//   // Initial leaderboard data
//   const initialPlayers = [
//     { id: 1, name: "Sophia Clark", score: 980 },
//     { id: 2, name: "Ethan Miller", score: 950 },
//     { id: 3, name: "Olivia Davis", score: 920 },
//     { id: 4, name: "Liam Wilson", score: 900 },
//     { id: 5, name: "Ava Thompson", score: 880 },
//     { id: 6, name: "Noah Garcia", score: 860 },
//     { id: 7, name: "Isabella Rodriguez", score: 840 },
//     { id: 8, name: "Jackson Lee", score: 820 },
//     { id: 9, name: "Mia Hernandez", score: 800 },
//     { id: 10, name: "Lucas Perez", score: 780 },
//   ];

//   const [players, setPlayers] = useState(() => {
//     const savedPlayers = JSON.parse(localStorage.getItem('leaderboardPlayers'));
//     return savedPlayers || initialPlayers;
//   });

//   const [currentUser, setCurrentUser] = useState(null);

//   // Initialize or update current user with quiz data
//   useEffect(() => {
//     // Calculate score if quiz data is available
//     let userScore = 0;
//     if (quizData) {
//       userScore = quizData.percentageScore || Math.round(
//         (quizData.correctAnswers / quizData.totalQuestions) * 1000
//       );
//     }

//     // Find existing user in players
//     const existingUserIndex = players.findIndex(p => p.id === currentUserId);
//     let updatedPlayers = [...players];

//     // Update or add user to leaderboard
//     if (existingUserIndex !== -1) {
//       // Only update if new score is higher than existing score
//       if (userScore > updatedPlayers[existingUserIndex].score) {
//         updatedPlayers[existingUserIndex] = {
//           ...updatedPlayers[existingUserIndex],
//           score: userScore
//         };
//       }
//     } else if (userScore > 0) {
//       // Add new user only if they have a score
//       updatedPlayers.push({
//         id: currentUserId,
//         name: "You",
//         score: userScore
//       });
//     }

//     // Sort and keep top 10
//     updatedPlayers = updatedPlayers.sort((a, b) => b.score - a.score).slice(0, 10);
    
//     // Save to state and localStorage if there were changes
//     if (JSON.stringify(updatedPlayers) !== JSON.stringify(players)) {
//       setPlayers(updatedPlayers);
//       localStorage.setItem('leaderboardPlayers', JSON.stringify(updatedPlayers));
//     }

//     // Set current user data
//     const currentUserData = updatedPlayers.find(p => p.id === currentUserId) || {
//       id: currentUserId,
//       name: "You",
//       score: userScore > 0 ? userScore : 0,
//       isNew: true
//     };
    
//     setCurrentUser(currentUserData);
//   }, [currentUserId, quizData, players]);

//   // Get top 3 players
//   const topPlayers = players.slice(0, 3);
//   // Get remaining players (rank 4-10)
//   const otherPlayers = players.slice(3, 10);

//   // Add confetti effect when user achieves high score
//   useEffect(() => {
//     if (currentUser?.score > 0) {
//       const userRank = players.findIndex(p => p.id === currentUserId) + 1;
//       if (userRank <= 3) {
//         // You can add confetti effect here if desired
//         console.log("Congratulations! You made it to the top 3!");
//       }
//     }
//   }, [currentUser, players, currentUserId]);

//   return (
//     <div className="leaderboard-container">
//       <h1>Leaderboard</h1>
//       <p className="subtitle">Top players in the quiz community</p>
      
//       <div className="divider"></div>
      
//       {/* Top 3 Players with special styling */}
//       <div className="top-players-section">
//         {topPlayers.map((player, index) => (
//           <div key={player.id} className={`top-player-card rank-${index + 1}`}>
//             <div className="rank-badge">{index + 1}</div>
//             <div className="player-info">
//               <h3>{player.name}</h3>
//               <p>{player.score} points</p>
//               {player.id === currentUserId && <span className="you-badge">You</span>}
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="divider"></div>
      
//       {/* Top 10 Players Table */}
//       <div className="top10-section">
//         <h2>Top 10 Players</h2>
//         <table className="players-table">
//           <thead>
//             <tr>
//               <th>Rank</th>
//               <th>Player</th>
//               <th>Score</th>
//             </tr>
//           </thead>
//           <tbody>
//             {otherPlayers.map((player, index) => (
//               <tr 
//                 key={player.id}
//                 className={player.id === currentUserId ? 'current-user-row' : ''}
//               >
//                 <td>{index + 4}</td>
//                 <td>
//                   {player.name}
//                   {player.id === currentUserId && <span className="you-indicator"> (You)</span>}
//                 </td>
//                 <td>{player.score}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Current User's Position (if available) */}
//       {currentUser && (
//         <div className="current-user-section">
//           <h2>Your Position</h2>
//           <div className="user-card">
//             <div className="user-rank">
//               {players.findIndex(p => p.id === currentUserId) + 1 || 'Not Ranked'}
//             </div>
//             <div className="user-info">
//               <h3>{currentUser.name}</h3>
//               <p>{currentUser.score} points</p>
//               {quizData && (
//                 <p className="quiz-summary">
//                   You got {quizData.correctAnswers} out of {quizData.totalQuestions} correct
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
      
//       <div className="leaderboard-actions">
//         <button 
//           className="back-to-quiz-btn"
//           onClick={() => navigate('/')}
//         >
//           Back to Quiz
//         </button>
//         <button 
//           className="try-again-btn"
//           onClick={() => navigate(-1)}
//         >
//           Try Again
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;