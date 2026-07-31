import logoVire from '../assets/logoFooter.png';
import logoIg from '../assets/logoIG.png';

function Footer() {
    return (
        <footer className="bg-white shadow-[0_-1px_4px_-0px_rgba(191,206,240,0.5)] py-10 md:py-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-18">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* kiri */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <img
                            src={logoVire}
                            alt="Logo VIRE"
                            className="h-12 md:h-16 w-auto object-contain"
                        />

                        <a
                            href="https://instagram.com/vire.official1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-opacity duration-300 mt-1"
                        >
                            <img
                                src={logoIg}
                                alt="instagram VIRE"
                                className="w-full max-w-[28px] h-auto object-contain relative z-10"
                            />
                            <span className="text-gray-600 font-small text-sm md:text-base">vire.official1</span>
                        </a>
                    </div>

                    {/* kanan */}
                    <div className="w-full md:w-3/5 text-center md:text-right">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                            <span className="text-blue-600">Pegang kendali penuh atas uang usaha dan </span>
                            <br className="hidden md:block" />
                            <span className="text-orange-500">bangun masa depan bisnis yang lebih sehat.</span>
                        </h2>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;