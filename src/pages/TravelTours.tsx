import { useState, FormEvent } from 'react';
import { InputField } from '../components/forms/InputField';
import { MapPin, Calendar, Users, DollarSign } from 'lucide-react';

export function TravelTours() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [people, setPeople] = useState('');
  const [budget, setBudget] = useState('');
  const [showPlan, setShowPlan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!destination || !days || !people || !budget) {
      setError('Please fill in all fields');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowPlan(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative h-[300px] bg-cover bg-center mb-8"
           style={{backgroundImage: 'url(https://www.realitypremedia.com/blog/wp-content/uploads/2016/01/Image-processing-for-Travel-website.jpg)'}}>
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Plan Your Dream Journey
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                  <MapPin className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <InputField
                    label="Where do you want to go?"
                    value={destination}
                    onChange={(value: string) => setDestination(value)}
                    placeholder="Enter destination"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                  <Calendar className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <InputField
                    label="Duration"
                    type="number"
                    value={days}
                    onChange={(value: string) => setDays(value)}
                    placeholder="Number of days"
                    className="w-full focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                  <Users className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <InputField
                    label="Travelers"
                    type="number"
                    value={people}
                    onChange={(value: string) => setPeople(value)}
                    placeholder="Number of people"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                <DollarSign className="text-blue-600 w-5 h-5 flex-shrink-0" />
                <InputField
                  label="Budget"
                  type="number"
                  value={budget}
                  onChange={(value: string) => setBudget(value)}
                  placeholder="Your budget"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-colors disabled:opacity-50
                       font-medium text-lg"
            >
              {isLoading ? 'Creating your plan...' : 'Plan My Trip'}
            </button>
          </form>

          {showPlan && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 mb-4">
                Your Travel Plan is Ready!
              </h2>
              <div className="space-y-2 text-green-700">
                <p>Destination: {destination}</p>
                <p>Duration: {days} days</p>
                <p>Travelers: {people}</p>
                <p>Budget: ${budget}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}