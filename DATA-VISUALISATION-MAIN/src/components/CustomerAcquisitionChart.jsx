import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { format, parseISO } from 'date-fns';
import { customerData } from './data/salesData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CustomerAcquisitionChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const labels = customerData.map(item => format(parseISO(item.date), 'MMM yyyy'));

    setChartData({
      labels,
      datasets: [
        {
          label: 'New Customers',
          data: customerData.map(item => item.newCustomers),
          backgroundColor: 'rgba(53, 162, 235, 0.7)',
        },
        {
          label: 'Returning Customers',
          data: customerData.map(item => item.returningCustomers),
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
  };

  return <Bar options={options} data={chartData} />;
}
