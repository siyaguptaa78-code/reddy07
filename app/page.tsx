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
          
          {/* Quick Banners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "E - Cricket",
                bg: CONFIG.images.eCricketQuickBg,
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 16" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.187 9.885l-.024.024.81.826.024-.024a3.8 3.8 0 002-1.3l.143-.073a.85.85 0 00.2-.132l-.253 1.143c-.156-.03-.31-.082-.458-.157l-.143-.073a.85.85 0 00-.681.18l-1.394 1.421a.45.45 0 00-.112.17c-.193.59-.343 1.24-.774 1.68l-.358.364c-.671.684-1.76.684-2.431 0L.504 11.355c-.671-.685-.671-1.795 0-2.48l.357-.364c.432-.44 1.07-.593 1.648-.396.166.056.35.012.474-.115l1.394-1.421c.174-.178.218-.45.107-.674l-.071-.146a3.8 3.8 0 00-.524-2.146l5.089-5.188c1.342-1.369 3.52-1.369 4.862 0 1.343 1.369 1.343 3.589 0 4.958L11.401 9.333H9.78l4.095-4.175c.895-.913.895-2.393 0-3.305-.895-.913-2.346-.913-3.242 0L5.545 7.041c-.174.178-.218.45-.107.674l.071.146a3.8 3.8 0 00-.322 2.124z" />
                  </svg>
                )
              },
              {
                title: "Evolution",
                bg: CONFIG.images.evolutionQuickBg,
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M12.119 13.889h-.178v-.268h.067c.067 0 .111 0 .178.022.045.023.067.067.067.112.022.067-.045.134-.134.134zm.312-.156c0-.089-.045-.156-.112-.223a.35.35 0 00-.267-.067h-.29v.892h.179v-.335h.156l.178.335h.201l-.201-.357a.38.38 0 00.156-.245zM12.097 14.625c-.38 0-.692-.312-.692-.692 0-.379.312-.691.692-.691.38 0 .692.312.692.691 0 .38-.312.692-.692.692zM12.097 13.086c-.468 0-.87.379-.87.87 0 .49.379.87.87.87.468 0 .87-.379.87-.87 0-.49-.402-.87-.87-.87zM3.022 1.826C7.147-.38 12.454 1.938 12.855 7.534 5.207 8.159 4.293 4.703 3.022 1.826zm0 12.018c4.125 2.207 9.432-.112 9.833-5.708-7.648-.624-8.562 2.832-9.833 5.708z" />
                  </svg>
                )
              },
              {
                title: "Aviator",
                bg: CONFIG.images.aviatorQuickBg,
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M10.22 25.208c-1.63-1.359-1.495-3.905.271-5.083l12.092-7.373 7.962-.295 9.233-5.54C46.133 3.106 53.757 2.02 60.923 3.905c2.053 6.345 1.142 13.277-2.481 18.876l-7.251 11.206-.59 8.258-8.257 12.092c-.93.743-2.153 1.01-3.307.721l-.189-.047c-.221-.055-.424-.17-.585-.332l-.343-.343-5.309-8.552-6.488.885-5.014-5.014-4.423-4.718 1.18-6.783-7.373-4.719-.271-.226zm42.74-5.967c0 4.235-3.433 7.668-7.668 7.668-4.235 0-7.668-3.433-7.668-7.668 0-4.235 3.433-7.668 7.668-7.668 4.235 0 7.668 3.433 7.668 7.668z" />
                  </svg>
                )
              },
              {
                title: "Sportsbook",
                bg: CONFIG.images.sportsbookQuickBg,
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M12.925 2.575H11.2V2H4.3v.575H2.575C2.23 2.575 2 2.805 2 3.15v1.38c0 1.3225.9775 2.415 2.3 2.5875V7.175c0 1.6675 1.15 3.0475 2.7025 3.3925L6.6 11.775H5.2775c-.23 0-.46.1725-.5175.4025L4.3 13.5H11.2l-.46-1.3225c-.0575-.23-.2875-.4025-.5175-.4025H8.9l-.4025-1.2075C10.05 10.2225 11.2 8.8425 11.2 7.175V7.1175c1.3225-.1725 2.3-1.265 2.3-2.5875V3.15c0-.345-.23-.575-.575-.575zM4.3 5.9675C3.6675 5.795 3.15 5.22 3.15 4.53v-.805H4.3v2.2425zm4.6 1.7825L7.75 7.1175 6.6 7.75l.2875-1.15-.8625-1.15H7.2325L7.75 4.3l.5175 1.15h1.2075l-.8625 1.15.2875 1.15zm3.45-3.22v.805c0 .69-.5175 1.265-1.15 1.4375V3.725h1.15z" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <a
                key={idx}
                href={CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-2xl aspect-[5/2.2] border border-[#007BFF]/10 hover:border-[#007BFF]/35 shadow-md shadow-black group"
              >
                <img
                  src={card.bg}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 flex items-center justify-between px-4 py-2">
                  <span className="text-white font-extrabold text-sm md:text-base tracking-wide">
                    {card.title}
                  </span>
                  <span className="text-white bg-[#007BFF]/80 hover:bg-[#007BFF] p-1.5 rounded-lg border border-[#007BFF]/15 shadow-sm group-hover:scale-105 transition-all">
                    {card.svg}
                  </span>
                </div>
              </a>
            ))}
          </div>

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
            <div className="flex items-center gap-3 bg-[#0c1322] border border-[#007BFF]/10 rounded-2xl p-4 shadow-sm">
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
                  className="relative overflow-hidden rounded-2xl aspect-[2.2/1.3] border border-[#007BFF]/10 hover:border-[#007BFF]/30 shadow-md group"
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
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 mt-6 flex flex-col md:flex-row gap-6 items-center shadow-lg shadow-black">
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-[#00E5FF] font-black text-2xl md:text-3xl tracking-wide leading-tight flex flex-col gap-2">
                <span>Reddy Anna – Cricket Betting & Sports ID</span>
                <span className="text-lg md:text-xl text-white">Reddy Anna Cricket Betting ID For IPL & Live Casino Sports Betting</span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Are you a new bettor looking to make your first ever cricket betting or have a long history of high stakes betting but want to experience the fastest payout processing in the world? Well, you begin your sports betting adventure by getting a <a href="/" className="text-[#00ccff] hover:underline font-bold">redyanabook</a> verified sports betting id .
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Millions of cricket fans trust reddyanna book as their #1 choice for live sports betting and online casino gaming needs due to our unmatched instant id creation, secure payment integration, live odds, and 24/7 customer support.
              </p>
              <div className="pt-2">
                <ConicButton text="Join Reddy Anna Book" />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
              <img
                src={CONFIG.images.brandIntroBg}
                alt="Reddy Anna Book Provider"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Quick Statistics Table */}
          <section className="w-full bg-gradient-to-br from-[#f0f8ff] to-white border border-[#007BFF]/20 rounded-3xl p-6 shadow-xl text-black">
            <h3 className="text-lg font-black tracking-wide border-b border-[#007BFF]/10 pb-2 mb-4 text-[#007BFF] uppercase">
              🏆 Trust Statistics
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-bold border-separate border-spacing-y-3">
                <thead>
                  <tr className="bg-[#00E5FF] text-black text-xs md:text-sm">
                    <th className="p-3.5 rounded-l-xl">Trusted Since</th>
                    <th className="p-3.5">Sports Betting</th>
                    <th className="p-3.5 rounded-r-xl">Support</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-[#e6f2ff] border border-[#007BFF]/10">
                    <td className="p-4 rounded-l-xl border-l-4 border-[#007BFF]">2010 (14+ Years)</td>
                    <td className="p-4">Cricket, Football, Kabaddi, etc.</td>
                    <td className="p-4 rounded-r-xl">24/7 (WhatsApp & Telegram)</td>
                  </tr>
                  <tr className="bg-[#f0f8ff] text-xs uppercase tracking-wider text-gray-500 font-extrabold">
                    <td className="p-2 pl-4">Time to Create ID</td>
                    <td className="p-2">Payment Gateways</td>
                    <td className="p-2">Minimum Deposit</td>
                  </tr>
                  <tr className="bg-[#e6f2ff] border border-[#007BFF]/10">
                    <td className="p-4 rounded-l-xl border-l-4 border-[#007BFF]">Under 60 seconds</td>
                    <td className="p-4">UPI, Paytm, GPay, Bank</td>
                    <td className="p-4 rounded-r-xl">
                      <span className="text-[#007BFF]">₹100</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Iframe Widget Section */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-4 md:p-6 shadow-md">
            <h2 className="text-white font-extrabold text-xl mb-4 tracking-wide border-b border-[#007BFF]/10 pb-2.5">
              IPL 2026 Match Update - Live & Upcoming
            </h2>
            <div className="w-full overflow-hidden rounded-2xl border border-[#007BFF]/5">
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
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row-reverse gap-6 items-center shadow-md shadow-black">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide">
                What is Reddy Anna? Cricket Betting ID Overview
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Reddy Anna is India’s fastest-growing online cricket betting ID provider that also facilitates football, kabaddi, and live casino betting for sports enthusiasts. This platform has remained reliable since 2010 and is used by millions of sports fans countrywide.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-bold">
                Some of the key features of the popular redyanabook include:
              </p>
              <ul className="text-gray-300 text-sm md:text-base flex flex-col gap-2 font-semibold mt-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5FF]">✓</span> Live cricket betting odds on all major tournaments like IPL, T20 World Cup, Test series, BBL, PSL, etc.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5FF]">✓</span> Football, Kabaddi, Tennis, Basketball, etc.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5FF]">✓</span> Live Casino Games: Teen Patti, Andar Bahar, Roulette, Blackjack, Poker, etc.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5FF]">✓</span> Quick deposit & withdrawal through UPI, Paytm, Bank, and GPay.
                </li>
              </ul>
              <div className="pt-2">
                <ConicButton text="Learn More About Us" href="/about-us" />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
              <img
                src={CONFIG.images.whatIsReddyAnnaBg}
                alt="Introduction to Reddy Anna Book"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Why Choose Reddy Anna */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-md shadow-black">
            <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide border-b border-[#007BFF]/10 pb-2">
              Why Choose Reddy Anna?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "1. Best Cricket ID Provider with 14+ Years of Trust",
                  desc: "Reddy Anna betting has been a reliable source of income for millions of Indians since 2010. We have served over a million customers nationwide and have never failed to pay out any bettor’s winning amount."
                },
                {
                  title: "2. Fastest Cricket Betting ID Creation (< 60 Seconds)",
                  desc: "You can get started with betting within minutes by contacting our official WhatsApp number and sharing your personal details with us."
                },
                {
                  title: "3. Best Odds for Cricket Betting & Casino Games",
                  desc: "We provide some of the best odds in the business, which covers all betting odds for ball by ball, match winner, and other special offers."
                },
                {
                  title: "4. 24/7 WhatsApp Customer Care",
                  desc: "Our customer support executives are available round the clock to assist you with any query related to deposits or withdrawals. You get a response within 2 minutes of sharing your query on WhatsApp."
                }
              ].map((reason, idx) => (
                <div key={idx} className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 hover:border-[#007BFF]/15 transition-all">
                  <h4 className="text-white font-extrabold text-base mb-2">{reason.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>

            {/* Payment Ecosystem Table */}
            <div className="mt-4 bg-[#05080f] border border-[#007BFF]/5 rounded-2xl p-5">
              <h4 className="text-white font-black text-sm mb-3 uppercase tracking-wider text-[#00E5FF]">
                💳 India-First Payment Ecosystem
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
                    <tr className="bg-[#0c1322]/80 border-b border-[#007BFF]/5">
                      <td className="p-3 rounded-l-xl">UPI Integration: PhonePe, GPay, BHIM</td>
                      <td className="p-3 rounded-r-xl text-green-400">Instant deposit</td>
                    </tr>
                    <tr className="bg-[#0c1322]/80">
                      <td className="p-3 rounded-l-xl">Paytm Wallet, Net Banking</td>
                      <td className="p-3 rounded-r-xl text-green-400">Instant deposit</td>
                    </tr>
                    <tr className="bg-[#0c1322]/80">
                      <td className="p-3 rounded-l-xl">Withdraw to any bank</td>
                      <td className="p-3 rounded-r-xl text-yellow-400">Within 2-4 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 shadow-md">
            <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide mb-2 text-center md:text-left">
              How to Create Reddy Anna Cricket Betting ID – Step by Step
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 text-center md:text-left font-semibold">
              To make your first-ever sports betting, you need to generate a cricket betting id . All you have to do is follow these simple steps:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: "1. Go to Website", desc: "Visit reddybluebook.in – Always make sure to generate your cricket betting id from the trusted source only." },
                { title: "2. Contact WhatsApp Number", desc: "By clicking on the WhatsApp icon, you will be redirected to our WhatsApp chat support. Just send us a message, and we will respond within a few seconds." },
                { title: "3. Share Your Details", desc: "Provide us with your desired username and a strong password. Your redyanabook id will be generated within 60 seconds." },
                { title: "4. Deposit Money & Start Betting", desc: "You can use your UPI app to fund your account and begin betting on live sports events and casino games." }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#05080f] border border-[#007BFF]/5 hover:border-[#007BFF]/15 p-4 rounded-2xl flex flex-col gap-3 items-center text-center shadow-md"
                >
                  <img
                    src={CONFIG.images.steps[idx] || CONFIG.images.steps[0]}
                    alt={`Step ${idx + 1}`}
                    className="h-16 w-auto object-contain"
                  />
                  <h4 className="text-white font-extrabold text-sm">{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-normal">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[#05080f] border-l-4 border-[#00E5FF] p-4 rounded-r-2xl text-xs md:text-sm text-gray-300 font-semibold leading-relaxed">
              <strong>PRO TIP:</strong> Do you want to learn how to use a cricket betting id before making a real bet? Simply ask our WhatsApp support to generate a free demo id . This allows you to practice sports betting without risking any real money.
            </div>
          </section>

          {/* Bonuses & Promotions */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide mb-2">
              Reddy Anna Offers & Bonuses
            </h3>
            <p className="text-gray-300 text-sm md:text-base font-semibold mb-6">We offer a wide range of attractive first-time bonuses to all our new users.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Welcome Bonus",
                  desc: "Boost your opening balance with our welcome bonus package for new users.",
                  img: CONFIG.images.bonuses.welcome
                },
                {
                  title: "Daily Login Bonus",
                  desc: "Log in during festive seasons or matchdays and unlock free bets and credits.",
                  img: CONFIG.images.bonuses.daily
                },
                {
                  title: "Referral Bonus",
                  desc: "Invite your friends and earn referral cash rewards on their first deposits.",
                  img: CONFIG.images.bonuses.referral
                },
                {
                  title: "Seasonal Cashback",
                  desc: "Special cashbacks, reload offers, and odds boosts throughout IPL seasons.",
                  img: CONFIG.images.bonuses.seasonal
                }
              ].map((bonus, idx) => (
                <div
                  key={idx}
                  className="bg-[#05080f] border border-[#007BFF]/5 hover:border-[#007BFF]/15 p-5 rounded-2xl flex flex-col gap-3 items-center text-center transition-all shadow-md"
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
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-md">
            <h3 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide">
              Reddy Anna Sports Betting App – Download Now
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-semibold">
              The reddyanna mobile betting app is one of the most reliable and fastest sports betting apps in India right now. Designed for performance, this official app brings you the best of reddybluebook.in experience directly on your mobile device. Some of the amazing features of our mobile app include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5">
                <ul className="text-gray-300 text-xs md:text-sm flex flex-col gap-4 font-semibold">
                  <li>
                    <span className="text-[#00E5FF] font-bold text-sm">⚡ Fast & Reliable</span><br />
                    You can complete deposits, withdrawals, and betting in an instant without lagging.
                  </li>
                  <li>
                    <span className="text-[#00E5FF] font-bold text-sm">🏏 Live Ball-by-ball Scores and Odds</span><br />
                    Get live sports scores and betting odds directly on your smartphone with the reddyanna app.
                  </li>
                  <li>
                    <span className="text-[#00E5FF] font-bold text-sm">🔐 Fingerprint & Face ID Scanner</span><br />
                    Your biometric data is safe with our mobile betting app as it does not store your sensitive information.
                  </li>
                  <li>
                    <span className="text-[#00E5FF] font-bold text-sm">📶 Works on 3G/4G Networks</span><br />
                    You can use our mobile betting app on both 3G and 4G networks without any hassles.
                  </li>
                </ul>
              </div>
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-extrabold text-sm mb-2 uppercase tracking-wider text-[#00E5FF]">
                    How to Download Reddy Anna App
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-semibold">
                    Android users can directly download the apk file, whereas iOS users can add the bookmark to their Safari browser. Always make sure to use the exact URL to avoid phishing attempts.
                  </p>
                </div>
                <div className="pt-4 text-left">
                  <a
                    href={CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00E5FF] to-[#007BFF] text-black font-extrabold text-xs py-2 px-6 rounded-full hover:shadow-lg transition-all"
                  >
                    Download Official App
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Exchange Section */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-md">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide">
                Reddy Anna Exchange – Get Match Odds
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Unlike traditional odds betting, Reddy Anna Exchange allows you to bet on sports events with other users. So, if you are looking for a more interactive betting experience, you should try our Reddy Anna Tiger and Sky Exchange services.
              </p>
              <ul className="text-gray-300 text-xs md:text-sm flex flex-col gap-2 font-semibold mt-2">
                <li>• <strong>Reddy Anna Tiger Exchange</strong></li>
                <li>• <strong>Reddy Anna Sky Exchange</strong></li>
              </ul>
              <div className="pt-2">
                <ConicButton text="Join Reddy Anna Book" />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
              <img
                src={CONFIG.images.exchangeBg}
                alt="Reddy Anna Book Exchange Platforms"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Detailed Platform Comparison */}
          <section className="w-full bg-gradient-to-br from-[#f0f8ff] to-white border border-[#007BFF]/20 rounded-3xl p-6 shadow-xl text-black">
            <h3 className="text-lg font-black tracking-wide border-b border-[#007BFF]/10 pb-2 mb-4 text-[#007BFF] uppercase">
              ⚖️ Comparison Between Reddy Anna & Others
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-bold border-separate border-spacing-y-2.5 text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#fff4c1] text-black">
                    <th className="p-3 rounded-l-xl">Features</th>
                    <th className="p-3 bg-[#00E5FF] text-black border-x border-[#007BFF]/10">Reddy Anna Betting</th>
                    <th className="p-3 rounded-r-xl">Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#e6f2ff] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#007BFF]">Trusted Since</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#007BFF]/15 font-black text-[#007BFF]">14+ Years (2010)</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">2 to 5 Years</td>
                  </tr>
                  <tr className="bg-[#e6f2ff] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#007BFF]">Sports Betting</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#007BFF]/15 font-black text-[#007BFF]">Cricket, Football, Kabaddi, etc.</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Cricket, Football, Kabaddi, etc.</td>
                  </tr>
                  <tr className="bg-[#e6f2ff] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#007BFF]">ID Creation</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#007BFF]/15 font-black text-[#007BFF]">Under 60 Seconds</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Minutes to Hours</td>
                  </tr>
                  <tr className="bg-[#e6f2ff] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#007BFF]">Withdrawal Speed</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#007BFF]/15 font-black text-[#007BFF]">2-4 Hours</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">24 to 72 Hours</td>
                  </tr>
                  <tr className="bg-[#e6f2ff] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#007BFF]">Support</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#007BFF]/15 font-black text-[#007BFF]">24/7 WhatsApp</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Email / Limited Hours</td>
                  </tr>
                  <tr className="bg-[#e6f2ff] hover:scale-[1.002] transition-transform">
                    <td className="p-3.5 rounded-l-xl border-l-4 border-[#007BFF]">Free Demo ID</td>
                    <td className="p-3.5 bg-[#fff7df] border-x border-[#007BFF]/15 font-black text-green-700">Yes</td>
                    <td className="p-3.5 rounded-r-xl text-gray-500">Rarely</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Collapsible FAQ Section */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="text-white font-extrabold text-xl md:text-2xl mb-6 tracking-wide border-b border-[#007BFF]/10 pb-3 flex items-center gap-2">
              <span className="text-[#00E5FF]">❓</span> Frequently Asked Questions
            </h3>
            <Accordion items={CONFIG.faqs} />
          </section>

          {/* Deposit and Withdrawal */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide mb-6">
              How to Deposit & Withdraw on Reddy Anna Website
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5">
                <h4 className="text-white font-extrabold text-sm mb-3 uppercase tracking-wider text-[#00E5FF]">
                  📥 Making a Deposit
                </h4>
                <ul className="text-gray-300 text-xs md:text-sm flex flex-col gap-2 font-semibold leading-relaxed">
                  <li>1. Go to Wallet/Deposit Section: On the website, go to the wallet/deposit tab.</li>
                  <li>2. Choose Your Preferred Mode: You will get various deposit options, such as UPI, GPay, Paytm, and Net Banking.</li>
                  <li>3. Enter the Amount to Deposit: Specify the amount you want to deposit. The minimum deposit amount is ₹100.</li>
                  <li>4. Make a Payment: Complete the transaction, and your funds will be reflected right away.</li>
                </ul>
              </div>
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5">
                <h4 className="text-white font-extrabold text-sm mb-3 uppercase tracking-wider text-[#00E5FF]">
                  📤 Making a Withdrawal
                </h4>
                <ul className="text-gray-300 text-xs md:text-sm flex flex-col gap-2 font-semibold leading-relaxed">
                  <li>1. Go to Withdrawal Section: On the website, navigate to the withdrawal section.</li>
                  <li>2. Specify the Amount to Withdraw: Give the amount you want to withdraw.</li>
                  <li>3. Choose the Destination: Select the wallet or bank account to which you want the money transferred.</li>
                  <li>4. Confirm Transaction: The amount will be reflected in your account within 2-4 hours.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Start Journey Callout */}
          <section className="w-full bg-gradient-to-r from-[#0c1322] to-[#121c33] border border-[#007BFF]/15 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center gap-4 shadow-lg shadow-black">
            <h3 className="text-[#00E5FF] font-black text-xl md:text-2xl uppercase tracking-wider">
              Ready to Get Started?
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              Visit reddybluebook.in | Click WhatsApp button | Get your ID in 60 seconds. New users can request a free trial Demo ID instantly. Winnings are processed within 2-4 hours guaranteed!
            </p>
            <div className="pt-2">
              <ConicButton text="Get Your Verified ID Now" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
