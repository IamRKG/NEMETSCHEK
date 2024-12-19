import LocationTree from '../components/LocationTree';

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Location Management</h1>
        <p className="text-slate-600 mb-8">Browse locations and view floor plans</p>
        <LocationTree />
      </div>
    </div>
  );
};

export default LocationPage;
