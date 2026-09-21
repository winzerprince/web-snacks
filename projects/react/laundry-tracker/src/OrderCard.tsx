interface OrderCardProps {
  customer: string;
  items: number;
  status: string;
}

function OrderCard({ customer, items, status }: OrderCardProps) {
  return (
    <div className="order-card">
      <h2>{customer}</h2>
      <p>{items} items - {status}</p>
    </div>

  )
}

export default OrderCard;
