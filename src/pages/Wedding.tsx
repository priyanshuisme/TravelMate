import { useState, FormEvent} from 'react';
import { InputField } from '../components/forms/InputField';
import { Heart, Calendar, Users, DollarSign, MapPin, Loader } from 'lucide-react';

interface FormErrors {
  [key: string]: string;
}

export function Wedding() {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [style, setStyle] = useState('');
  const [showPlan, setShowPlan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const weddingStyles = [
    'Traditional',
    'Modern',
    'Beach',
    'Destination',
    'Rustic',
    'Luxury'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!date) newErrors.date = 'Wedding date is required';
    if (!guests) newErrors.guests = 'Number of guests is required';
    if (!budget) newErrors.budget = 'Budget is required';
    if (!location) newErrors.location = 'Location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="relative h-[400px] bg-cover bg-center"
           style={{backgroundImage: 'url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?cs=srgb&dl=pexels-asadphoto-169198.jpg&fm=jpg)'}}>
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Plan Your Dream Wedding
              </h1>
              <p className="text-xl text-white/90">
                Let us make your special day perfect
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-pink-500 transition-colors">
                      <Calendar className="text-pink-600 w-5 h-5" />
                      <InputField
                        label="Wedding Date"
                        type="date"
                        value={date}
                        onChange={(value: string) => setDate(value)}
                        error={errors.date}
                        className="w-full focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-pink-500 transition-colors">
                      <Users className="text-pink-600 w-5 h-5" />
                      <InputField
                        label="Number of Guests"
                        type="number"
                        value={guests}
                        onChange={(value: string) => setGuests(value)}
                        error={errors.guests}
                        placeholder="Expected guests"
                        className="w-full focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-pink-500 transition-colors">
                    <MapPin className="text-pink-600 w-5 h-5" />
                    <InputField
                      label="Wedding Location"
                      value={location}
                      onChange={(value: string) => setLocation(value)}
                      error={errors.location}
                      placeholder="Preferred location"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-pink-500 transition-colors">
                    <DollarSign className="text-pink-600 w-5 h-5" />
                    <InputField
                      label="Budget"
                      type="number"
                      value={budget}
                      onChange={(value: string) => setBudget(value)}
                      error={errors.budget}
                      placeholder="Your budget"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Wedding Style</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {weddingStyles.map((wStyle) => (
                      <button
                        key={wStyle}
                        type="button"
                        onClick={() => setStyle(wStyle)}
                        className={`p-3 text-sm rounded-lg border transition-colors
                                ${style === wStyle 
                                  ? 'border-pink-500 bg-pink-50 text-pink-700' 
                                  : 'border-gray-200 hover:border-pink-500'}`}
                      >
                        {wStyle}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-pink-600 text-white rounded-lg
                         hover:bg-pink-700 transition-colors disabled:opacity-50
                         font-medium text-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5" />
                    <span>Plan My Wedding</span>
                  </>
                )}
              </button>
            </form>

            {showPlan && (
              <div className="mt-8 p-6 bg-pink-50 border border-pink-200 rounded-lg">
                <h2 className="text-xl font-semibold text-pink-800 mb-4">
                  Wedding Plan Overview
                </h2>
                <div className="space-y-2 text-pink-700">
                  <p>Date: {date}</p>
                  <p>Guests: {guests}</p>
                  <p>Location: {location}</p>
                  <p>Budget: ${budget}</p>
                  {style && <p>Style: {style}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
