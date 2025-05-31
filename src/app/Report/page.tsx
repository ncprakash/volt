'use client';

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import SideBar from '@/components/SideBar';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export default function ReportsPage() {
  const dailyData = [
    { day: 'Mon', usage: 12.5, cost: 2.75 },
    { day: 'Tue', usage: 14.2, cost: 3.12 },
    { day: 'Wed', usage: 11.8, cost: 2.60 },
    { day: 'Thu', usage: 13.5, cost: 2.97 },
    { day: 'Fri', usage: 15.1, cost: 3.32 },
    { day: 'Sat', usage: 9.8, cost: 2.16 },
    { day: 'Sun', usage: 8.5, cost: 1.87 },
  ];

  const monthlyData = [
    { month: 'Jan', usage: 420, cost: 92.4, savings: 12 },
    { month: 'Feb', usage: 380, cost: 83.6, savings: 18 },
    { month: 'Mar', usage: 410, cost: 90.2, savings: 15 },
    { month: 'Apr', usage: 350, cost: 77.0, savings: 22 },
    { month: 'May', usage: 320, cost: 70.4, savings: 25 },
  ];

  const deviceData = [
    { name: 'AC', value: 45 },
    { name: 'Lights', value: 25 },
    { name: 'Fan', value: 30 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      
      <main className="flex-1 p-6 md:p-8 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Energy Reports</h1>
              <p className="text-gray-600 mt-1">Track and analyze your energy consumption patterns</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Select.Root defaultValue="day">
                <Select.Trigger className="inline-flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 text-sm gap-2 shadow-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-4 w-4 text-gray-500" />
                    <Select.Value />
                  </div>
                  <Select.Icon>
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Content className="bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <Select.Viewport className="p-1">
                    <Select.Group>
                      <Select.Item value="day" className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center rounded-md text-sm">
                        <CalendarDaysIcon className="h-4 w-4 mr-2 text-gray-500" />
                        <Select.ItemText>Daily</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="week" className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center rounded-md text-sm">
                        <CalendarDaysIcon className="h-4 w-4 mr-2 text-gray-500" />
                        <Select.ItemText>Weekly</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="month" className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center rounded-md text-sm">
                        <CalendarDaysIcon className="h-4 w-4 mr-2 text-gray-500" />
                        <Select.ItemText>Monthly</Select.ItemText>
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Root>
              
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 text-sm shadow-sm">
                <ArrowDownTrayIcon className="h-4 w-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Main Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Daily Consumption */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <ChartBarIcon className="h-5 w-5 text-blue-500" />
                  Daily Consumption (kWh)
                </h2>
                <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">Last 7 days</span>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                    <XAxis 
                      dataKey="day" 
                      tick={{ fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Bar 
                      dataKey="usage" 
                      fill="#3B82F6" 
                      radius={[4, 4, 0, 0]} 
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Daily Cost */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-emerald-500" />
                  Daily Cost ($)
                </h2>
                <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full">Last 7 days</span>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                    <XAxis 
                      dataKey="day" 
                      tick={{ fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fill: '#6b7280' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Bar 
                      dataKey="cost" 
                      fill="#10B981" 
                      radius={[4, 4, 0, 0]} 
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5 text-indigo-500" />
                Monthly Trends
              </h2>
              <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">Year to date</span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    yAxisId="left"
                    tick={{ fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    tick={{ fill: '#6b7280' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{
                      paddingTop: '20px'
                    }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="usage"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#3B82F6', strokeWidth: 2 }}
                    activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                    name="Usage (kWh)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="savings"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#F59E0B', strokeWidth: 2 }}
                    activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
                    name="Savings (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Device Distribution */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <LightBulbIcon className="h-5 w-5 text-amber-500" />
                  Device Distribution
                </h2>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                      formatter={(value, name) => [`${value}%`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Savings Card */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex flex-col h-full">
                <h2 className="text-lg font-semibold text-gray-800 mb-5 flex items-center gap-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-emerald-500" />
                  Savings This Month
                </h2>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-4xl font-bold text-emerald-600">$23.10</p>
                  <p className="text-gray-500 mt-2">Compared to last month</p>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>0%</span>
                      <span>25% improvement</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" 
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-emerald-800">
                      You re on track to save <span className="font-semibold">~$28</span> this month!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Predictions */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex flex-col h-full">
                <h2 className="text-lg font-semibold text-gray-800 mb-5 flex items-center gap-2">
                  <LightBulbIcon className="h-5 w-5 text-blue-500" />
                  AI Insights
                </h2>
                <div className="flex-1 space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">Next Month Projection</p>
                    <p className="text-gray-700">~300 kWh (est. $66.00)</p>
                  </div>
                  
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <p className="font-medium text-amber-800">Potential Savings</p>
                    <p className="text-gray-700">Up to 15% with adjustments</p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-purple-800">Peak Usage Times</p>
                    <p className="text-gray-700">2pm-6pm weekdays</p>
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                    View Optimization Tips
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