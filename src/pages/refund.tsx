import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Refund Policy</h1>
        <p className="text-gray-500 mb-12 text-sm md:text-base">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="text-gray-700 leading-relaxed space-y-10">
          <p className="text-lg">
            At Sarvmanglam Investors, we strive to provide high-quality services
            related to property listings, promotions, and real estate assistance.
            This Refund Policy outlines the terms under which refunds may be
            granted.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Policy</h2>
            <p>
              All payments made on Sarvmanglam Investors are generally
              non-refundable unless explicitly stated otherwise. By purchasing any
              service, you agree to this refund policy.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Eligible Refund Cases</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Duplicate payment made by mistake</li>
                <li>Payment deducted but service not activated</li>
                <li>Technical errors from our platform</li>
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Non-Refundable Cases</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Change of mind after purchase</li>
                <li>Incorrect property listing details provided by user</li>
                <li>Failure to get leads, buyers, or responses</li>
                <li>Partial use of services</li>
              </ul>
            </section>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Refund Process & Timeline</h2>
            <div className="space-y-4">
              <p>
                To request a refund, you must contact us within <strong>3–5 business days</strong> of
                the transaction. Please include your payment details and reason for the request.
              </p>
              <p>
                Approved refunds will be processed within <strong>7–10 business days</strong>. The
                amount will be credited back to your original payment method.
              </p>
              <p className="text-sm text-gray-500">
                Note: Payments processed via third-party providers (such as payment
                gateways) are also subject to their terms and policies. We are not
                responsible for delays caused by them.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Request Procedure</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600">
              <li>Contact our support team with your transaction ID and reason for refund request.</li>
              <li>We will verify your claim and review the eligibility within 2-3 business days.</li>
              <li>If approved, we will process your refund within 7-10 business days.</li>
              <li>You will receive a confirmation email once the refund is processed.</li>
              <li>The refund amount will be credited to your original payment method.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Special Circumstances & Exceptions</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Premium Listing Cancellation:</strong> If you cancel a premium listing within 24 hours of purchase, a full refund will be issued. After 24 hours, no refund is available.</p>
              <p><strong>Promotional Services:</strong> Refunds for promotional packages depend on the specific terms at the time of purchase. Please refer to the promotion details.</p>
              <p><strong>Service Delays:</strong> If we fail to activate your service within the promised timeframe, you may be eligible for a partial refund or service extension.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Dispute Resolution</h2>
            <p className="mb-3">
              If you believe a refund decision was made in error, you can escalate your complaint to our Grievance Officer. We will conduct a thorough review within 5 business days and respond with a final decision.
            </p>
            <p className="text-sm text-gray-500">
              If you're unable to resolve the issue through our support channels, you may file a complaint with the relevant consumer protection authority in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payment Gateway Issues</h2>
            <p>
              If your payment was successful but the service was not activated, or if you were charged multiple times due to a technical error, please contact us immediately with proof of payment. We will investigate and issue a refund or credit as appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Partial Refunds</h2>
            <p>
              Partial refunds may be issued in cases where you have:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
              <li>Used a portion of the service</li>
              <li>Received partial benefits before requesting cancellation</li>
              <li>Accessed premium features for a certain period</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              Partial refund amounts will be calculated based on usage and refunded within the standard processing timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact for Refunds</h2>
            <p>For any refund-related queries, please contact our support team:</p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-medium text-gray-900">Sarvmanglam Investors</p>
              <p>BHA Millennium Tower, Sector 62, Noida – 201301</p>
              <p>Phone: +91 9168805979</p>
              <p>Email: <a href="mailto:query@sarvmanglaminvestors.com" className="text-orange-500 hover:text-orange-600 font-medium">query@sarvmanglaminvestors.com</a></p>
              <p className="text-sm text-gray-500 mt-3">Support Hours: Mon–Sat, 10AM – 7PM IST</p>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default RefundPolicy;