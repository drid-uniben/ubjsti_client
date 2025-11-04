"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const indexingPlatforms = [
    {
      name: "Google Scholar",
      logo: "/indexing/google-scholar.jpg",
      url: "https://scholar.google.com",
      status: "active",
    },
    {
      name: "Crossref",
      logo: "/indexing/crossref.png",
      url: "https://www.crossref.org",
      status: "active",
    },
    {
      name: "COPE",
      logo: "/indexing/cope.png",
      url: "https://publicationethics.org",
      status: "active",
    },
    {
      name: "BASE",
      logo: "/indexing/base.png",
      url: "https://www.base-search.net",
      status: "active",
    },
    {
      name: "PKP PN",
      logo: "/indexing/pkp.png",
      url: "https://pkp.sfu.ca/pkp-pn",
      status: "active",
    },
    {
      name: "Internet Archive",
      logo: "/indexing/ia.png",
      url: "https://archive.org",
      status: "active",
    },
    {
      name: "DOAJ",
      logo: "/indexing/doaj.png",
      url: "https://doaj.org",
      status: "pending",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#071936] to-[#0b2448] border-t-2 border-[#8690A0]/40 text-gray-200">
      {/* Indexing & Trust Indicators */}
      <section className="py-12 border-b border-[#8690A0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-bold text-white mb-2 tracking-wide">
            INDEXED & PRESERVED BY
          </h3>
          <p className="text-center text-xs text-[#8690A0] mb-8">
            Ensuring long-term accessibility and discoverability
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {indexingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="bg-[white] border border-[#8690A0]/40 rounded-xl p-4 h-24 flex items-center justify-center transition-all group-hover:border-white group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="relative w-full h-full">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {platform.status === "pending" && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Pending
                    </span>
                  )}
                </div>
                <p className="text-center text-xs font-medium text-gray-300 mt-2 group-hover:text-white transition-colors">
                  {platform.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ISSN & Open Access Badges */}
      <section className="py-8 bg-[#0c2342]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="flex items-center gap-2 bg-[#071936] border border-[#8690A0]/40 rounded-lg px-6 py-3">
                <div className="text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#8690A0]">
                    Print ISSN
                  </div>
                  <div className="text-sm font-bold text-white">2XXX-XXXX</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center gap-2 bg-[#071936] border border-[#8690A0]/40 rounded-lg px-6 py-3">
                <div className="text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#8690A0]">
                    Online ISSN
                  </div>
                  <div className="text-sm font-bold text-white">2XXX-XXXX</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center gap-2 bg-[#0f2b56] border border-green-200/30 rounded-lg px-6 py-3">
                <div className="text-green-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#8690A0]">
                    Open Access
                  </div>
                  <div className="text-sm font-bold text-green-400">
                    Diamond OA
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center gap-2 bg-[#071936] border border-[#8690A0]/40 rounded-lg px-6 py-3">
                <div className="relative w-18 h-18">
                  <Image
                    src="/indexing/open_access.png"
                    alt="Open Access Image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center gap-2 bg-[#0c2342] border border-blue-300/30 rounded-lg px-6 py-3">
                <div className="text-blue-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#8690A0]">
                    License
                  </div>
                  <div className="text-sm font-bold text-blue-300">
                    CC BY 4.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              {
                title: "QUICK LINKS",
                links: [
                  { href: "/", label: "Home" },
                  { href: "/current-issue", label: "Current Issue" },
                  { href: "/archives", label: "Archives" },
                  { href: "/for-authors", label: "For Authors" },
                ],
              },
              {
                title: "ABOUT",
                links: [
                  { href: "/about", label: "Journal Overview" },
                  { href: "/editorial-board", label: "Editorial Board" },
                  { href: "/policies", label: "Policies" },
                ],
              },
              {
                title: "RESOURCES",
                links: [
                  { href: "/for-authors", label: "Author Guidelines" },
                  { href: "/about#peer-review", label: "Peer Review" },
                  { href: "/policies#ethics", label: "Publication Ethics" },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-white mb-4 text-sm tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#8690A0] hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-bold text-white mb-4 text-sm tracking-wide">
                CONTACT
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-[#8690A0]">
                  <Mail className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:journalst@uniben.edu"
                    className="hover:text-white transition-colors"
                  >
                    journalst@uniben.edu
                  </a>
                </li>
                <li className="flex items-start gap-2 text-[#8690A0]">
                  <MapPin className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                  <span>
                    University of Benin<br />
                    Ugbowo Campus, PMB 1154<br />
                    Benin City, Edo State, Nigeria
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#8690A0]/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8690A0]">
            <p>
              © {new Date().getFullYear()} University of Benin — UNIBEN Journal
              of Humanities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
