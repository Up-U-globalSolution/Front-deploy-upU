import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import type { User } from '../../types/auth';

export default function Cabecalho() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState<User | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData) as User);
    }
  }, []);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/sobre', label: 'SOBRE' },
    { path: '/integrantes', label: 'EQUIPE' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contato', label: 'CONTATO' }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 border-b border-purple-500/20 backdrop-blur-sm">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all"
          >
            Up'U
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
          >
            {theme === 'light' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64 15.95c-.18-.8-.46-1.58-.84-2.3.02-.04.07-.16.07-.16a8.05 8.05 0 00-8.54-8.54c0 0-.12.05-.16.07A8.017 8.017 0 008.02 5.25c-.75.38-1.5.65-2.3.84-.36.18-.74.35-1.14.49.05.65.29 1.275.72 1.78C5.04 9.94 6.12 11.01 7.44 11.44c.5.23.91.34 1.44.34.13 0 .26-.01.39-.03-.13.87.04 1.76.51 2.57-.3.26-.58.56-.82.88-.23.28-.42.58-.58.88.36.18.74.35 1.14.49.8.18 1.58.46 2.3.84.04.02.16.07.16.07a8.05 8.05 0 008.54 8.54c0 0 .12-.05.16-.07a8.017 8.017 0 002.33-1.39c.3-.26.58-.56.82-.88.23-.28.42-.58.58-.88-.36-.18-.74-.35-1.14-.49-.8-.18-1.58-.46-2.3-.84-.04-.02-.16-.07-.16-.07a8.05 8.05 0 00-8.54-8.54z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          {/* User Menu */}
          <div className="hidden md:block relative">
            {user ? (
              <div>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center font-semibold text-sm text-white">
                    {user.nome.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-200">
                    {user.nome.split(' ')[0]}
                  </span>
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-2xl border border-purple-500/20 py-2 z-50">
                    <div className="px-4 py-3 border-b border-purple-500/20">
                      <p className="text-sm font-semibold text-white">{user.nome}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>

                    <button
                      onClick={() => {
                        navigate('/perfil');
                        setShowMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                    >
                      Meu perfil
                    </button>

                    <div className="border-t border-purple-500/20 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all text-left"
                >
                  {item.label}
                </button>
              ))}
              {user ? (
                <>
                  <button
                    onClick={() => {
                      navigate('/perfil');
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all text-left"
                  >
                    Meu Perfil
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-all text-left"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium text-left"
                >
                  Login
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}