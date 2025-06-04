'use client';

import React from 'react';
import {
    BoltIcon,
} from '@heroicons/react/24/outline';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import SideBar from '@/components/SideBar';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const textColor = 'gray-700';
const cardBackgroundColor = 'white';
const cardShadow = 'shadow-md';
const borderRadius = 'rounded-lg';

// Electricity consumption over 7 months in kWh (example data)
const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Electricity Consumption (kWh)',
            data: [350, 320, 310, 280, 260, 230, 200],
            borderColor: `rgba(34, 197, 94, 1)`, // Green color
            backgroundColor: `rgba(34, 197, 94, 0.1)`,
            fill: true,
            tension: 0.3,
        },
    ],
};

// Electricity cost savings by appliance category in dollars
const doughnutData = {
    labels: ['Lighting', 'Heating', 'Appliances'],
    datasets: [
        {
            label: 'Cost Savings ($)',
            data: [120, 250, 100],
            backgroundColor: ['#10B981', '#059669', '#047857'], // Different green shades
            hoverOffset: 4,
        },
    ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "kWh",
        color: "#333",
      },
      grid: {
        borderColor: "#888",
        color: "#ccc",
        drawBorder: true,
        drawTicks: true,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#333",
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      align: "center" as const,
      labels: {
        color: "#333",
        usePointStyle: true,
        boxWidth: 8,
      },
    },
    title: {
      display: true,
      text: "Monthly Electricity Consumption",
      font: {
        size: 18,
        weight: "bold" as const,
      },
    },
  },
};

const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right' as const,
            align: 'center' as const,
            labels: {
                color: textColor,
                usePointStyle: true,
                boxWidth: 10,
            },
        },
        title: {
            display: true,
            text: 'Cost Savings by Appliance Category',
            align: 'start' as const,
            font: {
                size: 18,
                weight: 600,
            },
            color: textColor,
            padding: {
                top: 10,
                bottom: 20,
            },
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
        },
    },
};

export default function Homepage() {
    return (
        <div className="bg-gray-100 min-h-screen flex">
            <SideBar />
            <div className="flex-1 p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <BoltIcon className="w-6 h-6 text-yellow-500" />
                        Electricity Dashboard
                    </h1>
                    <p className="text-gray-500 text-sm">Monitor electricity consumption and savings</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {/* Electricity Consumption Chart Card */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6`}>
                        <Line data={lineData} options={lineOptions} height={300} />
                    </div>

                    {/* Cost Savings Chart Card */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6`}>
                        <Doughnut data={doughnutData} options={doughnutOptions} height={300} />
                    </div>

                    {/* Total Money Saved Card */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6 flex items-center justify-between`}>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Total Money Saved</h3>
                            <p className="text-2xl font-bold text-green-600">Rs 4,520</p>
                        </div>
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    {/* Devices Monitored Card */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6 flex items-center justify-between`}>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Devices Monitored</h3>
                            <p className="text-2xl font-bold text-blue-600">3</p>
                        </div>
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20h18M5 19a2 2 0 01-2-2v-5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2h-4l-2 2-2-2H5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
