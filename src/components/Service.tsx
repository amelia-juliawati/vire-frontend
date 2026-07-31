import virePocket from '../assets/virePocket.png';
import vireDashboard from '../assets/vireDashboard.png';
import vireReceipt from '../assets/vireReceipt.png';

function Service() {
    return (
        <section className="relative z-10 -mt-2 min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-[#809DE5] to-[#9CB6F8]">
            <div className="container mx-auto px-6 md:px-12 lg:px-18 max-w-6xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 lg:mb-20 tracking-tight leading-tight text-white text-center">
                    Layanan Kami
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* VirePocket */}
                    <div className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <img src={virePocket} alt="VirePocket" className="h-16 w-auto mb-4" />

                        <h3 className="text-blue-700 text-xl font-bold mb-4">
                            VirePocket
                        </h3>

                        <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                            Bagikan virtual card ke tiap divisi dengan limit anggaran yang bisa diatur sesuka Anda.
                        </p>
                    </div>

                    {/* VireReceipt */}
                    <div className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <img src={vireReceipt} alt="VireReceipt" className="h-16 w-auto mb-4" />

                        <h3 className="text-blue-700 text-xl font-bold mb-4">
                            VireReceipt
                        </h3>

                        <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                            Cukup foto nota belanja, AI kami akan otomatis mencatatnya tanpa perlu input manual.
                        </p>
                    </div>

                    {/* VireDashboard */}
                    <div className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <img src={vireDashboard} alt="VireDashboard" className="h-16 w-auto mb-4" />

                        <h3 className="text-blue-700 text-xl font-bold mb-4">
                            VireDashboard
                        </h3>

                        <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                            Pantau semua pengeluaran divisi dalam satu layar secara aman dan real-time.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Service;