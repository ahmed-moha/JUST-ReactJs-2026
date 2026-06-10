import Navbar from './components/Navbar';
import Footer from './components/Footer';


import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
      <AppRoutes/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
