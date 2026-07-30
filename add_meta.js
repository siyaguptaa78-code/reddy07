const fs = require('fs');

const data = [
  { path: '', title: 'Reddy Anna | Live Cricket Betting ID & Online Sports Platform', desc: 'Get your Reddy Anna ID for live cricket betting, sports exchange, and online gaming. Fast registration, secure platform, and 24/7 customer support.' },
  { path: 'about-us', title: 'About Reddy Bookie | Trusted Online Betting Platform in India', desc: 'Learn about Reddy Bookie, our mission, and why thousands of Indian users trust us for cricket betting, casino games, and secure online betting services.' },
  { path: 'blogs', title: 'Reddy Bookie Blog | Betting Tips, Cricket News & Casino Guides', desc: 'Explore the latest betting tips, cricket predictions, casino strategies, IPL updates, and expert insights to improve your online betting experience.' },
  { path: 'contact-us', title: 'Contact Reddy Bookie | Get Support & Betting Assistance', desc: 'Contact the Reddy Bookie support team for account help, betting ID assistance, registration support, and quick answers to your questions.' },
  { path: 'indian-card-games', title: 'Indian Card Games Online | Play Popular Card Games', desc: 'Discover popular Indian card games including Teen Patti, Andar Bahar, Rummy, and more. Enjoy exciting gameplay and secure online betting.' },
  { path: 'reddy-anna-id/cricket-id', title: 'Cricket Betting ID | Get Your Reddy Anna Cricket ID Today', desc: 'Apply for a verified Reddy Anna Cricket ID to enjoy live cricket betting, IPL betting, international matches, and fast account activation.' },
  { path: 'reddy-anna-id/demo-id', title: 'Demo Betting ID | Try Reddy Anna Demo Account', desc: 'Request a Reddy Anna Demo ID to explore the betting platform, understand features, and experience online betting before using a real account.' },
  { path: 'reddy-anna-id/ipl-betting-id', title: 'IPL Betting ID | Instant Reddy Anna IPL ID Registration', desc: 'Get your IPL Betting ID instantly with Reddy Anna. Bet on IPL matches, enjoy competitive odds, secure transactions, and fast account approval.' },
  { path: 'reddy-anna-sports/cricket-betting', title: 'Cricket Betting in India | Live Cricket Betting Guide', desc: 'Enjoy live cricket betting with competitive odds on IPL, T20, ODI, Test matches, and international tournaments through Reddy Bookie.' },
  { path: 'reddy-anna-sports/football-betting', title: 'Football Betting in India | Live Football Betting Online', desc: 'Bet on Premier League, La Liga, Champions League, FIFA tournaments, and more with live football betting and competitive odds.' },
  { path: 'reddy-anna-sports/horse-racing', title: 'Horse Racing Betting | Online Horse Race Betting India', desc: 'Experience online horse racing betting with live race markets, competitive odds, secure betting options, and quick payouts on Reddy Bookie.' },
  { path: 'reddy-anna-sports/live-betting', title: 'Live Betting Online | Bet on Sports in Real Time', desc: 'Place live bets on cricket, football, tennis, and other sports with real-time odds, instant updates, and secure online betting.' },
  { path: 'reddy-anna-sports/tennis-betting', title: 'Tennis Betting Online | Live Tennis Betting in India', desc: 'Bet on ATP, WTA, Grand Slam, Davis Cup, and other tennis events with live odds, secure betting, and quick settlements.' },
  { path: 'login', title: 'Reddy Bookie Login | Secure Betting Account Access', desc: 'Log in to your Reddy Bookie account securely to access live betting, casino games, account management, and betting history.' },
  { path: 'register', title: 'Register at Reddy Bookie | Create Your Betting Account', desc: 'Register your Reddy Bookie account in minutes. Get started with online cricket betting, casino games, live sports betting, and exclusive offers.' }
];

data.forEach(item => {
  const filePath = 'd:/human/reddy07/app/' + (item.path ? item.path + '/' : '') + 'page.tsx';
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const titleRegex = /title:\s*["'][^"']+["']/g;
    const descRegex = /description:\s*["'][^"']+["']/g;
    
    let updated = false;
    
    if (content.includes('export const metadata')) {
      // Replace existing title and description
      if (titleRegex.test(content)) {
         content = content.replace(titleRegex, `title: "${item.title}"`);
         updated = true;
      }
      if (descRegex.test(content)) {
         content = content.replace(descRegex, `description: "${item.desc}"`);
         updated = true;
      }
      if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated existing metadata in', filePath);
      }
    } else {
       if (!content.includes('import { Metadata }') && !content.includes('import type { Metadata }')) {
         content = 'import { Metadata } from "next";\n' + content;
       }
       const metadataStr = '\nexport const metadata: Metadata = {\n  title: "' + item.title + '",\n  description: "' + item.desc + '",\n};\n\n';
       const defaultExportIndex = content.indexOf('export default function');
       if (defaultExportIndex !== -1) {
         content = content.slice(0, defaultExportIndex) + metadataStr + content.slice(defaultExportIndex);
       } else {
         content += metadataStr;
       }
       fs.writeFileSync(filePath, content, 'utf8');
       console.log('Added metadata to', filePath);
    }
  } else {
    console.log('File not found:', filePath);
  }
});
