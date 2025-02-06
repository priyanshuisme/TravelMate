import React, { useState, FormEvent } from 'react';
import { InputField } from '../components/forms/InputField';
import { MapPin, Calendar, HeartPulse, DollarSign, Star } from 'lucide-react';

export function MedicalTourism() {
  const [condition, setCondition] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!condition || !city) {
      setError('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative h-[400px] bg-cover bg-center"
           style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/doctor-white-medical-coat-protective-mask-gloves-background-world-map-with-airplanes-medical-tourism-travel-concept-high-quality-photo_297535-2841.jpg?semt=ais_hybrid)'}}>
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Medical Tourism Solutions
              </h1>
              <p className="text-xl text-white/90">
                World-class healthcare at affordable prices
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                    <HeartPulse className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <InputField
                      label="Medical Condition/Treatment"
                      value={condition}
                      onChange={setCondition}
                      placeholder="Enter medical condition or treatment"
                      className="w-full focus:outline-none"
                      required={true}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                    <MapPin className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <InputField
                      label="Preferred Location"
                      value={city}
                      onChange={setCity}
                      placeholder="Enter preferred city/country"
                      className="w-full focus:outline-none"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                    <Calendar className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    <InputField
                      label="Preferred Date"
                      type="date"
                      value={date}
                      onChange={setDate}
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                  <DollarSign className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <InputField
                    label="Budget Range"
                    type="number"
                    value={budget}
                    onChange={setBudget}
                    placeholder="Enter your budget"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg
                         hover:bg-blue-700 transition-colors disabled:opacity-50
                         font-medium text-lg flex items-center justify-center gap-2"
              >
                {isLoading ? 'Processing...' : 'Find Medical Solutions'}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-800 mb-4">
                  <Star className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Request Received!</h2>
                </div>
                <p className="text-green-700">
                  We'll analyze your requirements and connect you with the best medical facilities.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Accredited Hospitals</h3>
              <p className="text-gray-600">Access to JCI-accredited healthcare facilities worldwide</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Internationally trained medical professionals</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600">Save up to 70% on medical procedures</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}