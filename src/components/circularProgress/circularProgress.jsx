import React from 'react';
import './circularProgress.css'; // Ensure CSS is imported

const CircularProgress = ({ fulfilled, total }) => {
  const size = 63; // Size of the square containing the circle
  const stroke = 10; // Stroke width of the circle
  const radius = (size - stroke) / 2; // Radius of the circle
  const circumference = radius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset = circumference - (fulfilled / total) * circumference; // Stroke dash offset for progress

  return (
    <div className="circular-progress-container" style={{ width: size, height: size }}>
      <svg height={size} width={size} className="circular-progress-svg">
        <circle
          className="circular-progress-bg"
          stroke="#ffbf7a"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="circular-progress-bar"
          stroke="#f97316"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="circular-progress-text">
        <span>{Math.round((fulfilled / total) * 100)}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
