'use client';
import React, { useState } from 'react';
import { BellIcon, CogIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import SideBar from '@/components/SideBar';

interface NotificationSetting {
  id: number;
  name: string;
  enabled: boolean;
}

export default function SettingsPage() {
  const [notificationTypes, setNotificationTypes] = useState<NotificationSetting[]>([
    { id: 1, name: 'High Usage Alert', enabled: true },
    { id: 2, name: 'Device Status Change', enabled: true },
    { id: 3, name: 'Savings Milestones', enabled: false },
    { id: 4, name: 'Maintenance Reminders', enabled: true },
  ]);

  const [maxTemp, setMaxTemp] = useState(26);
  const [minTemp, setMinTemp] = useState(20);
  const [automationLevel, setAutomationLevel] = useState('medium');
  const [aiOptimization, setAiOptimization] = useState(true);

  const toggleNotification = (id: number) => {
    setNotificationTypes(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, enabled: !notification.enabled } : notification
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      
      <main className="flex-1 p-6 md:p-8 lg:p-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-2">Manage your system preferences and notifications</p>
          </div>

          {/* System Preferences Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h2 className="flex items-center space-x-3 text-xl font-semibold text-gray-800">
                <CogIcon className="h-6 w-6 text-blue-600" />
                <span>System Preferences</span>
              </h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Temperature Controls */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Temperature Thresholds</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">Max Comfortable Temp</label>
                      <span className="text-sm font-medium text-blue-600">{maxTemp}°C</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="30"
                      step="1"
                      value={maxTemp}
                      onChange={(e) => setMaxTemp(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>20°C</span>
                      <span>30°C</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">Min Comfortable Temp</label>
                      <span className="text-sm font-medium text-blue-600">{minTemp}°C</span>
                    </div>
                    <input
                      type="range"
                      min="16"
                      max="24"
                      step="1"
                      value={minTemp}
                      onChange={(e) => setMinTemp(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>16°C</span>
                      <span>24°C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Automation */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">AI Automation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Automation Level</label>
                    <div className="relative">
                      <select
                        value={automationLevel}
                        onChange={(e) => setAutomationLevel(e.target.value)}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white border"
                      >
                        <option value="low">Low (Manual Control)</option>
                        <option value="medium">Medium (Balanced)</option>
                        <option value="high">High (Max Savings)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <label htmlFor="ai-optimization" className="block text-sm font-medium text-gray-700">
                        AI Optimization
                      </label>
                      <p className="text-xs text-gray-500 mt-1">Automatically adjust settings for efficiency</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        id="ai-optimization"
                        className="sr-only peer"
                        checked={aiOptimization}
                        onChange={(e) => setAiOptimization(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h2 className="flex items-center space-x-3 text-xl font-semibold text-gray-800">
                <BellIcon className="h-6 w-6 text-blue-600" />
                <span>Notifications</span>
              </h2>
            </div>
            
            <div className="p-6">
              <div className="divide-y divide-gray-200">
                {notificationTypes.map((notification) => (
                  <div key={notification.id} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{notification.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {notification.enabled ? 'Notifications enabled' : 'Notifications disabled'}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notification.enabled}
                        onChange={() => toggleNotification(notification.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Device Management Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h2 className="flex items-center space-x-3 text-xl font-semibold text-gray-800">
                <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600" />
                <span>Device Management</span>
              </h2>
            </div>
            
            <div className="p-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-6 flex items-center space-x-2">
                <span>+</span>
                <span>Add New Device</span>
              </button>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <DevicePhoneMobileIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Living Room AC</p>
                      <p className="text-sm text-gray-500">Connected via WiFi</p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1 rounded hover:bg-red-50 transition-colors duration-200">
                    Remove
                  </button>
                </div>
                
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <DevicePhoneMobileIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Kitchen Lights</p>
                      <p className="text-sm text-gray-500">Connected via Zigbee</p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1 rounded hover:bg-red-50 transition-colors duration-200">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}