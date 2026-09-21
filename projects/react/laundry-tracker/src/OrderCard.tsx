interface OrderCardProps {
  customer: string;
  items: number;
  status: string;
  onAdvance: () => void;
}

function OrderCard({ customer, items, status, onAdvance }: OrderCardProps) {
  console.log("render", customer);

  return (
    <div className="order-card">
      <h2>{customer}</h2>
      <p>{items} items - {status}</p>
      <button onClick={onAdvance} > Advance status</button>
    </div>

  )
}

export default OrderCard;
