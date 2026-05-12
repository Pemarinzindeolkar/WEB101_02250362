import './App.css';

import MonthlySalesChart from './components/MonthlySalesChart';
import ProductCategoryChart from './components/ProductCategoryChart';
import CustomerAcquisitionChart from './components/CustomerAcquisitionChart';
import WeeklyVisitorsChart from './components/WeeklyVisitorsChart';

export default function App() {
  return (
    <main className="main">
      <h1>Sales Analytics Dashboard</h1>

      <div className="grid">
        <section className="card">
          <h2>Monthly Sales Performance</h2>
          <div className="chartContainer">
            <MonthlySalesChart />
          </div>
        </section>

        <section className="card">
          <h2>Product Category Distribution</h2>
          <div className="chartContainer">
            <ProductCategoryChart />
          </div>
        </section>

        <section className="card">
          <h2>Customer Acquisition</h2>
          <div className="chartContainer">
            <CustomerAcquisitionChart />
          </div>
        </section>

        <section className="card">
          <h2>Weekly Visitors</h2>
          <div className="chartContainer">
            <WeeklyVisitorsChart />
          </div>
        </section>
      </div>
    </main>
  );
}