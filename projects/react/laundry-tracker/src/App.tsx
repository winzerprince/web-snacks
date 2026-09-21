import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import OrderCard from './OrderCard.tsx'
import './App.css'

type Status = "washing" | "delivered" | "ready";

interface Order {
  id: number;
  customer: string;
  items: number;
  status: Status;
}


function App() {


  const [orders, setOrders] = useState<Order[]>(
    [
      { id: 1, customer: "Brian", items: 3, status: "washing" },
      { id: 2, customer: "Jane", items: 2, status: "delivered" },
      { id: 3, customer: "Anton", items: 6, status: "ready" },
    ]

  )

  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState(0);

  const STATUS_FLOW: Status[] = ["washing", "ready", "delivered"];

  function advanceStatus(id: number) {
    setOrders(
      orders.map((order) => {
        if (order.id !== id) return order;
        const next = STATUS_FLOW[STATUS_FLOW.indexOf(order.status) + 1];
        return { ...order, status: next ?? order.status };
      })
    );
  }
  function addOrder() {
    const newOrder: Order = { id: Date.now(), customer: customer, items: items, status: "ready" };

    setOrders([...orders, newOrder]);

    setCustomer("");
    setItems(0);
  }

  return (
    < div className="app" >
      <h1>Laundry Tracker</h1>
      <input value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder='Customer Name' />
      <input value={items} onChange={(e) => setItems(Number(e.target.value))} placeholder='0' type="number" />
      <button onClick={addOrder}>Add Order</button>
      {
        orders.map(order =>
          <OrderCard key={order.id} customer={order.customer} items={order.items} status={order.status} onAdvance={() => advanceStatus(order.id)} />

        )
      }
    </div >
  )
}

export default App
