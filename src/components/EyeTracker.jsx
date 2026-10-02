import React, { useEffect, useRef, useState, useCallback } from 'react';
import './EyeTracker.css';

export default function EyeTracker() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  const [mood, setMood] = useState('neutral'); // 'neutral' | 'sad' | 'happy'
  const [blinking, setBlinking] = useState(false);

  const movePupils = useCallback((clientX, clientY) => {
    [
      { eye: leftEyeRef.current, pupil: leftPupilRef.current },
      { eye: rightEyeRef.current, pupil: rightPupilRef.current },
    ].forEach(({ eye, pupil }) => {
      if (!eye || !pupil) return;
      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.hypot(dx, dy);
      // Clamp so pupil stays inside the eyeball
      const maxDist = rect.width / 2 - 14;
      const travel = Math.min(distance * 0.22, maxDist);
      pupil.style.transform = `translate(${Math.cos(angle) * travel}px, ${Math.sin(angle) * travel}px)`;
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Detect data-mood on any element under cursor (walks up DOM tree)
      const moodEl = e.target.closest?.('[data-mood]');
      setMood(moodEl ? moodEl.getAttribute('data-mood') : 'neutral');

      // Track pupils toward cursor
      movePupils(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Natural random blinking every ~3.5s
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    }, 3500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, [movePupils]);

  // Manual blink on click
  const handleClick = () => {
    setBlinking(true);
    setTimeout(() => setBlinking(false), 150);
  };

  return (
    <div
      className={`mascot mood-${mood} ${blinking ? 'is-blinking' : ''}`}
      onClick={handleClick}
      title="I follow your cursor!"
    >
      {/* Eyes */}
      <div className="eyes-row">
        {/* Left Eye */}
        <div className="eye-socket" ref={leftEyeRef}>
          <div className="lid lid-top" />
          <div className="eyeball">
            <div className="pupil" ref={leftPupilRef}>
              <span className="pupil-shine" />
            </div>
          </div>
          <div className="lid lid-bottom" />
        </div>

        {/* Right Eye */}
        <div className="eye-socket" ref={rightEyeRef}>
          <div className="lid lid-top" />
          <div className="eyeball">
            <div className="pupil" ref={rightPupilRef}>
              <span className="pupil-shine" />
            </div>
          </div>
          <div className="lid lid-bottom" />
          {/* Tear only shows in sad mood */}
          <div className="tear" />
        </div>
      </div>

      {/* Mouth + Cheeks */}
      <div className="mouth-row">
        <div className="cheek" />
        <div className="mouth" />
        <div className="cheek" />
      </div>
    </div>
  );
}
