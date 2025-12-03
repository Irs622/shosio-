import Navbar from './Navbar';
import Footer from './Footer';
import { Badge } from './ui/badge';
import { Award, TrendingUp, Package, Gift, Calendar } from 'lucide-react';

export default function ProfilPengguna() {
  const user = {
    nama: 'Lm irsal shydiq',
    nim: '1237050136',
    jurusan: 'Teknik informatika',
    angkatan: '2023',
    email: 'Irsalh@student.edu',
    reputasi: 85,
    totalTransaksi: 12,
    totalDonasi: 5,
    totalDiterima: 7,
    bergabung: 'Januari 2024'
  };
  
  const riwayatTransaksi = [
    {
      id: '1',
      tanggal: '15 Nov 2025',
      barang: 'Kalkulus dan Geometri Analitik Jilid 1',
      jenis: 'Diterima',
      status: 'Selesai',
      pihak: 'Ahmad Rizki'
    },
    {
      id: '2',
      tanggal: '10 Nov 2025',
      barang: 'Jas Lab Kimia Ukuran M',
      jenis: 'Didonasikan',
      status: 'Selesai',
      pihak: 'Budi Santoso'
    },
    {
      id: '3',
      tanggal: '5 Nov 2025',
      barang: 'Modul Praktikum Fisika',
      jenis: 'Diterima',
      status: 'Selesai',
      pihak: 'Dewi Lestari'
    },
    {
      id: '4',
      tanggal: '1 Nov 2025',
      barang: 'Kalkulator Scientific',
      jenis: 'Didonasikan',
      status: 'Selesai',
      pihak: 'Rudi Hermawan'
    },
    {
      id: '5',
      tanggal: '28 Okt 2025',
      barang: 'Buku Statistika Dasar',
      jenis: 'Diterima',
      status: 'Selesai',
      pihak: 'Linda Wijaya'
    }
  ];
  
  const getReputasiColor = (reputasi: number) => {
    if (reputasi >= 90) return 'from-green-500 to-green-600';
    if (reputasi >= 75) return 'from-blue-500 to-blue-600';
    if (reputasi >= 50) return 'from-amber-500 to-amber-600';
    return 'from-red-500 to-red-600';
  };
  
  const getReputasiLabel = (reputasi: number) => {
    if (reputasi >= 90) return { text: 'Sangat Baik', color: 'text-green-600' };
    if (reputasi >= 75) return { text: 'Baik', color: 'text-blue-600' };
    if (reputasi >= 50) return { text: 'Cukup', color: 'text-amber-600' };
    return { text: 'Perlu Perbaikan', color: 'text-red-600' };
  };
  
  const reputasiLabel = getReputasiLabel(user.reputasi);
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-green-600 h-32" />
          <div className="px-8 pb-8">
            <div className="flex items-end gap-6 -mt-16">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center border-4 border-white shadow-lg">
                <span className="text-white text-4xl">{user.nama.charAt(0)}</span>
              </div>
              <div className="flex-1 pt-20">
                <h1 className="text-slate-900 mb-1">{user.nama}</h1>
                <p className="text-slate-600 mb-2">
                  {user.jurusan} • Angkatan {user.angkatan} • NIM: {user.nim}
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  Bergabung {user.bergabung}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats and Reputation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Reputation Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-slate-900">Reputasi Komitmen</h2>
                <p className="text-slate-600 text-sm">Tingkat kepercayaan dalam komunitas</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex items-end justify-between mb-2">
                <span className={`text-5xl ${reputasiLabel.color}`}>
                  {user.reputasi}%
                </span>
                <Badge className={`${reputasiLabel.color} bg-transparent text-base`}>
                  {reputasiLabel.text}
                </Badge>
              </div>
              
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div 
                  className={`h-full bg-gradient-to-r ${getReputasiColor(user.reputasi)} transition-all duration-500`}
                  style={{ width: `${user.reputasi}%` }}
                />
              </div>
              
              <p className="text-slate-600 text-sm">
                Reputasi dihitung berdasarkan komitmen yang dipenuhi dari semua transaksi. 
                Tingkatkan reputasi dengan selalu menepati janji dan komitmen.
              </p>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-slate-900 mb-6">Statistik</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-2xl">{user.totalTransaksi}</p>
                    <p className="text-slate-600 text-sm">Total Transaksi</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <Gift className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-2xl">{user.totalDonasi}</p>
                    <p className="text-slate-600 text-sm">Barang Didonasikan</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-2xl">{user.totalDiterima}</p>
                    <p className="text-slate-600 text-sm">Barang Diterima</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transaction History */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-slate-900 mb-6">Riwayat Transaksi</h2>
          
          <div className="space-y-3">
            {riwayatTransaksi.map((transaksi) => (
              <div 
                key={transaksi.id}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  transaksi.jenis === 'Diterima' 
                    ? 'bg-blue-50' 
                    : 'bg-green-50'
                }`}>
                  {transaksi.jenis === 'Diterima' ? (
                    <Package className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Gift className="w-6 h-6 text-green-600" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-900 mb-1">{transaksi.barang}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span>{transaksi.tanggal}</span>
                    <span>•</span>
                    <span>{transaksi.jenis} dari {transaksi.pihak}</span>
                  </div>
                </div>
                
                <Badge 
                  variant="secondary"
                  className="bg-green-100 text-green-700"
                >
                  {transaksi.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
