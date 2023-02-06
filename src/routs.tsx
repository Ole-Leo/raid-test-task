import { MainPage } from './pages/MainPage';
import { LinkPage } from './pages/LinkPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/single.html" element={<LinkPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
