'use client';

import React, { useState } from 'react';
import { ClockIcon, LightBulbIcon, DeviceTabletIcon, BoltIcon } from '@heroicons/react/24/outline';
import SideBar from '@/components/SideBar';

interface Device {
  id: number;
  name: string;
  type: 'ac' | 'light' | 'fan';
  status: boolean;
  power: string;
  temp?: number;
  brightness?: number;
  speed?: number;
}

export default function DevicesPage() {
  const [devices, setDevices] = useState<Device[]>([
    { id: 1, name: 'Living Room AC', type: 'ac', status: true, power: '1.2 kW', temp: 22 },
    { id: 2, name: 'Kitchen Lights', type: 'light', status: false, power: '0 kW', brightness: 0 },
    { id: 3, name: 'Bedroom Fan', type: 'fan', status: true, power: '0.3 kW', speed: 2 },
  ]);

  const toggleDevice = (id: number) => {
    setDevices((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: !d.status } : d))
    );
  };

  const updateSetting = (
    id: number,
    setting: keyof Omit<Device, 'id' | 'name' | 'type' | 'status' | 'power'>,
    value: number
  ) => {
    setDevices((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [setting]: value } : d))
    );
  };

  const getDeviceIcon = (type: Device['type']) => {
    switch (type) {
      case 'ac':
        return <DeviceTabletIcon className="h-6 w-6 text-indigo-500" />;
      case 'light':
        return <LightBulbIcon className="h-6 w-6 text-yellow-500" />;
      case 'fan':
        return <BoltIcon className="h-6 w-6 text-green-500" />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <main className="flex-1 p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Connected Devices</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  {getDeviceIcon(device.type)}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{device.name}</h2>
                    <div className="text-sm text-gray-500">{device.power}</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleDevice(device.id)}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                    device.status ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition ${
                      device.status ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {device.type === 'ac' && (
                  <div>
                    <label className="text-sm text-gray-700 font-medium">
                      Temperature: {device.temp}°C
                    </label>
                    <input
                      type="range"
                      min="16"
                      max="30"
                      step="1"
                      value={device.temp}
                      onChange={(e) =>
                        updateSetting(device.id, 'temp', parseInt(e.target.value))
                      }
                      className="w-full accent-indigo-500"
                    />
                  </div>
                )}

                {device.type === 'fan' && (
                  <div>
                    <label className="text-sm text-gray-700 font-medium">
                      Speed: {device.speed}/3
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      step="1"
                      value={device.speed}
                      onChange={(e) =>
                        updateSetting(device.id, 'speed', parseInt(e.target.value))
                      }
                      className="w-full accent-green-500"
                    />
                  </div>
                )}

                {device.type === 'light' && (
                  <div>
                    <label className="text-sm text-gray-700 font-medium">
                      Brightness: {device.brightness}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={device.brightness}
                      onChange={(e) =>
                        updateSetting(device.id, 'brightness', parseInt(e.target.value))
                      }
                      className="w-full accent-yellow-500"
                    />
                  </div>
                )}

                <button className="flex items-center space-x-2 text-sm text-indigo-600 hover:underline mt-3">
                  <ClockIcon className="h-4 w-4" />
                  <span>Schedule Automation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          + Add New Device
        </button>
      </main>
    </div>
  );
}
