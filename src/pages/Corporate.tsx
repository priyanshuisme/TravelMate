import { useState, FormEvent} from 'react';
import { InputField } from '../components/forms/InputField';
import { Building2, Users, Calendar, MapPin, DollarSign, CheckCircle, Loader } from 'lucide-react';

interface FormErrors {
  [key: string]: string;
}

export function Corporate() {
  const [eventType, setEventType] = useState('');
  const [attendees, setAttendees] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [showVenues, setShowVenues] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const eventTypes = [
    'Conference',
    'Team Building',
    'Training',
    'Product Launch',
    'Board Meeting',
    'Corporate Retreat'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!eventType) newErrors.eventType = 'Event type is required';
    if (!attendees) newErrors.attendees = 'Number of attendees is required';
    if (!date) newErrors.date = 'Date is required';
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
      setShowVenues(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative h-[400px] bg-cover bg-center"
           style={{backgroundImage: 'url(https://wallpaperaccess.com/full/3175367.jpg)'}}>
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Corporate Event Planning
              </h1>
              <p className="text-xl text-white/90">
                Professional venues for successful business events
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Event Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`p-3 text-sm rounded-lg border transition-colors
                              ${eventType === type 
                                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                : 'border-gray-200 hover:border-blue-500'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.eventType && (
                  <p className="text-sm text-red-600 mt-1">{errors.eventType}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                    <Users className="text-blue-600 w-5 h-5" />
                    <InputField
                      label="Number of Attendees"
                      type="number"
                      value={attendees}
                      onChange={(value: string) => setAttendees(value)}
                      error={errors.attendees}
                      placeholder="Expected attendees"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                    <Calendar className="text-blue-600 w-5 h-5" />
                    <InputField
                      label="Event Date"
                      type="date"
                      value={date}
                      onChange={(value: string) => setDate(value)}
                      error={errors.date}
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                  <MapPin className="text-blue-600 w-5 h-5" />
                  <InputField
                    label="Location"
                    value={location}
                    onChange={(value: string) => setLocation(value)}
                    error={errors.location}
                    placeholder="Preferred location"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-blue-500 transition-colors">
                  <DollarSign className="text-blue-600 w-5 h-5" />
                  <InputField
                    label="Budget (Optional)"
                    type="number"
                    value={budget}
                    onChange={(value: string) => setBudget(value)}
                    placeholder="Estimated budget"
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
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" />
                    <span>Finding venues...</span>
                  </>
                ) : (
                  <>
                    <Building2 className="w-5 h-5" />
                    <span>Find Venues</span>
                  </>
                )}
              </button>
            </form>

            {showVenues && (
              <div className="mt-8 space-y-6">
                <h2 className="text-2xl font-semibold">Recommended Venues</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((venue) => (
                    <div key={venue} className="p-4 border rounded-lg hover:border-blue-500 transition-colors">
                      <h3 className="font-semibold">Corporate Venue {venue}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Capacity: {parseInt(attendees) + 50} people
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-blue-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Available on {date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}