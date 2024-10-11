import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PatentCards from './components/PatentCard';
import PatentabilityAnalysis from './components/PatentabilityAnalysis';
import MyChartComponent from './components/MyChartComponent';
import Logout from './components/Logout';
import ErrorBoundary from './components/ErrorBoundary';
import CreatePatentForm from './components/CreatePatentForm';
import UpdatePatentForm from './components/UpdatePatentForm';
import UserAccount from './components/UserAccount';
import PriorArtComponent from './components/PriorArtComponent'; // Import the new component
import { UserProvider } from './context/UserContext';

function App() {
  const [token, setToken] = useState('');

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register setToken={setToken} />} />
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/create-patent" element={<CreatePatentForm />} />
              <Route path="/patents/:patentId/update" element={<UpdatePatentForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patents" element={<PatentCards />} />
              <Route path="/patents/:id/analysis" element={<PatentabilityAnalysis />} />
              <Route path="/patents/:id/chart" element={<MyChartComponent />} />
              <Route path="/patents/:id/prior_art" element={<PriorArtComponent />} /> {/* Add this line */}
              <Route path="/logout" element={<Logout />} />
              <Route path="/user-account" element={<UserAccount />} />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

