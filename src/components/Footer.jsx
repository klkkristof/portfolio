const Footer = () => {
  return (
    <footer className="py-12 px-6 relative overflow-hidden">
      {/* Background Image - ugyanaz mint a Hero */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Sötétebb overlay + erős blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-blue-40/90 to-white/100"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Copyright */}
        <p className="text-black text-sm mb-2 text-center">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
