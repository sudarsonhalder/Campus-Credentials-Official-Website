import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mb-12 mx-auto px-6 sm:px-8 lg:px-16">
      <h1 className="text-4xl mt-12 font-extrabold mb-8 text-center text-gray-800">
        Terms and Conditions
      </h1>
      <p className="text-sm mb-4 italic text-gray-500">
        Last updated: October 29, 2024
      </p>

      <section className="mb-8">
        <p className="text-gray-600 mb-4 leading-relaxed">
          Welcome to the Campus Credentials website (
          <a
            href="https://campuscredentials.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            campuscredentials.com
          </a>
          ). By accessing or using the website, you agree to comply with and be
          bound by the following terms and conditions. If you do not agree to
          these terms, please refrain from using the website.
        </p>
      </section>

      <hr className="border-gray-300 my-8" />

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            1. Account Registration and Accuracy of Information:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To access certain features of the website, such as courses, test
            series, and study resources, you may be required to register and
            provide accurate information. You are responsible for maintaining
            the confidentiality of your account information and password.{" "}
            <span className="font-semibold text-gray-800">
              Campus Credentials is not liable for any unauthorized access to
              your account.
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            2. Purpose and Usage:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The website offers a wide range of educational services, including
            courses, mock test series, and study materials designed to enhance
            your learning and career readiness. By using the website, you agree
            to comply with all applicable laws and regulations.{" "}
            <span className="font-semibold text-gray-800">
              Any misuse of the content or violation of intellectual property
              rights is strictly prohibited.
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            3. Courses, Test Series, and Reports:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Campus Credentials provides expertly designed courses, technical
            packages, aptitude training, and mock test series to prepare users
            for academic and professional success. The reports generated from
            mock tests are intended to help users evaluate their progress and
            identify areas for improvement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            4. Prohibited Conduct:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Users agree{" "}
            <span className="font-semibold text-gray-800">
              not to engage in any activity that disrupts the website’s
              functionality
            </span>{" "}
            or interferes with the learning experience of others. Unauthorized
            access to the platform or misuse of data is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            5. Termination of Access:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Campus Credentials reserves the right to terminate or suspend access
            to the website for any reason, with or without notice. Upon
            termination, all access to courses, resources, and test series will
            be revoked.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            6. Limitation of Liability:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">
              Campus Credentials is not responsible for any direct, indirect, or
              consequential damages
            </span>{" "}
            arising from the use or inability to use the website or its content.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            7. Modifications to Terms:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Campus Credentials reserves the right to update or modify these
            Terms and Conditions at any time. Users are responsible for
            regularly reviewing the terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
