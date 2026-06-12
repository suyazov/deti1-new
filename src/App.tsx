import { Routes, Route } from 'react-router';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Consent from '@/pages/Consent';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/consent" element={<Consent />} />
      </Route>
    </Routes>
  );
}
