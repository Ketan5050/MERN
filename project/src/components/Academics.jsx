import { useEffect, useState } from 'react';
import { BookOpen, Users, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Academics() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .order('name');

      if (error) throw error;
      setDepartments(data || []);
    } catch (error) {
      console.error('Error fetching departments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of undergraduate, postgraduate, and doctoral programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">16+ Programs</h3>
            <p className="text-gray-600">
              Diverse range of engineering programs across multiple disciplines
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
            <p className="text-gray-600">
              Experienced professors with industry expertise and research background
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accredited</h3>
            <p className="text-gray-600">
              NBA accredited programs ensuring quality education standards
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Departments</h3>
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading departments...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {departments.map((dept) => (
                <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={dept.image_url || 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800'}
                        alt={dept.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h4>
                      {dept.head_of_department && (
                        <p className="text-sm text-gray-600 mb-3">
                          <span className="font-semibold">Head of Department:</span> {dept.head_of_department}
                        </p>
                      )}
                      <p className="text-gray-700 mb-4">{dept.description}</p>
                      {dept.programs && dept.programs.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Programs Offered:</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {dept.programs.map((program, index) => (
                              <li key={index} className="text-gray-600">{program}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Academic Resources</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Access our comprehensive library, online learning platforms, and research facilities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Digital Library
            </button>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              E-Learning Portal
            </button>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Research Labs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
