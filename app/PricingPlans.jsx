import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      title: "1-on-1 Mentorship",
      price: "KES 10,000/month",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScvEiKg4SCvJ5RHhed5z_rwioCCKAXwHd7UihjYpIfzi3iChA/viewform?usp=pp_url&entry.600916540=1-on-1+Mentorship", 
      features: [
        "Weekly 1-on-1 sessions",
        "Personalized guidance",
        "Direct access to mentor",
        "Project-based learning",
        "Support via WhatsApp/Email",
      ],
    },
    {
      title: "Cohort Learning",
      price: "KES 5,000/month",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScvEiKg4SCvJ5RHhed5z_rwioCCKAXwHd7UihjYpIfzi3iChA/viewform?usp=pp_url&entry.600916540=Cohort+Learning", 
      features: [
        "Live weekly classes",
        "Access to recordings",
        "Group projects & discussions",
        "Supportive learning community",
        "Certificate of completion",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="pricingplans">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-xl font-bold text-yellow-400 mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded text-center"
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
