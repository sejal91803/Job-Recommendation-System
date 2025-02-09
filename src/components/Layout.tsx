import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, MessageSquare, X } from 'lucide-react';

interface Notification {
  id: string;
  message: string;
  time: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      message: 'New Job Posted\nBased on your resume',
      time: '9:41 AM'
    },
    {
      id: '2',
      message: 'New Job Posted\nBased on your interest',
      time: '6:00 AM'
    }
  ]);

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-sm w-full shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img 
                  src="https://res.cloudinary.com/djgvrpf4x/image/upload/v1738731662/logo_geulpv.png"
                  alt="HireEase Logo" 
                  className="h-14 w-auto"
                />
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2">
                    About Us
                  </Link>
                  <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="text-gray-700 hover:text-purple-600">
                <MessageSquare className="h-6 w-6" />
              </button>
              <button 
                className="text-gray-700 hover:text-purple-600 relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-6 w-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
                S
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed right-4 top-16 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <button 
                onClick={() => setShowNotifications(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className="flex justify-between items-start p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Bell className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 whitespace-pre-line">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {notifications.length === 0 && (
                <p className="text-center text-gray-500 py-4">No new notifications</p>
              )}
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}