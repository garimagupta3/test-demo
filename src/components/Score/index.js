import React from 'react';
import { ScoreContainer } from '@Elements';

const Score = ({ moves }) => {
  return (
    <ScoreContainer>
      <div className="time">
        <div className="score-title">Time</div>
        <div className="time-container">12s</div>
      </div>
      <div className="move">
        <div className="score-title">Moves</div>
        <div className="move-container">{moves}</div>
      </div>
      <div className="best">
        <div className="score-title">best</div>
        <div className="best-container">13392</div>
      </div>
    </ScoreContainer>
  );
};

export default Score;
