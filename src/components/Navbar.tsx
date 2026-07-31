import logoVire from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-white w-full py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-start px-6 md:px-12 lg:px-18">
        <img src={logoVire} alt="Logo VIRE" className="h-6 w-auto"/>
      </div>
    </nav>
  );
}

export default Navbar;