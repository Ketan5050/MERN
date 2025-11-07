import { Target, Eye, Award, Users } from 'lucide-react';
import img2 from '../Assets/img2.png';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About D.Y. Patil College of Engineering & Technology</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A premier institution dedicated to excellence in engineering education and research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src={img2}
              alt="D.Y. Patil College Campus"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Institution History</h3>
            <p className="text-gray-600 mb-4">
              Established in 2008 and recognized as a premier engineering college in Kolhapur.
            </p>
            <p className="text-gray-600 mb-4">
              Vision and Mission: To develop skilled engineers and entrepreneurs who contribute to society and global industry.
            </p>
            <p className="text-gray-600">
              Core Values: Excellence, Integrity, Innovation, Inclusiveness.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To provide quality technical education and foster innovation, research, and entrepreneurship
              among students. We aim to develop socially responsible engineers who can contribute to the
              nation's technological advancement and economic growth.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              To be a center of excellence in engineering education and research, recognized globally for
              producing competent professionals who are innovative, ethical, and committed to sustainable
              development and societal welfare.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 py-12 px-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">
                Striving for the highest standards in education and research
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">
                Upholding ethical values and transparency in all our endeavors
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">
                Encouraging creative thinking and problem-solving approaches
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Inclusivity</h4>
              <p className="text-sm text-gray-600">
                Creating an environment that welcomes diversity and equality
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Accreditations & Approvals</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white border-2 border-blue-100 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">AICTE Approved</h4>
              <p className="text-sm text-gray-600">All India Council for Technical Education</p>
            </div>
            <div className="bg-white border-2 border-blue-100 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">NBA Accredited</h4>
              <p className="text-sm text-gray-600">National Board of Accreditation</p>
            </div>
            <div className="bg-white border-2 border-blue-100 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">APJ KTU Affiliated</h4>
              <p className="text-sm text-gray-600">APJ Abdul Kalam Technological University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
