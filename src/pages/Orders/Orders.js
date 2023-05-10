import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders,setOrders] = useState([])
      
 
   useEffect(()=>{
         fetch(`http://localhost:5000/orders?email=${user?.email}`)
         .then(res => res.json())
         .then(data => setOrders(data))
         .catch(err=>console.log(err))
    },[user?.email])


    const handleDelete = id => {
      const proceed = window.confirm("Are You Sure You delete This");
      if(proceed){
        fetch(`http://localhost:5000/orders/${id}`,{
        method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.deletedCount >0){
          alert("succesfully deleterd");
          const remaining = orders.filter(ord => ord._id !== id);
          setOrders(remaining);
        }
      })
      }
    }
    
    
    const handleUpdate = id =>{
       fetch(`http://localhost:5000/orders/${id}`,{
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved'})
       })
       .then(res => res.json())
       .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            const approved = orders.find(odr => odr._id === id);
            approved.status = 'Approved'
            const remaining = orders.filter(odr=>odr._id !== id);

            const newOrder = [approved,...remaining];

            setOrders(newOrder);

          }
       })
       
    }

    return (
      <div>
        <h2 className="text-5xl">You have: {orders.length}</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleUpdate= {handleUpdate}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Orders;