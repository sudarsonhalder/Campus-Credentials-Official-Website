import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16">
      <div className="space-y-10">
        {/* Refund Policy Section */}
        <h1 className="text-4xl font-extrabold mt-12 mb-8 text-center text-gray-800">
          Refund Policy
        </h1>

        <p className="text-sm italic text-gray-500">
          Last updated: October 29, 2024
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600 leading-relaxed">
              Thank you for your purchase. We hope you are happy with your
              purchase. However, if you are not completely satisfied with your
              purchase for any reason, you may return it to us for a full refund
              or an exchange. Please see below for more information on our
              return policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Returns:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All returns must be postmarked within three (3) days of the
              purchase date. Returned items must be in new and unused condition,
              with all original tags and labels attached.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Return Process:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To return an item, please email customer service at{" "}
              <a
                href="mailto:contact@campuscredential.co.in"
                className="text-blue-600 hover:underline"
              >
                contact@campuscredential.co.in
              </a>{" "}
              to obtain a Return Merchandise Authorisation (RMA) number. After
              receiving an RMA number, place the item securely in its original
              packaging and include your proof of purchase. Mail your return to
              the following address:
            </p>

            <p className="text-gray-600 mt-4">
              <strong>Campus Credential LLP</strong>
              <br />
              Attn: Returns
              <br />
              201, Palkar House, Lohar Ali Road
              <br />
              Mumbai, Maharashtra 400602, India
            </p>

            <p className="text-gray-600 mt-4">
              Return shipping charges will be paid or reimbursed by us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Refunds:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              After receiving your return and inspecting the condition of your
              item, we will process your return or exchange. Please allow at
              least three (3) days from the receipt of your item to process your
              return or exchange. We will notify you by email once your return
              has been processed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Exceptions:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The following items cannot be returned or exchanged:
            </p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed mt-2">
              <li>Coupons</li>
              <li>Sample Books</li>
              <li>Daily Practice Sheets</li>
            </ul>
            <p className="text-gray-600 mt-4">
              For defective or damaged products, please contact us at the
              contact details below to arrange a refund or exchange.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Questions:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions concerning our return policy, please
              contact us at:
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Phone:</strong> 9028230731
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@campuscredential.co.in"
                className="text-blue-600 hover:underline"
              >
                contact@campuscredential.co.in
              </a>
            </p>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />
      </div>
    </div>
  );
};

export default TermsAndConditions;
