import { Metadata } from "next";
import React from "react";
import { CONFIG } from "@/utils/config";
import { Accordion } from "@/components/Accordion";
import { ConicButton } from "@/components/ConicButton";
import { MatchList } from "@/components/MatchList";
import { FloatingButtons } from "@/components/FloatingButtons";


export const metadata: Metadata = {
  title: "Reddy Anna | Live Cricket Betting ID and Online Sports Platform",
  description: "Get your Reddy Anna ID for live cricket betting, sports exchange, and online gaming. Fast registration, secure platform, and 24/7 customer support.",
};

export default function HomePage() {
  return (
    <div className="w-full bg-[#05080f] text-white font-sans selection:bg-[#00ccff] selection:text-black min-h-screen">
      <FloatingButtons />

      {/* 1. Hero Section */}
      <section className="relative w-full aspect-[2/1] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp"
            alt="Cricket Stadium Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center gap-6 mt-16 md:mt-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white drop-shadow-2xl">
            India's Trusted Reddy Anna <br/><span className="text-[#00ccff]">Cricket Betting ID</span> Provider
          </h1>
          
          <div className="text-gray-200 text-sm md:text-base lg:text-lg font-semibold max-w-2xl bg-black/40 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
            <p className="mb-3 text-white text-base md:text-xl font-bold">Get Your Verified Reddy Anna ID within Minutes.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-[#00E5FF]">
              <span className="flex items-center gap-1">⚡ Fast Approval</span>
              <span className="flex items-center gap-1">🎧 24x7 Support</span>
              <span className="flex items-center gap-1">💸 Instant Deposit & Withdrawal</span>
              <span className="flex items-center gap-1">🛡️ Trusted Since 2010</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <a href={CONFIG.whatsappUrl} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00ccff] to-[#0055ff] hover:from-[#0055ff] hover:to-[#00ccff] text-white font-extrabold rounded-xl shadow-[0_0_20px_rgba(0,204,255,0.4)] transition-all uppercase tracking-wide text-sm md:text-base text-center transform hover:scale-105">
              GET REDDY ANNA ID
            </a>
            <a href={CONFIG.whatsappUrl} className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all uppercase tracking-wide text-sm md:text-base flex items-center justify-center gap-2 transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>

      {/* 2. Trust Section (Visual) */}
      <section className="w-full py-8 bg-[#0c1322] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm md:text-base font-bold text-gray-300">
            <span className="flex items-center gap-2"><span className="text-[#00E5FF] text-xl">✓</span>Since 2010</span>
            <span className="flex items-center gap-2"><span className="text-[#00E5FF] text-xl">✓</span>Thousands of Active Players</span>
            <span className="flex items-center gap-2"><span className="text-[#00E5FF] text-xl">✓</span>Fast Withdrawal</span>
            <span className="flex items-center gap-2"><span className="text-[#00E5FF] text-xl">✓</span>Secure IDs</span>
            <span className="flex items-center gap-2"><span className="text-[#00E5FF] text-xl">✓</span>24/7 Support</span>
            <span className="flex items-center gap-2"><span className="text-[#00E5FF] text-xl">✓</span>100% Assistance</span>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Reddy Anna (Cards) */}
      <section className="w-full py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 uppercase text-white tracking-wide">Why Choose <span className="text-[#00ccff]">Reddy Anna</span></h2>
        
        <div className="max-w-4xl mx-auto text-gray-300 text-center mb-10 text-sm md:text-base leading-relaxed">
          <p>
            Reddy Anna offers a smooth, user-friendly platform designed for sports enthusiasts seeking a reliable online experience. With an easy-to-navigate interface, fast performance, and compatibility across desktop and mobile devices, users can access their accounts conveniently anytime. The platform focuses on security, responsive customer support, and a seamless experience to ensure user satisfaction. Regular updates and continuous improvements help maintain stability and performance. Whether you're new or returning, Reddy Anna provides a convenient way to stay connected with live sports, making it a dependable choice for those who value speed, accessibility, and a hassle-free online experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href={CONFIG.whatsappUrl} className="relative group overflow-hidden rounded-3xl border border-white/10 hover:border-[#00ccff]/50 transition-all cursor-pointer bg-gradient-to-br from-[#1a2233] to-[#0c1322] aspect-[2/1] md:aspect-[5/2]">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img src={CONFIG.images.cricketCardBg} alt="Cricket Betting" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"/>
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-6 text-center gap-3">
              <span className="text-4xl">🏏</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider">Instant Cricket Betting ID</h3>
              <p className="text-gray-300 font-semibold text-sm md:text-base">Get your ID under 60 seconds and start betting on IPL.</p>
            </div>
          </a>
          <a href={CONFIG.whatsappUrl} className="relative group overflow-hidden rounded-3xl border border-white/10 hover:border-[#FF4081]/50 transition-all cursor-pointer bg-gradient-to-br from-[#1a2233] to-[#0c1322] aspect-[2/1] md:aspect-[5/2]">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img src="https://reddybookwinin.in/wp-content/uploads/2026/04/casinob.webp" alt="Casino Games" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"/>
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-6 text-center gap-3">
              <span className="text-4xl">🎰</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white">Live Casino Games</h3>
              <p className="text-gray-300 font-semibold text-sm md:text-base">Play Teen Patti, Andar Bahar, Roulette with real dealers.</p>
            </div>
          </a>
        </div>
      </section>

      {/* 4. Games Section */}
      <section className="w-full py-10 bg-[#0c1322]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "IPL Betting", icon: "🏏", color: "from-blue-600 to-blue-900" },
              { title: "Football Betting", icon: "⚽", color: "from-green-600 to-green-900" },
              { title: "Teen Patti", icon: "🃏", color: "from-purple-600 to-purple-900" },
              { title: "Andar Bahar", icon: "🎲", color: "from-red-600 to-red-900" },
            ].map((game, i) => (
              <a href={CONFIG.whatsappUrl} key={i} className={`bg-gradient-to-br ${game.color} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center border border-white/20 hover:scale-105 transition-transform shadow-xl`}>
                <span className="text-4xl md:text-5xl drop-shadow-md">{game.icon}</span>
                <span className="font-extrabold text-sm md:text-base uppercase tracking-wide">{game.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEO Content Section Banner */}
      <section className="w-full py-16 px-4 max-w-5xl mx-auto text-center flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-black uppercase text-[#00ccff] border-b border-white/10 pb-4">
          Reddy Anna Book – Official Reddy Anna Cricket Betting ID Platform
        </h2>
        <h3 className="text-lg md:text-xl font-bold text-yellow-400">No.1 Secured Online Betting ID Provider</h3>
        <div className="text-gray-300 text-sm md:text-base leading-relaxed font-medium space-y-4">
          <p>
            Reddy Anna is one of the top secured online betting platform as well as a trusted betting ID provider Since 2010. We are a reliable Reddy Anna agent offering verified Reddy Anna cricket ID's & Casino ID's that allow access to multiple online betting exchanges to play live cricket betting, fantasy sports, IPL betting, casino games, and high-stakes wagering options.
          </p>
          <p>
            ReddyAnna trusted betting platform is premier online betting exchange for high-stake bettors, and international cricket enthusiasts for safe online betting. As an existing player you can directly fast log in Reddy Anna platform and start online betting.
          </p>
          <p className="font-bold text-white">Get personalized 24/7 customer support through WhatsApp and Telegram for quick and responsive assistance.</p>
        </div>

        {/* WhatsApp Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#0c1322] via-[#1a2233] to-[#0c1322] border border-[#00ccff]/20 rounded-3xl p-6 md:p-10 flex flex-col items-center gap-6 shadow-[0_0_30px_rgba(0,204,255,0.1)]">
          <div className="bg-[#25D366] rounded-full p-4 animate-whatsapp-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-black uppercase text-white">Chat with us on <span className="text-[#25D366]">WhatsApp</span></h3>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <a href={CONFIG.whatsappUrl} className="bg-gradient-to-b from-[#488cfb] to-[#0055ff] text-white py-3 px-4 rounded-xl font-extrabold uppercase text-xs md:text-sm text-center shadow-lg hover:scale-105 transition-transform">
              Get Reddy Anna ID
            </a>
            <a href={CONFIG.whatsappUrl} className="bg-gradient-to-b from-gray-700 to-gray-900 text-white py-3 px-4 rounded-xl font-extrabold uppercase text-xs md:text-sm text-center shadow-lg hover:scale-105 transition-transform border border-gray-600">
              Mobile App Download
            </a>
            <a href={CONFIG.whatsappUrl} className="bg-gradient-to-b from-[#488cfb] to-[#0055ff] text-white py-3 px-4 rounded-xl font-extrabold uppercase text-xs md:text-sm text-center shadow-lg hover:scale-105 transition-transform">
              Get Instant ID By WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 6. Live Matches & Popular Games */}
      <section className="w-full py-12 bg-[#0c1322]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
          <div className="w-full md:w-3/4 mx-auto">
             <MatchList
               category="cricket"
               iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/cricketicon.webp"
               title="Live Cricket Matches"
             />
          </div>

          <div className="w-full mx-auto bg-gradient-to-r from-[#1a2233] to-[#05080f] border border-[#00ccff]/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="w-full md:w-1/3 aspect-square max-w-[200px] border-4 border-[#ffcc00] rounded-3xl p-4 flex flex-col items-center justify-center text-center">
               <span className="font-black text-xl text-white">BETTING<br/>ID</span>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-black text-[#ffcc00] uppercase tracking-wide">Online Betting ID</h3>
              <p className="text-gray-300 font-semibold text-sm">
                Reddy Anna Book gives you a secure Online Betting ID that lets you play smoothly across multiple gaming platforms. Once your account is created, you can jump into cricket, football, kabaddi and many more sports.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="bg-black/40 border border-white/10 rounded-xl p-3 text-xs font-bold text-gray-200 flex items-center gap-2"><span className="text-yellow-500">🔒</span> Secure Transactions</div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-3 text-xs font-bold text-gray-200 flex items-center gap-2"><span className="text-blue-500">🌍</span> Multiple-Sports Betting</div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-3 text-xs font-bold text-gray-200 flex items-center gap-2"><span className="text-red-500">🏏</span> Cricket, Football & Kabaddi</div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-3 text-xs font-bold text-gray-200 flex items-center gap-2"><span className="text-green-500">✅</span> Protected Account</div>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-center">
              <a href={CONFIG.whatsappUrl} className="bg-gradient-to-r from-[#ff6a00] to-[#ee0979] text-white font-extrabold uppercase py-4 px-8 rounded-full shadow-[0_0_20px_rgba(238,9,121,0.4)] hover:scale-105 transition-transform text-center w-full">
                GET BETTING ID
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Deposit & Withdrawal */}
      <section className="w-full py-16 px-4 max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-wide">Deposit & Withdrawal</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {[
            { 
              name: "UPI", 
              content: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-10 md:h-12 object-contain" /> 
            },
            { 
              name: "Google Pay", 
              content: <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-10 md:h-12 object-contain" /> 
            },
            { 
              name: "Paytm", 
              content: <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-8 md:h-10 object-contain" /> 
            },
            { 
              name: "PhonePe", 
              content: <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-10 md:h-12 object-contain" /> 
            },
            { 
              name: "Bank Transfer", 
              content: (
                <div className="flex flex-col items-center gap-1 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/>
                  </svg>
                  <span className="font-extrabold text-sm text-center">Bank<br/>Transfer</span>
                </div>
              )
            }
          ].map((method, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-gray-200 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer hover:shadow-2xl">
               {method.content}
            </div>
          ))}
        </div>
        
        <p className="text-lg md:text-xl font-bold text-[#00ccff]">
          Instant Deposit, Fast Withdrawal, Safe Transactions, 24x7 Assistance
        </p>
      </section>

      {/* 8. Statistics */}
      <section className="w-full py-12 bg-[#0c1322]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-10">Why Thousands Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { val: "15+", label: "Years Experience", icon: "🎖️" },
              { val: "5000+", label: "Daily Users", icon: "👥" },
              { val: "24x7", label: "Support", icon: "🎧" },
              { val: "Fast", label: "Withdrawals", icon: "⚡" },
              { val: "99%", label: "Success Rate", icon: "⭐" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#1a2233] border border-[#00ccff]/20 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:-translate-y-2 transition-transform">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-2xl md:text-3xl font-black text-white">{stat.val}</span>
                <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. How to section */}
      <section className="w-full py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-center text-white tracking-wide mb-6">How to Create Your Reddy Anna Account</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Creating your Reddy Anna ID is a simple process designed to get you started quickly. Follow these easy steps:
        </p>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <div className="bg-[#0c1322] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-[#1a2233] transition-all">
             <div className="min-w-16 h-16 bg-[#0055ff] rounded-full flex items-center justify-center text-2xl shadow-lg shadow-blue-500/30 shrink-0">
               🎧
             </div>
             <div>
               <h3 className="font-black text-xl text-white mb-2">Step 1: Connect with Our Support Team</h3>
               <p className="text-gray-400 text-sm md:text-base">
                 Click the "Get Reddy Anna ID" button or send a message through our official WhatsApp or Telegram channel to begin the registration process.
               </p>
             </div>
          </div>
          <div className="bg-[#0c1322] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-[#1a2233] transition-all">
             <div className="min-w-16 h-16 bg-[#00ccff] text-black rounded-full flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/30 shrink-0">
               📝
             </div>
             <div>
               <h3 className="font-black text-xl text-white mb-2">Step 2: Provide Your Details</h3>
               <p className="text-gray-400 text-sm md:text-base mb-2">Share a few basic details, such as:</p>
               <ul className="list-disc list-inside text-gray-400 text-sm md:text-base mb-2 space-y-1">
                 <li>Your name or preferred username</li>
                 <li>Your preferred platform (if applicable)</li>
                 <li>Mobile number (when required)</li>
               </ul>
               <p className="text-gray-400 text-sm md:text-base">
                 The process is straightforward, with no lengthy paperwork or complicated registration forms.
               </p>
             </div>
          </div>
          <div className="bg-[#0c1322] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-[#1a2233] transition-all">
             <div className="min-w-16 h-16 bg-[#ffcc00] text-black rounded-full flex items-center justify-center text-2xl shadow-lg shadow-yellow-500/30 shrink-0">
               ⚙️
             </div>
             <div>
               <h3 className="font-black text-xl text-white mb-2">Step 3: Account Setup</h3>
               <p className="text-gray-400 text-sm md:text-base">
                 Once your details are confirmed, our support team will create your Reddy Anna ID and prepare your account for access.
               </p>
             </div>
          </div>
          <div className="bg-[#0c1322] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-[#1a2233] transition-all">
             <div className="min-w-16 h-16 bg-[#25D366] text-black rounded-full flex items-center justify-center text-2xl shadow-lg shadow-green-500/30 shrink-0">
               ✅
             </div>
             <div>
               <h3 className="font-black text-xl text-white mb-2">Step 4: Receive Your Login Information</h3>
               <p className="text-gray-400 text-sm md:text-base mb-2">
                 Your login credentials, including your Reddy Anna ID and password, will be shared securely through WhatsApp or Telegram, allowing you to access your account immediately.
               </p>
               <p className="text-gray-400 text-sm md:text-base">
                 If you're new to the platform, you can also request a <strong className="text-white">Reddy Anna Demo ID</strong> to explore the features and familiarise yourself with the platform before using your main account.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* 10. Customer Reviews */}
      <section className="w-full py-12 bg-[#0c1322]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black uppercase text-center text-white mb-10">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(CONFIG.reviews || []).slice(0,3).map((review: any, i: number) => (
              <div key={i} className="bg-[#1a2233] border border-[#00ccff]/10 rounded-3xl p-8 flex flex-col gap-4 shadow-xl">
                <div className="flex gap-1 text-yellow-400 text-lg">
                  ★★★★★
                </div>
                <p className="text-gray-300 font-semibold italic text-sm leading-relaxed">"{review.text}"</p>
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col">
                  <span className="font-bold text-white text-sm">{review.name}</span>
                  <span className="text-xs text-gray-500">Verified User</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10.5 About Reddy Anna */}
      <section className="w-full py-16 px-4 max-w-5xl mx-auto text-gray-300">
        <div className="bg-[#0c1322] border border-[#00ccff]/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-black uppercase text-[#00ccff] mb-2">What is Reddy Anna?</h2>
          <h3 className="text-xl font-bold text-white mb-6">A Popular Online Sports Platform in India</h3>
          
          <div className="space-y-4 text-sm md:text-base leading-relaxed mb-10">
            <p>
              Reddy Anna is an online platform that provides users with access to sports-related services through dedicated account IDs. Since its launch, the platform has focused on delivering a fast, reliable, and user-friendly experience for people interested in following live sporting events. Users can obtain a Reddy Anna ID through the official support channels and access a range of platform features designed for convenience and ease of use.
            </p>
            <p>
              The platform offers different types of account IDs, including Reddy Anna ID, Demo ID, Cricket ID, IPL ID, Sports Exchange ID, and Casino ID, helping users choose the option that best suits their requirements. With a simple registration process, responsive customer support, and quick account activation, Reddy Anna aims to make onboarding straightforward for both new and returning users.
            </p>
            <p>
              Users can access live sports updates, multiple event categories, and a streamlined interface across desktop and mobile devices. The platform is designed with an emphasis on performance, accessibility, and customer assistance to provide a smooth overall experience.
            </p>
          </div>

          <h2 className="text-2xl font-black uppercase text-white mb-6">Is Reddy Anna Safe?</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Reddy Anna states that it prioritises user privacy and account security by implementing modern security practices and secure account management. Users should always register through the official communication channels to help protect their account information and avoid unauthorised sources.
            </p>
            <p>
              Before creating an account or using any online platform, users should independently verify its licensing, legal status, and terms of service in their jurisdiction, as regulations may vary by location.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="w-full py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black uppercase text-center text-white mb-10 tracking-wide">Frequently Asked Questions</h2>
        <div className="bg-[#0c1322] rounded-3xl p-6 md:p-10 border border-[#00ccff]/20 shadow-2xl">
          <Accordion items={CONFIG.faqs} />
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="w-full py-20 bg-gradient-to-b from-[#05080f] to-[#0c1322]">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#00E5FF] tracking-widest drop-shadow-lg">
            READY TO GET STARTED?
          </h2>
          <div className="text-gray-300 font-bold text-lg md:text-xl space-y-2">
            <p>Visit reddypurplebook.in | Click WhatsApp button | Get your ID in 60 seconds.</p>
            <p>New users can request a free trial Demo ID instantly.</p>
            <p className="text-white">Winnings are processed within 2-4 hours guaranteed!</p>
          </div>
          
          <div className="mt-6">
            <div className="border border-white/20 rounded-full p-1 inline-flex">
              <a href={CONFIG.whatsappUrl} className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-full font-extrabold uppercase text-sm md:text-base tracking-wide border border-white/10 shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-105">
                 Get Your Verified ID Now
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8 w-full justify-center max-w-xl">
             <a href={CONFIG.whatsappUrl} className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-extrabold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-900/50">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/></svg>
               WhatsApp
             </a>
             <a href={CONFIG.whatsappUrl} className="flex-1 bg-gradient-to-r from-[#00ccff] to-[#0055ff] text-white py-4 rounded-xl font-extrabold uppercase tracking-wide flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg shadow-blue-900/50">
               Register Now
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
