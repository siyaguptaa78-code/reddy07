import { Metadata } from "next";
import React from "react";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Fantasy Sports Guide for Beginners | Registration, Login & Account Recovery",
  description: "Learn how fantasy sports platforms work with this beginner-friendly guide. Understand registration, login, account recovery, security tips, FAQs, and responsible participation.",
};

export default function BeginnerGuidePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          <article className="w-full bg-[#0c1322] border border-[#9C27B0]/10 rounded-md p-6 md:p-10 shadow-lg shadow-black">
            
            <h1 className="text-[#FF4081] font-black text-2xl md:text-3xl lg:text-4xl tracking-wide leading-tight mb-6">
              Reddy Anna Explained: Beginner's Guide to Registration, Login & Account Recovery by Reddybookie.site
            </h1>
            
            <div className="text-gray-300 space-y-6 text-sm md:text-base leading-relaxed">
              <p>
                If you're new to Reddy Anna and want to know how it works, you're in the right place. This guide explains everything in simple language—from creating your account to logging in and recovering your account if you forget your login details.
              </p>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">What is Reddy Anna?</h3>
              <p>
                Reddy Anna is an online fantasy sports platform where eligible users can join sports contests based on their skills and knowledge. Players create fantasy teams by selecting real players for upcoming matches and compete according to the platform's scoring system.
              </p>
              <p>
                Whether you enjoy cricket, football, or other sports, the platform is designed to provide an interactive experience for sports fans.
              </p>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Why Choose Reddy Anna?</h3>
              <p>Many users prefer Reddy Anna because it offers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Simple registration process</li>
                <li>Easy account management</li>
                <li>Fast customer support</li>
                <li>Mobile-friendly platform</li>
                <li>Quick account activation</li>
                <li>Easy login process</li>
              </ul>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">How to Create Your Reddy Anna ID With Reddybookie.site</h3>
              <p>Creating your account only takes a few minutes.</p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="text-white font-semibold">Step 1 – Contact the Official Team</h4>
                  <p>Visit the official website or contact the official support team.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Step 2 – Share Your Details</h4>
                  <p>Provide your:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Name</li>
                    <li>Mobile Number</li>
                    <li>Email Address (if required)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Step 3 – Verify Your Number</h4>
                  <p>You may receive an OTP to verify your mobile number.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Step 4 – Account Creation</h4>
                  <p>Once your information is verified, your account will be created and your login details will be shared with you.</p>
                </div>
              </div>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">How to Register on Reddy Anna With Reddybookie.site</h3>
              <p>Follow these simple steps.</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong className="text-white">Open the Registration Page:</strong> Visit the official registration page.</li>
                <li><strong className="text-white">Fill in Your Information:</strong> Enter Full Name, Mobile Number, and Email Address (if required).</li>
                <li><strong className="text-white">Verify Your Mobile Number:</strong> Enter the OTP sent to your phone.</li>
                <li><strong className="text-white">Complete Registration:</strong> Your account is now ready to use.</li>
              </ol>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">How to Login to Reddy Anna With Reddybookie.site</h3>
              <p>Logging in is easy.</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Visit the official login page.</li>
                <li>Enter your registered mobile number or username.</li>
                <li>Enter your password.</li>
                <li>Click Login.</li>
              </ol>
              <p>You can now access your account.</p>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Tips for Safe Login</h3>
              <p>Always keep your account secure.</p>
              <ul className="space-y-2 ml-4">
                <li>✔ Use a strong password.</li>
                <li>✔ Never share your password with anyone.</li>
                <li>✔ Never share OTPs.</li>
                <li>✔ Always log out if using a shared device.</li>
                <li>✔ Use only the official website.</li>
              </ul>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Forgot Your Login Details?</h3>
              <p>Don't worry. It happens. You can recover your account in just a few minutes.</p>
              <h4 className="text-white font-semibold mt-4 mb-2">How to Recover Your Account</h4>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Open the login page.</li>
                <li>Click Forgot Password.</li>
                <li>Enter your registered mobile number.</li>
                <li>Complete OTP verification.</li>
                <li>Create a new password.</li>
                <li>Login with your new password.</li>
              </ol>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Common Login Problems</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">Incorrect Password</h4>
                  <p>Check that:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Caps Lock is off</li>
                    <li>Password is entered correctly</li>
                    <li>Username is correct</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold">OTP Not Received</h4>
                  <p>If you don't receive the OTP:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Wait a few minutes.</li>
                    <li>Check your mobile network.</li>
                    <li>Request a new OTP.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold">Unable to Login</h4>
                  <p>Try:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Refreshing the page.</li>
                    <li>Clearing your browser cache.</li>
                    <li>Using another browser.</li>
                    <li>Contacting customer support.</li>
                  </ul>
                </div>
              </div>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Tips for New Users</h3>
              <p>If you're new to fantasy sports, keep these tips in mind.</p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="text-white font-semibold">Learn the Rules</h4>
                  <p>Read the contest rules before joining.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Check the Playing XI</h4>
                  <p>Always wait for the final team announcement before making your selections.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Study Player Form</h4>
                  <p>Choose players based on recent performance rather than popularity.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Check Pitch Report</h4>
                  <p>Pitch conditions can affect player performance.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Follow Match Updates</h4>
                  <p>Stay updated with toss results and injury news before locking your team.</p>
                </div>
              </div>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Why Fantasy Sports Require Skill</h3>
              <p>Fantasy sports are based on research and strategy. Successful users often:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Study player statistics</li>
                <li>Follow recent form</li>
                <li>Analyze pitch reports</li>
                <li>Check weather conditions</li>
                <li>Build balanced teams</li>
              </ul>
              <p>The better your research, the better your chances of making informed team selections.</p>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Responsible Play</h3>
              <p>Fantasy sports should always be enjoyed responsibly. Before participating:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Read all contest rules.</li>
                <li>Make sure you are eligible according to local laws.</li>
                <li>Set your own limits.</li>
                <li>Play for entertainment.</li>
                <li>Never spend more than you can afford.</li>
              </ul>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">Is registration free?</h4>
                  <p>Registration policies may vary. Please check the official platform for the latest information.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">How long does registration take?</h4>
                  <p>Most users can complete registration within a few minutes.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Can I change my mobile number later?</h4>
                  <p>Yes, contact customer support if you need to update your registered number.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">What should I do if I forget my password?</h4>
                  <p>Use the Forgot Password option and complete OTP verification to reset your password.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Is my personal information safe?</h4>
                  <p>Always use the official website and never share your password or OTP with anyone.</p>
                </div>
              </div>

              <hr className="border-[#9C27B0]/20 my-6" />

              <h3 className="text-white font-bold text-xl md:text-2xl mt-8 mb-4">Final Words</h3>
              <p>
                Getting started with Reddy Anna is simple. Create your account, complete the registration process, log in securely, and you're ready to explore the platform.
              </p>
              <p>
                Always use the official website, protect your login details, and follow responsible gaming practices. If you ever face login issues, the account recovery process makes it easy to regain access.
              </p>
              <p>
                We hope this guide has answered all your questions about Reddy Anna registration, login, ID creation, and account recovery. If you still need assistance, contact the official support team for help.
              </p>

              <h4 className="text-white font-semibold mt-6 mb-2">Visit the Official ReddyBookie Websites</h4>
              <p>
                Looking to get started or learn more about Reddy Anna? Visit our official websites for the latest updates, account assistance, and fantasy sports information.
              </p>
              <ul className="space-y-2 mt-4 ml-4">
                <li>
                  <strong className="text-[#FF4081]">Official Website:</strong> <a href="https://reddybookie.site" target="_blank" rel="noopener noreferrer" className="text-[#FF4081] hover:underline">https://reddybookie.site</a>
                  <br />
                  Explore guides, registration information, login support, and the latest fantasy sports updates.
                </li>
                <li>
                  <strong className="text-[#FF4081]">Alternate Website:</strong> <a href="https://reddybookie.live" target="_blank" rel="noopener noreferrer" className="text-[#FF4081] hover:underline">https://reddybookie.live</a>
                  <br />
                  If you're unable to access the primary website, you can also visit our alternate website for the latest information and account assistance.
                </li>
              </ul>
              
              <h4 className="text-white font-semibold mt-6 mb-2">Start Your Journey Today</h4>
              <p>
                Whether you're creating your first account or returning to the platform, both websites provide useful resources to help you get started.
              </p>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}
