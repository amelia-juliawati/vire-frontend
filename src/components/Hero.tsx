import heroImage from '../assets/hero.png';
import decor from '../assets/decorHero.png';

function Hero() {
    return (
        <section className="relative z-20 bg-white pt-4 pb-15 md:pt-8 md:pb-30 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-18 relative">
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center">
                    {/* bagian kiri (teks dan tombol) */}
                    <div className="order-2 md:order-1 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight leading-tight">
                            <span className="text-blue-500">Pisahkan Keuangan UMKM Lebih Mudah. </span>
                            <span className="text-orange-500">Kelola Bisnis Lebih Pintar</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 font-small">
                            Cara paling praktis delegasikan anggaran operasional ke setiap divisi. Setujui permintaan dana dalam hitungan detik dan pantau pengeluaran bisnis tanpa ribet.
                        </p>

                        <div>
                            <a
                                href="#waitlist-section"
                                className="inline-block bg-orange-100 text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-200 hover:text-orange-700 hover:shadow-sm active:bg-orange-300 active:text-orange-800 transition-all duration-300"
                            >
                                Buat Akun Sekarang
                            </a>
                        </div>

                    </div>

                    {/* bagian kiri (gambar) */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                        <img
                            src={heroImage}
                            alt="Ilustrasi VIRE"
                            className="w-full h-auto object-contain relative z-10"
                        />
                    </div>

                </div>
            </div>

            {/* dekorasi bawah */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-0 translate-y-[4px]">
                <img
                    src={decor}
                    alt="Wave"
                    className="w-full h-auto object-cover block relative z-30"
                />
            </div>
        </section>
    );
}

export default Hero;