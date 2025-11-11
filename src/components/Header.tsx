"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/current-issue", label: "Current Issue" },
    { href: "/archives", label: "Archives" },
    { href: "/for-authors", label: "For Authors" },
    { href: "/about", label: "About" },
  ];

  const linkClass = (path: string) =>
    `relative font-medium pb-1 border-b-2 transition-colors ${
      pathname === path
        ? "font-bold border-white text-white"
        : "border-transparent text-[#E0E6F0] hover:text-white hover:border-white"
    }`;

  return (
    <header className="bg-[#071936] border-b border-white text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex items-center justify-between h-20">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-[white] rounded-lg flex items-center justify-center transition-transform">
              <Image
                src="/uniben-logo.png"
                alt="UNIBEN Logo"
                width={48}
                height={48}
                className="rounded"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight transition-colors">
                UNIBEN Journal of Science, Technology and Innovation
              </h1>
              <p className="text-sm text-white/80 font-medium">
                Open Access • Peer Reviewed
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}

            {/* Search Toggle */}
            {!isHomePage && (
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-[#8690A0]/20 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            )}

            {/* Submit Button */}
            <Link
              href="/submission"
              className="bg-white text-[#071936] px-4 py-2 rounded-full font-semibold hover:bg-[#8690A0C2] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Submit Manuscript
            </Link>
          </nav>

          {/* Mobile Menu + Search */}
          <div className="lg:hidden flex items-center gap-2">
            {!isHomePage && (
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-[#8690A0]/20 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="h-6 w-6" />
              </button>
            )}
            <button
              className="flex items-center justify-center p-2 hover:bg-[#8690A0]/20 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {!isHomePage && isSearchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative">
              <input
                type="search"
                placeholder="Search articles, authors, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-3 pl-12 rounded-full border-2 border-[#8690A0]/40 bg-[#8690A0]/10 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-[#8690A0]/20 transition-all"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#071936] px-6 py-2 rounded-full font-semibold hover:bg-[#8690A0C2] transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0A234C] border-t border-white/10 animate-slide-down">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Search */}
            <Link
              href="/search"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-2 pb-1 border-b-2 ${
                pathname === "/search"
                  ? "font-bold border-white text-white"
                  : "border-transparent text-[#E0E6F0] hover:text-white hover:border-white"
              }`}
            >
              <Search size={20} /> Advanced Search
            </Link>

            <Link
              href="/submission"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-[#071936] px-6 py-3 rounded-full font-semibold hover:bg-[#8690A0C2] transition-all text-center shadow-lg hover:shadow-xl"
            >
              Submit Manuscript
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
