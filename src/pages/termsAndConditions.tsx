import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900">
      <Navbar />

      {/* Header Area */}
      <div className="bg-white border-b border-slate-200 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Terms & Conditions</h1>
          <span className="inline-block bg-slate-100 text-slate-600 px-5 py-2 rounded-full text-sm font-medium tracking-wide">
            Effective Date: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20 gap-12">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200 text-slate-600 leading-relaxed space-y-12">
          
          <div className="text-lg text-slate-700 leading-normal">
            Welcome to Sarvmanglam Investors (“Company”, “we”, “our”, “us”). By
            accessing or using our platform, you agree to comply with and be bound
            by these Terms & Conditions (“Terms”).
          </div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">1. Acceptance of Terms</h2>
            <p>
              By registering, accessing, or using our platform, you agree to these
              Terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">2. Services Offered</h2>
            <p className="mb-4">Sarvmanglam Investors provides an online platform for users to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Buy, sell, and rent properties</li>
              <li>List property details</li>
              <li>Connect with buyers, sellers, brokers, and agents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">3. User Registration & Account</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information.</li>
              <li>You are responsible for maintaining account confidentiality.</li>
              <li>You are responsible for all activities under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide truthful property information.</li>
              <li>Do not post misleading or fraudulent listings.</li>
              <li>Do not violate any applicable laws.</li>
              <li>Respect other users and avoid abusive behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">5. Property Listings</h2>
            <p>
              Users are solely responsible for the accuracy and legality of property
              listings. The Company does not verify ownership or authenticity of listings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">6. Payments & Charges</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Some services may be paid (premium listings, promotions).</li>
              <li>Payments are processed via third-party providers.</li>
              <li>No refunds unless explicitly stated.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">7. Legal & Liabilities</h2>
            <div className="space-y-4">
              <p><strong className="text-slate-800">No Brokerage Guarantee:</strong> Sarvmanglam Investors is only a platform and does not act as a real estate agent, broker, or mediator in transactions.</p>
              <p><strong className="text-slate-800">Third-Party Services:</strong> We may provide links to third-party services. We are not responsible for their actions or policies.</p>
              <p><strong className="text-slate-800">Intellectual Property:</strong> All content on the platform is owned by Sarvmanglam Investors and protected by applicable laws.</p>
              <p><strong className="text-slate-800">Limitation of Liability:</strong> The Company is not responsible for any disputes, losses, or damages arising from property transactions between users.</p>
              <p><strong className="text-slate-800">Governing Law:</strong> These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Delhi.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">8. Prohibited Activities</h2>
            <p className="mb-4">You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting fake, fraudulent, or misleading property listings</li>
              <li>Using the platform for scams, illegal activities, or money laundering</li>
              <li>Attempting to hack, disrupt, or interfere with the platform</li>
              <li>Spamming, phishing, or sending unsolicited communications</li>
              <li>Uploading malware, viruses, or harmful code</li>
              <li>Impersonating other users or misrepresenting your identity</li>
              <li>Violating intellectual property rights of others</li>
              <li>Engaging in harassment, abuse, or offensive behavior</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">9. Account Suspension & Termination</h2>
            <p>
              We reserve the right to suspend, restrict, or terminate your account immediately and without prior notice if we determine that you have violated these Terms, engaged in prohibited activities, or posed a risk to our platform or other users. Termination may result in loss of access to your account and all associated data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">10. Disclaimer of Warranties</h2>
            <p>
              The platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>The platform will be error-free or uninterrupted</li>
              <li>Information on the platform is accurate, complete, or reliable</li>
              <li>All defects will be corrected</li>
              <li>The platform is free from viruses or harmful components</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">11. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Sarvmanglam Investors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Sarvmanglam Investors, its owners, employees, and agents from any and all claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your violation of these Terms</li>
              <li>Your use of the platform</li>
              <li>Property listings or information you provide</li>
              <li>Disputes between you and other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">13. Entire Agreement</h2>
            <p>
              These Terms & Conditions constitute the entire agreement between you and Sarvmanglam Investors regarding your use of the platform and supersede all prior and contemporaneous agreements, understandings, and negotiations, whether written or oral.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">14. Amendments & Changes</h2>
            <p>
              We may update, modify, or amend these Terms at any time without prior notice. Changes will be effective immediately upon posting to the platform. Your continued use of the platform following any modifications constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and all other provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-5 pb-3 border-b border-slate-100">16. Contact Information</h2>
            <p className="mb-4">For any questions, concerns, or disputes regarding these Terms, please contact us:</p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="font-semibold text-slate-900 mb-1">Sarvmanglam Investors</p>
              <div className="space-y-1 text-slate-600 text-sm">
                <p>Delhi, India</p>
                <p>Phone: <span className="font-medium">+91 9168805979</span></p>
                <p>Email: <a href="mailto:support@sarvmanglaminvestors.com" className="text-blue-600 hover:text-blue-700 font-medium">support@sarvmanglaminvestors.com</a></p>
                <p className="pt-2 text-slate-500">Response time: Within 48 business hours</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
