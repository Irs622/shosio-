import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DaftarBarang from './components/DaftarBarang';
import DetailBarang from './components/DetailBarang';
import FormPengajuan from './components/FormPengajuan';
import KonfirmasiTransaksi from './components/KonfirmasiTransaksi';
import ReputasiBiner from './components/ReputasiBiner';
import ProfilPengguna from './components/ProfilPengguna';
import SOP from './components/SOP';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/daftar-barang" element={<DaftarBarang />} />
        <Route path="/detail-barang/:id" element={<DetailBarang />} />
        <Route path="/pengajuan/:id" element={<FormPengajuan />} />
        <Route path="/konfirmasi/:id" element={<KonfirmasiTransaksi />} />
        <Route path="/reputasi/:transaksiId" element={<ReputasiBiner />} />
    m     <Route path="/profil" element={<ProfilPengguna />} />
        <Route path="/sop" element={<SOP />} />
      </Routes>
    </Router>
  );
}