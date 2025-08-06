import { useSelector } from "react-redux";

function Orders() {
  const orderProduct = useSelector(globalState => globalState.Orders);

  const styles = {
    outerWrapper: {
      backgroundColor: '#f4f6f8',
      minHeight: '40vh',
      padding: '40px 20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      marginTop: '80px', // GAP BELOW NAVBAR
      marginLeft: '550px';
    },
    header: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '40px',
      fontSize: '32px',
      fontWeight: '600',
    },
    ordersGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      justifyContent: 'center',
    },
    orderEntry: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      width: '360px',
      listStyle: 'none',
      transition: 'transform 0.3s ease',
    },
    orderInfo: {
      marginBottom: '16px',
      borderBottom: '1px solid #e0e0e0',
      paddingBottom: '12px',
      fontSize: '15px',
      color: '#444',
    },
    orderItemsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    orderItem: {
      backgroundColor: '#f9fafb',
      marginBottom: '10px',
      borderRadius: '8px',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '14px',
      color: '#333',
    },
    orderImage: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '5px',
      marginBottom: '10px',
    },
    totalPaid: {
      marginTop: '15px',
      fontWeight: '600',
      color: '#2e7d32',
      fontSize: '16px',
      textAlign: 'right',
    },
    noOrders: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
      fontSize: '24px',
      color: '#777',
      fontWeight: '500',
      textAlign: 'center',
      flexDirection: 'column',
    },
  };

  const orderItemsList = orderProduct.map((orders, index) => (
    <li key={index} style={styles.orderEntry}>
      <div style={styles.orderInfo}>
        <p><strong>Order ID:</strong> {orders.orderId}</p>
        <p><strong>Date:</strong> {orders.date}</p>
      </div>
      <ul style={styles.orderItemsList}>
        {orders.items.map((item, idx) => (
          <li key={idx} style={styles.orderItem}>
            <img src={item.image} alt={item.name} style={styles.orderImage} />
            <p><strong>Item:</strong> {item.name}</p>
            <p><strong>Price:</strong> ₹{item.price.toFixed(2)}</p>
            <p><strong>Qty:</strong> {item.quantity}</p>
            <p><strong>Total:</strong> ₹{(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <p style={styles.totalPaid}>Total Paid: ₹{orders.finalPrice.toFixed(2)}</p>
    </li>
  ));

  return (
    <div style={styles.outerWrapper}>
      <h2 style={styles.header}>🧾 Your Order History</h2>
      {orderProduct.length === 0 ? (
        <div style={styles.noOrders}>🛒 No purchase History available</div>
      ) : (
        <ul style={styles.ordersGrid}>{orderItemsList}</ul>
      )}
    </div>
  );
}

export default Orders;
