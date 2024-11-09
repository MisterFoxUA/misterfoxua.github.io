import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
  isTop: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, isTop }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Викликаємо звук при показі повідомлення
    playNotificationSound();

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'triangle'; // Більш м'яка хвиля для звуку повідомлення
    oscillator.frequency.setValueAtTime(660, audioContext.currentTime); // Нижча частота для м'якого звуку
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Налаштування гучності та тривалості
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime); // Низька гучність
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.15); // Плавне згасання

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.15); // Короткий звук тривалістю 150 мс
  };

  if (!isVisible) return null;

  const toastStyles: React.CSSProperties = {
    position: 'fixed',
    top: isTop?'0px':'100vh',
    left: '45vw',
    padding: '10px 20px',
    height: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    opacity: 0.9,
    transition: 'opacity 0.3s ease',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={toastStyles}>
      {message}
    </div>
  );
};



export default Toast;
