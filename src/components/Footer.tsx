import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">K</span>
              </div>
              <span className="text-slate-900">KOLEKTIF</span>
            </div>
            <p className="text-slate-600 text-sm">
              Platform kolektif mahasiswa FST untuk berbagi dan donasi sumber daya akademik.
            </p>
          </div>
          
          <div>
            <h3 className="text-slate-900 mb-4">Menu</h3>
            <div className="flex flex-col gap-2">
              <Link to="/daftar-barang" className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                Daftar Barang
              </Link>
              <Link to="/profil" className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                Profil
              </Link>
              <Link to="/sop" className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                SOP & Etika
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-900 mb-4">Tentang</h3>
            <p className="text-slate-600 text-sm">
              Platform berbasis komunitas yang mengutamakan kepercayaan dan komitmen mahasiswa.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-center gap-2 text-slate-600 text-sm">
        </div>
      </div>
    </footer>
  );
}
