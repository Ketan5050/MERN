import { Calendar, FileText, CheckCircle, Users } from 'lucide-react';

export default function Admissions() {
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Fill Application',
      description: 'Complete the online application form with accurate information and upload required documents',
    },
    {
      icon: CheckCircle,
      title: 'Entrance Test',
      description: 'Qualify in KEAM (Kerala Engineering Architecture Medical) entrance examination',
    },
    {
      icon: Users,
      title: 'Counseling',
      description: 'Attend online/offline counseling sessions conducted by CEE Kerala',
    },
    {
      icon: Calendar,
      title: 'Admission',
      description: 'Complete admission formalities and join the program as per schedule',
    },
  ];

  const eligibilityCriteria = [
    {
      program: 'B.Tech Programs',
      criteria: [
        'Passed 10+2 examination with Physics, Chemistry, and Mathematics',
        'Minimum 50% aggregate marks (45% for SC/ST)',
        'Valid KEAM rank',
      ],
    },
    {
      program: 'M.Tech Programs',
      criteria: [
        'B.Tech/B.E. degree in relevant discipline',
        'Minimum 50% marks (45% for SC/ST)',
        'Valid GATE score',
      ],
    },
    {
      program: 'PhD Programs',
      criteria: [
        'M.Tech/M.E. degree with minimum 60% marks',
        'Valid GATE/NET score or equivalent',
        'Research proposal in area of interest',
      ],
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join D.Y.Patil college and embark on your journey to becoming a successful engineer
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Admissions Open for 2025-26
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">Application Deadline</h4>
              <p className="text-gray-700">B.Tech: June 30, 2025</p>
              <p className="text-gray-700">M.Tech: May 15, 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">Academic Session</h4>
              <p className="text-gray-700">Starts: August 2025</p>
              <p className="text-gray-700">Orientation: First week of August</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Apply Online Now
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Admission Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute top-8 -right-12 hidden md:block">
                      {index < admissionSteps.length - 1 && (
                        <div className="w-24 h-0.5 bg-blue-300"></div>
                      )}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Eligibility Criteria
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">{item.program}</h4>
                <ul className="space-y-2">
                  {item.criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">10th Standard Mark Sheet and Certificate</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">12th Standard Mark Sheet and Certificate</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">KEAM/GATE Score Card</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Transfer Certificate</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Conduct Certificate</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Passport Size Photographs</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Community Certificate (if applicable)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Income Certificate (if applicable)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Admissions?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our admission team is here to guide you through the process
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Prospectus
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Admission Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
