import heroImage from '../assets/hero.png';
import decor from '../assets/decorHero.png';

function Hero() {
    return (
        <section className="relative z-20 bg-white pt-2 pb-28 md:pt-6 md:pb-38 lg:pt-8 lg:pb-56 overflow-hidden">
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

                        <div className="flex flex-row items-center gap-4">
                            <button
                                onClick={() => {
                                    const element = document.getElementById('waitlist-section');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="w-fit inline-block bg-blue-400 text-blue-50 px-8 py-3 rounded-lg font-bold hover:bg-blue-500 hover:shadow-sm active:bg-blue-600 transition-all duration-300"
                            >
                                Buat Akun Sekarang
                            </button>

                            <a
                                href="https://www.figma.com/proto/YdWkdOpcoGG7fnxdPp0oBX/Gemastik-19?node-id=228-1042&t=uTUGbABDXnISiuSo-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=228%3A1042"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit inline-block bg-orange-100 text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-200 hover:text-orange-700 hover:shadow-sm active:bg-orange-300 active:text-orange-800 transition-all duration-300 cursor-pointer text-center"
                            >
                                Coba Sekarang
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