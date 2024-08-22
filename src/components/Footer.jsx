const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ramon Perez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
