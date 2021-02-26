import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {

    const[{ basket,user},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://d3ow2108bmqeui.cloudfront.net/marketing/CASH-ON-DELIVERY_40k.jpg"
                alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h3>Hello! {user?.email}</h3>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one click
                            on button "Add to basket" next to the item. 
                        </p>
                    </div>

                ):(
                    <div>
                        <h3>Hello! {user?.email}</h3>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List out all of the Checkout Products */}
                        {basket?.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />    
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>    
            )}    
        </div>
    );
}

export default Checkout;

