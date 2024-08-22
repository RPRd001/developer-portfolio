const NavBar = () => {
  return (
    <header className="text-gray-900 py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-400">Ramon Perez</a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;