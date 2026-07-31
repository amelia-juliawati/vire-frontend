import { useState } from 'react';
import mascot from '../assets/waitlist.png';

function Waitlist() {
    const [formData, setFormData] = useState({
        nama_lengkap: '',
        email: '',
        nomor_hp: '',
        is_subscribed: false
    });

    const [status, setStatus] = useState({
        loading: false,
        message: '',
        isError: false,
        showToast: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, message: '', isError: false, showToast: false });

        try {
            const response = await fetch('https://vire-backend.vercel.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ loading: false, message: 'Berhasil mendaftar! Terima kasih.', isError: false, showToast: true });
                setFormData({ nama_lengkap: '', email: '', nomor_hp: '', is_subscribed: false });
            } else {
                const errorData = await response.json();
                setStatus({ loading: false, message: errorData.error || 'Gagal mendaftar! Silakan coba lagi.', isError: true, showToast: true });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ loading: false, message: 'Terjadi kesalahan pada server.', isError: true, showToast: true });
        } finally {
            setTimeout(() => { setStatus((prev) => ({ ...prev, showToast: false })) }, 8000);
        }
    };

    return (
        <section id="waitlist-section" className=" -mt-2 min-h-screen py-20 bg-white flex items-center overflow-hidden">

            <div 
                className={`fixed bottom-8 left-8 z-50 px-6 py-4 border rounded-lg shadow-md font-medium flex items-center justify-between gap-4 transition-all duration-500 ease-in-out transform ${
                    status.showToast 
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0 pointer-events-none'
                } ${
                    status.isError 
                        ? 'bg-red-100 border-red-500 text-red-700' 
                        : 'bg-green-100 border-green-500 text-green-700'
                }`}
            >
                <span>{status.message}</span>
                <button 
                    onClick={() => setStatus((prev) => ({ ...prev, showToast: false }))} 
                    className="hover:opacity-75 focus:outline-none font-bold text-xl leading-none transition-opacity"
                    aria-label="Tutup notifikasi"
                >
                    &times;
                </button>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-18 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">

                    {/* kiri (maskot) */}
                    <div className="w-full md:w-2/12 flex justify-center md:justify-start">
                        <img
                            src={mascot}
                            alt="VIRE Mascot"
                            className="max-w-[200px] md:max-w-full h-auto"
                        />
                    </div>

                    {/* tengah (teks) */}
                    <div className="w-full md:w-4/12 text-center md:text-left self-start">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 tracking-tight leading-tight text-blue-500 text-left">
                            Siap Bawa Bisnis Anda Naik Kelas Lebih Cepat?
                        </h1>

                        <p className="text-grey-600 text-md font-normal mb-6 md:mb-12">
                            Bergabunglah sebagai early adopter Vire hari ini dan nikmati gratis biaya langganan fitur AI Analysis selama 6 bulan pertama.
                        </p>

                        <p className="text-red text-sm font-semibold">
                            *Slot terbatas hanya untuk 500 pemilik bisnis pertama!
                        </p>
                    </div>

                    {/* kanan (form) */}
                    <div className="w-full md:w-5/12">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                            {/* nama */}
                            <div>
                                <label className="block text-blue-500 font-semibold text-sm mb-1.5">
                                    Nama <span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nama_lengkap"
                                    value={formData.nama_lengkap}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ketik disini.."
                                    className="w-full border border-blue-500 rounded-lg px-4 py-2 text-grey-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-sm"
                                />
                            </div>

                            {/* email */}
                            <div>
                                <label className="block text-blue-500 font-semibold text-sm mb-1.5">
                                    Email <span className="text-red">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ketik disini.."
                                    className="w-full border border-blue-500 rounded-lg px-4 py-2 text-grey-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-sm"
                                />
                            </div>

                            {/* nomor hp (opsional) */}
                            <div>
                                <label className="block text-blue-500 font-semibold text-sm mb-1.5">
                                    Nomor HP (Opsional)
                                </label>
                                <input
                                    type="tel"
                                    name="nomor_hp"
                                    value={formData.nomor_hp}
                                    onChange={handleChange}
                                    placeholder="Ketik disini.."
                                    className="w-full border border-blue-500 rounded-lg px-4 py-2 text-grey-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-sm"
                                />
                            </div>

                            {/* checkbox */}
                            <div className="flex items-start gap-3 mt-1">
                                <input
                                    type="checkbox"
                                    name="is_subscribed"
                                    checked={formData.is_subscribed}
                                    onChange={handleChange}
                                    className="appearance-none relative mt-0.5 w-6 h-6 border-2 border-blue-500 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 cursor-pointer outline-none after:content-[''] after:absolute after:hidden checked:after:block after:w-[7px] after:h-[13px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[6px] after:top-[2px]"
                                />
                                <span className="text-sm text-blue-500 font-medium leading-relaxed">
                                    Kirimkan saya pembaruan produk, info rilis, dan penawaran eksklusif dari VIRE ke email ini.
                                </span>
                            </div>

                            {/* submit */}
                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`w-full mx-2 py-3 rounded-lg font-bold text-white transition-all duration-300 ${status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-500 hover:shadow-sm active:bg-blue-600'}`}
                            >
                                {status.loading ? 'Memproses...' : 'Daftar Sekarang'}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Waitlist;