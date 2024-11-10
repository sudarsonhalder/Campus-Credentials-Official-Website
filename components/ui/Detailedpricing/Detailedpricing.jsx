import React from 'react';

const Detailedpricing = [
  {
    name: 'Aptitude',
    price: 'Free',
    perMonth: '',
    popular: false,
    features: {
      studyMaterials: true,
      mockInterviews: true,
      webinars: true,
      resumeTools: false,
      support: false,
      codingChallenges: true,
    },
  },
  {
    name: '',
    price: '₹2999',
    perMonth: 'One-time',
    popular: true,
    features: {
      studyMaterials: true,
      mockInterviews: true,
      webinars: true,
      resumeTools: true,
      support: true,
      codingChallenges: true,
    },
  },
  {
    name: 'Technical',
    price: '₹7999',
    perMonth: 'One-time',
    popular: false,
    features: {
      studyMaterials: true,
      mockInterviews: true,
      webinars: true,
      resumeTools: true,
      support: true,
      codingChallenges: false,
    },
  },
];

const PricingPlan = ({ plan }) => (
  <th
    className={`px-4 py-8 text-center align-top ${
      plan.popular ? 'bg-gray-900 text-white rounded-t-xl' : 'bg-white'
    }`}
  >
    {plan.popular && (
      <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full">
Aptitude + Technical
      </span>
    )}
    <span className={`text-base font-medium ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
      {plan.name}
    </span>
    <p className={`mt-6 text-4xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>
      {plan.price}
    </p>
    <p className={`mt-2 text-base font-normal ${plan.popular ? 'text-gray-200' : 'text-gray-500'}`}>
      {plan.perMonth}
    </p>
  </th>
);

const FeatureRow = ({ featureName, values }) => (
  <tr>
    <td className="py-4 pr-4 font-medium border-b">{featureName}</td>
    {values.map((value, index) => (
      <td
        key={index}
        className={`px-4 py-4 text-center border-b ${
          index === 1 ? 'bg-gray-900 text-white' : 'bg-white'
        }`}
      >
        {typeof value === 'boolean' ? (
          value ? (
            <svg
              className="w-5 h-5 mx-auto text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 mx-auto text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )
        ) : (
          value
        )}
      </td>
    ))}
  </tr>
);

const PricingTable = () => (
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    {/* <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Pricing & Plans
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        Choose the right plan to kickstart your career with Campus Credentials.
      </p>
    </div> */}
    <div className="hidden mt-16 lg:block">
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-8 pr-4"></th>
            {Detailedpricing.map((plan) => (
              <PricingPlan key={plan.name} plan={plan} />
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Study Materials', key: 'studyMaterials' },
            { name: 'Mock Interviews', key: 'mockInterviews' },
            { name: 'Webinars & Mentorship', key: 'webinars' },
            { name: 'Resume Tools', key: 'resumeTools' },
            { name: 'Support', key: 'support' },
            { name: 'Job Opportunities', key: 'codingChallenges' },
          ].map(({ name, key }) => (
            <FeatureRow
              key={key}
              featureName={name}
              values={Detailedpricing.map((plan) => plan.features[key])}
            />
          ))}
          <tr>
            <td></td>
            {Detailedpricing.map((plan) => (
              <td
                key={plan.name}
                className={`px-4 py-6 text-center ${
                  plan.popular ? 'bg-gray-900 rounded-b-xl' : ''
                }`}
              >
                <button
                  className={`px-4 py-2 rounded w-full ${
                    plan.popular ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}
                >
                  Get Started →
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PricingTable;
