import logo from '../assets/about.png';
import decor from '../assets/decorAbout.png';

function About() {
    return (
        <section className="relative -mt-2 bg-gradient-to-b from-[#9CB6F8] to-[#A1BBFA] pt-6 pb-18 md:pt-6 md:pb-46 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-18 relative">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">

                    {/* kolom kiri */}
                    <img
                        src={logo}
                        alt="VIRE Logo"
                        className= "w-full h-auto max-w-[480px] object-contain"
                    />

                    {/* kanan (teks) */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight leading-tight">
                            <span className="text-white">Tentang </span>
                            <span className="text-orange-200">VIRE</span>
                        </h1>

                        <p className="text-white text-lg mb-8 font-small">
                            VIRE adalah platform manajemen pengeluaran modern untuk UMKM menengah yang menyederhanakan pengelolaan kas kecil lewat virtual card per divisi. Melalui sistem request-and-approve instan yang dilengkapi teknologi AI untuk catat nota otomatis, VIRE membuat kolaborasi keuangan antar-divisi jadi lebih praktis, transparan, dan terpantau real-time dalam satu dasbor terpusat.
                        </p>
                    </div>

                </div>
            </div>

            {/* dekorasi */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                <img
                    src={decor}
                    alt="Wave"
                    className="w-full h-auto object-contain relative z-10"
                />
            </div>

        </section>
    );
}

export default About;