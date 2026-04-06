import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-gray-500 mb-12 text-sm md:text-base">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="text-gray-700 leading-relaxed space-y-10">
          <p className="text-lg">
            Sarvmanglam Investors (“Company”, “we”, “our”, “us”) is committed to
            protecting your privacy. This Privacy Policy explains how we collect,
            use, store, and share your personal data when you use our website and
            services related to buying, selling, or renting properties.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">A. Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Name, email, phone number</li>
                  <li>Account login details</li>
                  <li>Property details (location, price, images, amenities)</li>
                  <li>ID proof (Aadhaar, PAN, etc. if required for verification)</li>
                  <li>Communication records (emails, chats, calls)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">B. Automatically Collected</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>IP address, browser type, device details</li>
                  <li>Pages visited, time spent, search preferences</li>
                  <li>Location (approximate)</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Create and manage your account</li>
              <li>List and promote properties</li>
              <li>Connect buyers, sellers, and brokers</li>
              <li>Provide customer support</li>
              <li>Improve platform performance and features</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing of Information</h2>
            <p className="mb-3">We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Other users (buyers, sellers, brokers)</li>
              <li>Service providers and vendors</li>
              <li>Banking or loan partners (if you show interest)</li>
              <li>Legal authorities when required</li>
            </ul>
            <p className="font-medium text-gray-900 bg-gray-50 p-4 border-l-4 border-orange-400 rounded-r-lg">
              We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage & Security</h2>
            <p>
              Your data is stored securely on servers located in India or other
              regions with adequate protection. We implement technical and
              organizational safeguards to protect your data. We retain your data as long as necessary to provide services or comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access and review your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Even after you delete your account, we may retain certain data for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
              <li>Compliance with legal and regulatory requirements</li>
              <li>Fraud prevention and security purposes</li>
              <li>Settlement of disputes</li>
              <li>Backup and archival purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies & Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience, analyze traffic patterns, and personalize content. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Links & Services</h2>
            <p>
              Our platform may contain links to third-party websites and services. We are not responsible for their privacy practices, content, or policies. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p>
              Sarvmanglam Investors is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal data, we will take steps to delete such information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Security Measures</h2>
            <p>
              We implement industry-standard security measures to protect your data, including encryption, secure storage, and regular security audits. However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfer</h2>
            <p>
              Your data may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our platform, you consent to the transfer of your information to countries outside your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date. Your continued use of the platform following any changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact / Grievance Officer</h2>
            <p>If you have any questions, concerns, or complaints regarding this Privacy Policy or our privacy practices, you can contact:</p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-medium text-gray-900">Grievance Officer</p>
              <p>Sarvmanglam Investors</p>
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

export default PrivacyPolicy;