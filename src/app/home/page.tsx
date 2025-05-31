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

const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Monthly Sales',
            data: [22, 39, 23, 35, 18, 42, 28], // More realistic data
            borderColor: `rgba(79, 70, 229, 1)`, // Indigo color
            backgroundColor: `rgba(79, 70, 229, 0.1)`,
            fill: true,
            tension: 0.3, // Add some curve to the line
        },
    ],
};

const doughnutData = {
    labels: ['Electronics', 'Apparel', 'Books'],
    datasets: [
        {
            label: 'Product Categories',
            data: [45, 30, 25],
            backgroundColor: ['#6366F1', '#3B82F6', '#1D4ED8'], // Different shades of blue
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
        text: "Y Axis Label",
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
      position: "top" as const,  // valid values only
      align: "center" as const,  // "start" | "center" | "end"
      labels: {
        color: "#333",
        usePointStyle: true,
        boxWidth: 8,
      },
    },
    title: {
      display: true,
      text: "Line Chart Example",
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
            text: 'Product Category Distribution',
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
                        Dashboard Overview
                    </h1>
                    <p className="text-gray-500 text-sm">Analytics and insights at a glance</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {/* Sales Chart Card */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6`}>
                        <Line data={lineData} options={lineOptions} height={300} />
                    </div>

                    {/* Product Distribution Chart Card */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6`}>
                        <Doughnut data={doughnutData} options={doughnutOptions} height={300} />
                    </div>

                    {/* Example of another card (you can add more) */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6 flex items-center justify-between`}>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Total Revenue</h3>
                            <p className="text-2xl font-bold text-green-500">$12,580</p>
                        </div>
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    {/* Another example card */}
                    <div className={`${cardBackgroundColor} ${cardShadow} ${borderRadius} p-6 flex items-center justify-between`}>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">New Users</h3>
                            <p className="text-2xl font-bold text-blue-500">45</p>
                        </div>
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20h18M5 19a2 2 0 01-2-2v-5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2h-4l-2 2-2-2H5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
