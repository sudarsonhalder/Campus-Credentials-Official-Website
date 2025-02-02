import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mt-2 mb-8 text-center text-gray-800">
        Privacy Policy
      </h1>
      <p className="text-sm italic text-gray-500">
          Last updated: October 29, 2024
        </p>
      <div className="mt-4 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            1. Information Collection:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We collect personal information from users through registration, course enrollment, test participation, and other activities on the website. This may include your name, email address, phone number, and payment details.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            2. Information Usage:
          </h2>
          <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
            <li>To provide access to courses, test series, and resources.</li>
            <li>To improve customer service and respond to inquiries.</li>
            <li>To securely process payments for enrolled courses.</li>
            <li>To send emails related to order status, new courses, or updates.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            3. Protection of Information:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We adopt industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            4. Sharing Personal Information:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell or rent your personal data. Aggregated demographic data may be shared with partners for research and analytics but will not contain personal identification information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            5. Changes to Privacy Policy:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this policy periodically. Users are encouraged to review the policy regularly to stay informed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Contact Us:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Campus Credential LLP</strong>
            <br />
            201, Palkar House, Lohar Ali Road
            <br />
            Mumbai, Maharashtra 400602, India
            <br />
            <a
              href="mailto:contact@campuscredential.co.in"
              className="text-blue-600 hover:underline"
            >
              contact@campuscredential.co.in
            </a>
          </p>
          <p className="text-sm italic text-gray-500 mt-4">
            This document was last updated on December 8, 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
