
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface PasswordProtectionProps {
  correctPassword: string;
  onAuthenticated: () => void;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  correctPassword,
  onAuthenticated,
}) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if already authenticated from localStorage
    const authStatus = localStorage.getItem('rrrAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      onAuthenticated();
    }
  }, [onAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      localStorage.setItem('rrrAuthenticated', 'true');
      setIsAuthenticated(true);
      onAuthenticated();
      toast.success('Access granted');
    } else {
      toast.error('Incorrect password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full border border-gold">
        <img 
          src="/lovable-uploads/d33243fa-cd97-40fd-b975-d329c1b362a3.png" 
          alt="Real Rich Records" 
          className="mx-auto h-24 mb-6"
        />
        <h1 className="text-gold text-2xl font-bold text-center mb-6">Real Rich Records</h1>
        <p className="text-gray-300 text-center mb-6">This content is password protected. Please enter the password to continue.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-gold focus:border-transparent"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-gold hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-md transition duration-200"
          >
            Access Site
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;
