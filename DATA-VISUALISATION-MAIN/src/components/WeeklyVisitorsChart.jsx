import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { weeklyVisitors } from './data/salesData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function WeeklyVisitorsChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const labels = weeklyVisitors.map(item => `Week ${item.week}`);

    setChartData({
      labels,
      datasets: [
        {
          fill: true,
          label: 'Weekly Visitors',
          data: weeklyVisitors.map(item => item.visitors),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line options={options} data={chartData} />;
}
