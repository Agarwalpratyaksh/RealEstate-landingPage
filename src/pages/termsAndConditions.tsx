import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Terms & Conditions</h1>
        <p className="text-gray-500 mb-12 text-sm md:text-base">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="text-gray-700 leading-relaxed space-y-10">
          <p className="text-lg">
            Welcome to Sarvmanglam Investors (“Company”, “we”, “our”, “us”). By
            accessing or using our platform, you agree to comply with and be bound
            by these Terms & Conditions (“Terms”).
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By registering, accessing, or using our platform, you agree to these
              Terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Offered</h2>
            <p className="mb-3">Sarvmanglam Investors provides an online platform for users to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Buy, sell, and rent properties</li>
              <li>List property details</li>
              <li>Connect with buyers, sellers, brokers, and agents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Registration & Account</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>You must provide accurate and complete information.</li>
              <li>You are responsible for maintaining account confidentiality.</li>
              <li>You are responsible for all activities under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide truthful property information.</li>
              <li>Do not post misleading or fraudulent listings.</li>
              <li>Do not violate any applicable laws.</li>
              <li>Respect other users and avoid abusive behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Property Listings</h2>
            <p>
              Users are solely responsible for the accuracy and legality of property
              listings. The Company does not verify ownership or authenticity of listings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payments & Charges</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Some services may be paid (premium listings, promotions).</li>
              <li>Payments are processed via third-party providers.</li>
              <li>No refunds unless explicitly stated.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Legal & Liabilities</h2>
            <div className="space-y-4">
              <p><strong>No Brokerage Guarantee:</strong> Sarvmanglam Investors is only a platform and does not act as a real estate agent, broker, or mediator in transactions.</p>
              <p><strong>Third-Party Services:</strong> We may provide links to third-party services. We are not responsible for their actions or policies.</p>
              <p><strong>Intellectual Property:</strong> All content on the platform is owned by Sarvmanglam Investors and protected by applicable laws.</p>
              <p><strong>Limitation of Liability:</strong> The Company is not responsible for any disputes, losses, or damages arising from property transactions between users.</p>
              <p><strong>Governing Law:</strong> These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Delhi.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Prohibited Activities</h2>
            <p className="mb-3">You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Account Suspension & Termination</h2>
            <p>
              We reserve the right to suspend, restrict, or terminate your account immediately and without prior notice if we determine that you have violated these Terms, engaged in prohibited activities, or posed a risk to our platform or other users. Termination may result in loss of access to your account and all associated data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimer of Warranties</h2>
            <p>
              The platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
              <li>The platform will be error-free or uninterrupted</li>
              <li>Information on the platform is accurate, complete, or reliable</li>
              <li>All defects will be corrected</li>
              <li>The platform is free from viruses or harmful components</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Sarvmanglam Investors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Sarvmanglam Investors, its owners, employees, and agents from any and all claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
              <li>Your violation of these Terms</li>
              <li>Your use of the platform</li>
              <li>Property listings or information you provide</li>
              <li>Disputes between you and other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Entire Agreement</h2>
            <p>
              These Terms & Conditions constitute the entire agreement between you and Sarvmanglam Investors regarding your use of the platform and supersede all prior and contemporaneous agreements, understandings, and negotiations, whether written or oral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Amendments & Changes</h2>
            <p>
              We may update, modify, or amend these Terms at any time without prior notice. Changes will be effective immediately upon posting to the platform. Your continued use of the platform following any modifications constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and all other provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
            <p>For any questions, concerns, or disputes regarding these Terms, please contact us:</p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-medium text-gray-900">Sarvmanglam Investors</p>
              <p>Delhi, India</p>
              <p>Phone: +91 9168805979</p>
              <p>Email: <a href="mailto:support@sarvmanglaminvestors.com" className="text-orange-500 hover:text-orange-600 font-medium">support@sarvmanglaminvestors.com</a></p>
              <p className="text-sm text-gray-500 mt-3">Response time: Within 48 business hours</p>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default TermsAndConditions;