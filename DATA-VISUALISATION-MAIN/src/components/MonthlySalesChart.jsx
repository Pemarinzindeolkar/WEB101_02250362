import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlySales } from './data/salesData';

export default function MonthlySalesChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={monthlySales} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} name="Sales" />
        <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={2} name="Profit" />
        <Line type="monotone" dataKey="target" stroke="#ff7300" strokeDasharray="5 5" name="Target" />
      </LineChart>
    </ResponsiveContainer>
  );
}
