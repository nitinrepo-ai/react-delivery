import { useDispatch, useSelector } from "react-redux";
import './store';
import './Veg.css';
import { AddToCart } from "./store";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


function NonVeg() {
  const dispatch = useDispatch();
  const nonvegproducts = useSelector(globalState => globalState.products.nonveg);

  const [selectedRanges, setSelectedRanges] = useState([]);

  const priceRanges = [
    { label: "Below ₹100", min: 0, max: 100 },
    { label: "₹101 - ₹200", min: 101, max: 200 },
    { label: "₹201 - ₹300", min: 201, max: 300 },
    { label: "₹301 - ₹400", min: 301, max: 400 },
    { label: "₹401 - ₹500", min: 401, max: 500 },
    { label: "₹501 - ₹600", min: 501, max: 600 },
    { label: "Above ₹601", min: 601, max: Infinity }
  ];

  const handleRangeChange = (range) => {
    const exists = selectedRanges.find(r => r.label === range.label);
    if (exists) {
      setSelectedRanges(selectedRanges.filter(r => r.label !== range.label));
    } else {
      setSelectedRanges([...selectedRanges, range]);
    }
  };

  const filteredProducts = selectedRanges.length === 0
    ? nonvegproducts
    : nonvegproducts.filter(product =>
        selectedRanges.some(range => product.price >= range.min && product.price <= range.max)
      );

  const vegListItems = filteredProducts.map((product, index) => (
    <li key={index}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} Rs</p>
      <button onClick={() => {dispatch(AddToCart(product));toast.success('item added to cart')}}>Add to Cart</button>
    </li>
  ));
 
  return (
    <>
      <h1 style={{ textAlign: "center", color: 'green' }}>Veg Items</h1>

      <div className="container">
        <ToastContainer position="top-right" autoClose={5000}/>
        <div className="sidebar">
          <strong>Filter by Price:</strong>
          {priceRanges.map((range, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedRanges.some(r => r.label === range.label)}
                  onChange={() => handleRangeChange(range)}
                />
                {range.label}
              </label>
            </div>
          ))}
        </div>

        <div className="product-list">
          <ol>
            {vegListItems}
          </ol>
        </div>
      </div>
    </>
  );
}

export default NonVeg;
