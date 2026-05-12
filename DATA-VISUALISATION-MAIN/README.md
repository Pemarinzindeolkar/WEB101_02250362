# Data Visualization Dashboard - Practical 7

## Project Overview

The project is a comprehensive Sales Analytics Dashboard using React with multiple charting libraries (Recharts and Chart.js) for data visualization. It displays various business metrics including monthly sales, product distribution, customer acquisition trends, and weekly visitor patterns.

---

## Technology Stack

### Frontend:
- **Framework:** React (Create React App)
- **Charting Libraries:**
  - Recharts (Line charts, Pie charts)
  - react-chartjs-2 / Chart.js (Bar charts, Area charts)
- **Date Handling:** date-fns
- **Styling:** Custom CSS (Blue & Brown Aesthetic Theme)

### Backend:
- No backend required (client-side only with mock data)

---

## Setup Instructions

### 1. Navigate to your project folder

```bash
cd DATA-VISUALISATION-MAIN
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install required charting libraries

```bash
npm install recharts react-chartjs-2 chart.js date-fns
```

### 4. Start the development server

```bash
npm start
```

### 5. Open application

Navigate to **http://localhost:3000**

---

## Project Structure

```
DATA-VISUALISATION-MAIN/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── data/
│   │   │   └── salesData.js
│   │   ├── MonthlySalesChart.jsx
│   │   ├── ProductCategoryChart.jsx
│   │   ├── CustomerAcquisitionChart.jsx
│   │   └── WeeklyVisitorsChart.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## Chart Components

### 1. Monthly Sales Chart (Line Chart with Recharts)

Displays sales performance over 12 months with three metrics: Sales, Profit, and Target.

**File:** `src/components/MonthlySalesChart.jsx`

```javascript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlySales } from './data/salesData';

export default function MonthlySalesChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={monthlySales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Sales" />
        <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
        <Line type="monotone" dataKey="target" stroke="#ff7300" strokeDasharray="5 5" name="Target" />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

### 2. Product Category Chart (Pie Chart with Recharts)

Shows percentage distribution of sales across different product categories.

**File:** `src/components/ProductCategoryChart.jsx`

```javascript
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { productSales } from './data/salesData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function ProductCategoryChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={productSales} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
          {productSales.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
```

### 3. Customer Acquisition Chart (Bar Chart with Chart.js)

Displays stacked bar chart comparing new vs returning customers over time.

**File:** `src/components/CustomerAcquisitionChart.jsx`

```javascript
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { format, parseISO } from 'date-fns';
import { customerData } from './data/salesData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CustomerAcquisitionChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const labels = customerData.map(item => format(parseISO(item.date), 'MMM yyyy'));
    setChartData({
      labels,
      datasets: [
        { label: 'New Customers', data: customerData.map(item => item.newCustomers), backgroundColor: 'rgba(53, 162, 235, 0.7)' },
        { label: 'Returning Customers', data: customerData.map(item => item.returningCustomers), backgroundColor: 'rgba(255, 99, 132, 0.7)' },
      ],
    });
  }, []);

  return <Bar options={{ responsive: true, scales: { x: { stacked: true }, y: { stacked: true } } }} data={chartData} />;
}
```

### 4. Weekly Visitors Chart (Area Chart with Chart.js)

Shows visitor trends over 8 weeks with filled area visualization.

**File:** `src/components/WeeklyVisitorsChart.jsx`

```javascript
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend } from 'chart.js';
import { weeklyVisitors } from './data/salesData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend);

export default function WeeklyVisitorsChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    setChartData({
      labels: weeklyVisitors.map(item => `Week ${item.week}`),
      datasets: [{ fill: true, label: 'Weekly Visitors', data: weeklyVisitors.map(item => item.visitors), borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.2)', tension: 0.4 }],
    });
  }, []);

  return <Line options={{ responsive: true }} data={chartData} />;
}
```

---

## Data Structure

**File:** `src/components/data/salesData.js`

| Dataset | Description | Key Fields |
|---------|-------------|------------|
| monthlySales | 12 months of sales data | month, sales, profit, target |
| productSales | Category distribution | name, value (percentage) |
| customerData | Monthly customer metrics | date, newCustomers, returningCustomers |
| weeklyVisitors | 8 weeks of visitor data | week, visitors |

---

## Styling Theme (Blue & Brown Aesthetic)

Custom CSS theme applied in `App.css`:

| Element | Color |
|---------|-------|
| Background | Soft cream (#f5f0e8) |
| Headings | Deep blue (#1a3a5c) |
| Accent/Borders | Warm brown (#8b6914) |
| Cards | White with subtle shadow |
| Hover Effect | Card lift with shadow |

---

## Features Implemented

### Visualization Features

| Feature | Library Used | Description |
|---------|--------------|-------------|
| Line Chart | Recharts | Monthly sales trends with multiple data series |
| Pie Chart | Recharts | Product category distribution with percentages |
| Stacked Bar Chart | Chart.js | Customer acquisition (new vs returning) |
| Area Chart | Chart.js | Weekly visitor trends with filled area |
| Responsive Design | Both | Charts adapt to container/window size |
| Interactive Tooltips | Both | Hover for detailed values |
| Legends | Both | Color-coded data identification |

### Performance Optimizations

- Components only re-render when their specific data changes
- Responsive containers prevent layout shifts
- Efficient data transformation with useEffect

---

## Key Technical Concepts

### Recharts vs Chart.js

| Aspect | Recharts | Chart.js |
|--------|----------|----------|
| Syntax | Declarative (JSX components) | Imperative (config objects) |
| Best for | Line, Pie, simple charts | Bar, Area, complex charts |
| Learning Curve | Easier for React devs | More universal |



---

##  Challenges & Solutions

### Challenge 1: Case-Sensitive Imports
**Issue:** `customerAcquisitionChart.jsx` vs `CustomerAcquisitionChart.jsx` caused module resolution errors  
**Solution:** Ensured import statements exactly match filename casing

### Challenge 2: Missing Entry Files
**Issue:** `index.html` and `index.js` were missing after manual setup  
**Solution:** Created required files with proper React 18 syntax using `createRoot`

### Challenge 3: Chart.js Registration
**Issue:** Chart.js components require explicit registration of scales/elements  
**Solution:** Used `ChartJS.register()` for all required components before rendering

### Challenge 4: ESLint Warnings
**Issue:** Anonymous default exports triggered warnings  
**Solution:** Converted to named exports where appropriate

---

## Final Output

The dashboard displays four interactive charts:

| Chart | Description |
|-------|-------------|
| Monthly Sales Performance | Line chart showing Sales ($45K-$95K), Profit ($12K-$29K), and Target trends |
| Product Category Distribution | Pie chart with 5 categories (Electronics 35%, Clothing 25%, etc.) |
| Customer Acquisition | Stacked bar chart comparing New vs Returning customers (Jan-Jun) |
| Weekly Visitors | Area chart showing visitor growth from 2,400 to 4,500 over 8 weeks |

---

## Notes

- All charts are fully responsive and adapt to window resizing
- The dashboard uses mock data - can be replaced with real API data
- Each chart component is independent and reusable
- No backend required - runs entirely in the browser

---

