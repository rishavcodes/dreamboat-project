// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailInput from './components/EmailInput';
import GamePage from './components/GamePage';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailInput />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
