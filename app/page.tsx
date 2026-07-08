import React from "react";
import { CONFIG } from "@/utils/config";
import { Sidebar } from "@/components/Sidebar";
import { MatchList } from "@/components/MatchList";
import { ConicButton } from "@/components/ConicButton";
import { Accordion } from "@/components/Accordion";

export default function HomePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar - Desktop only */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content Pane */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          {/* Match Lists Section */}
          <MatchList
            category="cricket"
            iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/cricketicon.webp"
            title="Cricket Matches"
          />
          <MatchList
            category="football"
            iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/footballicon.webp"
            title="Football Matches"
          />
          <MatchList
            category="tennis"
            iconUrl="https://reddybookwinin.in/wp-content/uploads/2026/04/tennisicon.webp"
            title="Tennis Matches"
          />

          {/* Casino Section */}
          <div className="w-full flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3 bg-[#0c1322] border border-[#9C27B0]/10 rounded-sm p-4 shadow-sm">
              <span className="text-lg">🎲</span>
              <h3 className="text-white font-extrabold text-lg md:text-xl tracking-wide">Casino Games</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CONFIG.casinos.map((casino, idx) => (
                <a
                  key={idx}
                  href={CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-sm aspect-[2.2/1.3] border border-[#9C27B0]/10 hover:border-[#9C27B0]/30 shadow-md group"
                >
                  <img
                    src={casino.image}
                    alt={casino.label}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all flex items-end p-3">
                    <span className="text-white font-bold text-xs bg-black/60 px-2.5 py-1 rounded-md">
                      {casino.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Core Introduction Details */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 mt-6 flex flex-col md:flex-row gap-6 items-center shadow-lg shadow-black">
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-[#FF4081] font-black text-2xl md:text-3xl tracking-wide leading-tight">
                Reddy Anna Cricket Betting, Sports Exchange, Live Casino
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Reddy Anna is the best source for cricket betting, sports betting, and live casino betting in India since 2010. You can begin your journey with the Reddyanna id creation to place your first-ever IPL bet or become the fastest-ever bettor to request and receive withdrawal.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Millions of cricket betting fans choose Reddy Anna Book because it fulfills all the requirements, such as instant ID creation, UPI deposit and withdrawal, live odds for cricket and football matches, and 24/7 customer support.
              </p>
              <div className="pt-2">
                <ConicButton text="Join Reddy Anna Book" />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex-shrink-0 rounded-sm overflow-hidden shadow-md">
              <img
                src={CONFIG.images.brandIntroBg}
                alt="Reddy Anna Book Provider"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Quick Statistics Table */}
          <section className="w-full bg-gradient-to-br from-[#fff0f5] to-white border border-[#9C27B0]/20 rounded-md p-6 shadow-xl text-black">
            <h3 className="text-lg font-black tracking-wide border-b border-[#9C27B0]/10 pb-2 mb-4 text-[#9C27B0] uppercase">
              🏆 Trust Statistics & Info:
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-bold border-separate border-spacing-y-3">
                <thead>
                  <tr className="bg-[#FF4081] text-black text-xs md:text-sm">
                    <th className="p-3.5 rounded-l-xl">Trusted Since</th>
                    <th className="p-3.5">Sports Covered</th>
                    <th className="p-3.5 rounded-r-xl">Support Available</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-[#ffe6f2] border border-[#9C27B0]/10">
                    <td className="p-4 rounded-l-xl border-l-4 border-[#9C27B0]">2010 (14+ Years)</td>
                    <td className="p-4">Cricket, Football, Kabaddi + More</td>
                    <td className="p-4 rounded-r-xl">24/7 WhatsApp & Telegram</td>
                  </tr>
                  <tr className="bg-[#fff0f5] text-xs uppercase tracking-wider text-gray-500 font-extrabold">
                    <td className="p-2 pl-4">ID Delivery Time</td>
                    <td className="p-2">Payment Methods</td>
                    <td className="p-2">Min. Deposit</td>
                  </tr>
                  <tr className="bg-[#ffe6f2] border border-[#9C27B0]/10">
                    <td className="p-4 rounded-l-xl border-l-4 border-[#9C27B0]">Under 60 Seconds</td>
                    <td className="p-4">UPI Deposit & Withdrawal</td>
                    <td className="p-4 rounded-r-xl">
                      From <span className="text-[#9C27B0]">₹100</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Iframe Widget Section */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-4 md:p-6 shadow-md">
            <h2 className="text-white font-extrabold text-xl mb-4 tracking-wide border-b border-[#9C27B0]/10 pb-2.5">
              Live & Upcoming Matches
            </h2>
            <div className="w-full overflow-hidden rounded-sm border border-[#9C27B0]/5">
              <iframe
                src="https://cwidget.crictimes.org/?v=1.1&bo=06bffa&b=ffffff&a=06bffa"
                style={{ width: "100%", minHeight: "450px" }}
                frameBorder="0"
                scrolling="yes"
                title="Crictimes Live Match Widget"
              />
            </div>
          </section>

          {/* What Is Reddy Anna */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-md shadow-black">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide">
                What is Reddy Anna?
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Reddy Anna is India’s leading online cricket betting ID and sports exchange company. It is considered one of the fastest online betting platforms, offering live betting on cricket matches in India since 2010. Millions of people from different states have used this website for its quality service and reliable results.
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4081]">✓</span> <strong>Live cricket betting:</strong> T20, World Cup, IPL, Test Matches, BBL, PSL, etc.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4081]">✓</span> <strong>Live football betting:</strong> La Liga, UCL, EPL, etc.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4081]">✓</span> <strong>Live Kabaddi betting:</strong> Pro Kabaddi Season 11 and more.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4081]">✓</span> <strong>Live casino:</strong> Teen Patti, Andar Bahar, Roulette, Poker, and others.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4081]">✓</span> <strong>UPI deposit & withdrawal:</strong> UPI, Paytm, GPay, Bank transfer, etc.
                </li>
              </ul>
              <div className="pt-2">
                <ConicButton text="Learn More About Us" href="/about-us" />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex-shrink-0 rounded-sm overflow-hidden shadow-md">
              <img
                src={CONFIG.images.whatIsReddyAnnaBg}
                alt="Introduction to Reddy Anna Book"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Why Choose Reddy Anna */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-6 shadow-md shadow-black">
            <h2 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide border-b border-[#9C27B0]/10 pb-2">
              Why Bet at Reddy Anna?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "1. Trust and Reliable",
                  desc: "Reddy Anna has served millions of cricket betting enthusiasts since 2010. You can trust us for instant payouts and no ID alteration issues after withdrawals."
                },
                {
                  title: "2. Easy Sign-Up",
                  desc: "Sign up for a Reddy Anna Id creation process takes under 60 seconds. WhatsApp and Telegram links open the fastest way to contact the agent for your id creation and deposit inquiries."
                },
                {
                  title: "3. Best Odds",
                  desc: "Reddy Anna offers one of the best odds on IPL matches in India. You will find various betting odds on T20 and Test matches such as ball-by-ball odds, match winner odds, and much more."
                },
                {
                  title: "4. 24/7 Support",
                  desc: "Anytime help from the customer support team is available. You need to ask for a query via WhatsApp, and you will receive a reply from the Reddy Anna agent in under 2 mins."
                }
              ].map((reason, idx) => (
                <div key={idx} className="bg-[#05080f] p-5 rounded-sm border border-[#9C27B0]/5 hover:border-[#9C27B0]/15 transition-all">
                  <h4 className="text-white font-extrabold text-base mb-2">{reason.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>

            {/* Payment Ecosystem Table */}
            <div className="mt-4 bg-[#05080f] border border-[#9C27B0]/5 rounded-sm p-5">
              <h4 className="text-white font-black text-sm mb-3 uppercase tracking-wider text-[#FF4081]">
                💳 UPI Payment Options
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-bold border-separate border-spacing-y-2 text-xs md:text-sm">
                  <thead>
                    <tr className="text-gray-400">
                      <th className="pb-2">Payment Method</th>
                      <th className="pb-2">Processing Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-200">
                    <tr className="bg-[#0c1322]/80 border-b border-[#9C27B0]/5">
                      <td className="p-3 rounded-l-xl">UPI (PhonePe, GPay, BHIM)</td>
                      <td className="p-3 rounded-r-xl text-green-400">Instant deposit</td>
                    </tr>
                    <tr className="bg-[#0c1322]/80">
                      <td className="p-3 rounded-l-xl">Paytm wallet</td>
                      <td className="p-3 rounded-r-xl text-green-400">Instant deposit</td>
                    </tr>
                    <tr className="bg-[#0c1322]/80">
                      <td className="p-3 rounded-l-xl">Net Banking</td>
                      <td className="p-3 rounded-r-xl text-green-400">Instant deposit</td>
                    </tr>
                    <tr className="bg-[#0c1322]/80">
                      <td className="p-3 rounded-l-xl">Bank account withdrawal</td>
                      <td className="p-3 rounded-r-xl text-yellow-400">Complete withdrawal within 2-4 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 shadow-md">
            <h2 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide mb-2 text-center md:text-left">
              How To Get Reddy Anna Cricket Betting ID
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 text-center md:text-left font-semibold">
              The process of Reddy Anna cricket betting ID creation is straightforward. First, you have to visit reddygreenbook.in and then click on WhatsApp to chat with the agent. Second, you need to provide your preferred username and secure password. Finally, your Reddy Anna Id will be created in under 60 seconds. You can deposit money on your Reddy Anna id via UPI, GPay, or Paytm.
            </p>
            
            <div className="mt-6 bg-[#05080f] border-l-4 border-[#FF4081] p-4 rounded-r-2xl text-xs md:text-sm text-gray-300 font-semibold leading-relaxed">
              <strong>PRO TIP:</strong> If you are new to online cricket betting, you must ask the WhatsApp agent for a free demo ID to start betting and learn how online betting works.
            </div>
          </section>

          {/* Bonuses & Promotions */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 shadow-md">
            <h3 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide mb-6">
              Reddy Anna Bonus Promotion & Offers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Welcome bonus",
                  desc: "Get bonus points for first-time depositors.",
                  img: CONFIG.images.bonuses.welcome
                },
                {
                  title: "Daily login bonus",
                  desc: "You will get a bonus for logging in on festive days and match days.",
                  img: CONFIG.images.bonuses.daily
                },
                {
                  title: "Referral bonus",
                  desc: "Earn extra cash reward on each of your referred friend’s first-time deposit.",
                  img: CONFIG.images.bonuses.referral
                },
                {
                  title: "Seasonal cashback bonus",
                  desc: "During the festive season, you can get bonus points on each of your deposits.",
                  img: CONFIG.images.bonuses.seasonal
                }
              ].map((bonus, idx) => (
                <div
                  key={idx}
                  className="bg-[#05080f] border border-[#9C27B0]/5 hover:border-[#9C27B0]/15 p-5 rounded-sm flex flex-col gap-3 items-center text-center transition-all shadow-md"
                >
                  <img src={bonus.img} alt={bonus.title} className="h-20 w-20 object-contain" />
                  <h4 className="text-white font-extrabold text-sm tracking-wide">{bonus.title}</h4>
                  <p className="text-gray-400 text-xs leading-normal">{bonus.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-2 text-center md:text-left">
              <ConicButton text="Get Reddy Anna Bonus" />
            </div>
          </section>

          {/* App download section */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h3 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide">
              Reddy Anna App: Bet Faster than Ever Before
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              Reddy Anna mobile betting application is one of the best online betting apps in India. The mobile app offers an enhanced version of all website features, including depositing money via a mobile wallet, live ball-by-ball updates, biometric security, and other exciting features. Download the Reddy Anna app to experience the fastest online betting method on the planet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="bg-[#05080f] p-5 rounded-sm border border-[#9C27B0]/5">
                <h4 className="text-white font-extrabold text-sm mb-3 uppercase tracking-wider text-[#FF4081]">
                  ⚡ Features of Reddy Anna App:
                </h4>
                <ul className="text-gray-300 text-xs md:text-sm flex flex-col gap-2 font-semibold">
                  <li>• Instant deposit and withdrawal directly to your mobile wallet.</li>
                  <li>• Watch live ball-by-ball updates and scores.</li>
                  <li>• Biometric lock for advanced account security.</li>
                  <li>• Faster performance on 3G or 4G networks.</li>
                </ul>
              </div>
              <div className="bg-[#05080f] p-5 rounded-sm border border-[#9C27B0]/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-extrabold text-sm mb-2 uppercase tracking-wider text-[#FF4081]">
                    📥 How To Download Reddy Anna App:
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-semibold">
                    <strong>Android users:</strong> Download reddyanna APK file directly from reddygreenbook.in<br/><br/>
                    <strong>iOS users:</strong> Add web-app to the home screen.
                  </p>
                </div>
                <div className="pt-4 text-left">
                  <a
                    href={CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4081] to-[#9C27B0] text-black font-extrabold text-xs py-2 px-6 rounded-sm hover:shadow-lg transition-all"
                  >
                    Download Official App
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Exchange Section */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-md">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide">
                Reddy Anna Trading Exchange
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Reddy Anna exchange offers advanced betting experience for cricket lovers. This unique platform allows you to buy and sell odds on a match based on your predictions. There are two types of Reddy Anna exchange: Tiger and Sky. Reddy Anna Tiger is perfect for ball-by-ball trading, whereas the Reddy Anna Sky is best known for its stability.
              </p>
              <div className="pt-2">
                <ConicButton text="Join Reddy Anna Exchange" />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex-shrink-0 rounded-sm overflow-hidden shadow-md">
              <img
                src={CONFIG.images.exchangeBg}
                alt="Reddy Anna Trading Exchange"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Detailed Platform Comparison */}
          <section className="w-full bg-gradient-to-br from-[#fff0f5] to-white border border-[#9C27B0]/20 rounded-md p-6 shadow-xl text-black">
            <h3 className="text-lg font-black tracking-wide border-b border-[#9C27B0]/10 pb-2 mb-4 text-[#9C27B0] uppercase">
              ⚖️ Reddy Anna Tiger vs. Sky Exchange
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-bold border-separate border-spacing-y-2.5 text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#fff4c1] text-black">
                    <th className="p-3 rounded-l-xl">Feature</th>
                    <th className="p-3 bg-[#FF4081] text-black border-x border-[#9C27B0]/10">Tiger Exchange</th>
                    <th className="p-3 rounded-r-xl">Sky Exchange</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#ffe6f2] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#9C27B0]">Best for</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#9C27B0]/15 font-black text-[#9C27B0]">Ball-by-ball trading</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Stable markets</td>
                  </tr>
                  <tr className="bg-[#ffe6f2] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#9C27B0]">Years of operation</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#9C27B0]/15 font-black text-[#9C27B0]">14+ Years (Since 2010)</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">14+ Years (Since 2010)</td>
                  </tr>
                  <tr className="bg-[#ffe6f2] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#9C27B0]">ID creation</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#9C27B0]/15 font-black text-[#9C27B0]">Under 60 seconds</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Under 60 seconds</td>
                  </tr>
                  <tr className="bg-[#ffe6f2] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#9C27B0]">Withdrawal Speed</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#9C27B0]/15 font-black text-[#9C27B0]">Within 2-4 Hours</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Within 2-4 Hours</td>
                  </tr>
                  <tr className="bg-[#ffe6f2] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#9C27B0]">Support channels</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#9C27B0]/15 font-black text-[#9C27B0]">24/7 WhatsApp Support</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">24/7 WhatsApp Support</td>
                  </tr>
                  <tr className="bg-[#ffe6f2] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#9C27B0]">Free Demo ID</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#9C27B0]/15 font-black text-[#9C27B0]">Available</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Deposit and Withdrawal */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 shadow-md">
            <h3 className="text-[#FF4081] font-black text-xl md:text-2xl tracking-wide mb-6">
              How To Deposit and Withdraw at Reddy Anna?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#05080f] p-5 rounded-sm border border-[#9C27B0]/5">
                <h4 className="text-white font-extrabold text-sm mb-3 uppercase tracking-wider text-[#FF4081]">
                  📥 Making a Deposit:
                </h4>
                <ul className="text-gray-300 text-xs md:text-sm flex flex-col gap-2 font-semibold leading-relaxed">
                  <li>• Go to the Wallet or Deposit tab</li>
                  <li>• Choose your preferred payment method</li>
                  <li>• Enter the deposit amount (minimum ₹100).</li>
                  <li>• Make a deposit. Money will be transferred to your account instantly.</li>
                </ul>
              </div>
              <div className="bg-[#05080f] p-5 rounded-sm border border-[#9C27B0]/5">
                <h4 className="text-white font-extrabold text-sm mb-3 uppercase tracking-wider text-[#FF4081]">
                  📤 Withdrawing Funds:
                </h4>
                <ul className="text-gray-300 text-xs md:text-sm flex flex-col gap-2 font-semibold leading-relaxed">
                  <li>• Go to the Withdraw tab</li>
                  <li>• Enter the amount you wish to withdraw.</li>
                  <li>• Choose the withdrawal method (bank account or UPI).</li>
                  <li>• Confirm your withdrawal request. You can expect funds in your account within 2-4 hours.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Collapsible FAQ Section */}
          <section className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-8 shadow-md">
            <h3 className="text-white font-extrabold text-xl md:text-2xl mb-6 tracking-wide border-b border-[#9C27B0]/10 pb-3 flex items-center gap-2">
              <span className="text-[#FF4081]">❓</span> Frequently Asked Questions
            </h3>
            <Accordion items={CONFIG.faqs} />
          </section>

          {/* Start Journey Callout */}
          <section className="w-full bg-gradient-to-r from-[#0c1322] to-[#121c33] border border-[#9C27B0]/15 rounded-md p-6 md:p-8 text-center flex flex-col items-center gap-4 shadow-lg shadow-black">
            <h3 className="text-[#FF4081] font-black text-xl md:text-2xl uppercase tracking-wider">
              Start Depositing and Withdrawing Funds Right Away
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              <strong>Get a Free Trial Demo ID on WhatsApp</strong><br/><br/>
              Get your Reddy Anna Id in 60 seconds | New users get a free Demo ID to practice. All withdrawals are processed within 2-4 hours guaranteed. Are you ready to start betting? Then contact us via WhatsApp button on reddygreenbook.in
            </p>
            <div className="pt-2">
              <ConicButton text="Contact Us via WhatsApp" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
