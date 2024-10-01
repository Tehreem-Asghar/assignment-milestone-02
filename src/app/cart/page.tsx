"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface booktype {
  id: number;
  title: string;
  price: number;
  star: number;
  rating: number;
  Edition: string;
  Authors: string;
  image: string;
  description: string;
  Publisher: string;
  PublicationDate: string;
}

interface CartItem {
  selectedBook: booktype;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setcartItems] = useState<CartItem[]>([]);
  const [orderConfirm, setOrderConfirm] = useState<boolean>(false);

  // get data from localStorage and save in state for use
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("cart");
    if (dataFromLocalStorage) {
      setcartItems(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  const handleRemove = (id: number) => {
    const updated: CartItem[] = cartItems.filter((item) => item.selectedBook.id !== id);
    setcartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.selectedBook.price * item.quantity;
    }, 0);
  };

  const confirmOrder = () => {
    // Clear the cart from state and localStorage
    setcartItems([]);
    localStorage.removeItem("cart");
    // Show order confirmation message
    setOrderConfirm(true);
  };


  const randomId = Math.floor(Math.random() * 5000)+1

  return (
    <main className="flex justify-center items-center mt-20 p-4">
      {cartItems.length > 0|| orderConfirm  ? (
        <div className="w-full overflow-x-auto">
          {orderConfirm ? (
            <div className="text-center flex flex-col items-center mt-24 space-y-6">
              <h2 className="text-green-600 font-bold mb-4 text-xl md:text-3xl lg:text-5xl">
                Thank you! Your order has been confirmed.
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Your order ID is <strong>#{randomId}</strong>. We will notify you once your order is on its way.
              </p>
              <Link href="/books" className="text-sky-950 font-serif text-lg md:text-2xl lg:text-3xl hover:underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-4 md:p-5">Item</th>
                  <th className="p-4 md:p-5">Quantity</th>
                  <th className="p-4 md:p-5">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.selectedBook.id} className="text-center border-b border-green-400">
                    <td className="flex flex-col md:flex-row justify-center items-center space-x-4 p-2 md:p-5">
                      <Image
                        src={item.selectedBook.image}
                        alt={item.selectedBook.title}
                        height={100}
                        width={100}
                        className="rounded-md mb-2 md:mb-0 "
                      />
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{item.selectedBook.title}</h3>
                        <button
                          className="text-red-600 hover:text-red-800 mt-2 transition duration-200"
                          onClick={() => handleRemove(item.selectedBook.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td className="p-2 md:p-5">{item.quantity}</td>
                    <td className="text-green-600 p-2 md:p-5">
                      ${(item.selectedBook.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td className="text-right p-4" colSpan={2}>
                    SubTotal
                  </td>
                  <td className="text-green-600 p-4">${calculateTotalPrice().toFixed(2)}</td>
                </tr>
                <tr className="font-bold">
                  <td className="text-right p-4" colSpan={2}>
                    Delivery Charges
                  </td>
                  <td className="text-green-600 p-4">$85</td>
                </tr>
                <tr className="font-bold">
                  <td className="text-right p-4" colSpan={2}>
                    Total
                  </td>
                  <td className="text-green-600 p-4">${(calculateTotalPrice() + 85).toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <button
                      onClick={confirmOrder}
                      className="w-full h-auto p-3 bg-green-500 text-white text-2xl font-serif"
                    >
                      Confirm Order
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      ) : (
        <div className="text-center flex flex-col items-center mt-24 space-y-6">
          <h2 className="text-red-600 font-bold mb-4 text-xl md:text-3xl lg:text-5xl">
            No items in the cart
          </h2>
          <Link href="/books" className="text-sky-950 font-serif text-lg md:text-2xl lg:text-3xl hover:underline">
            Continue Shopping
          </Link>
        </div>
      )}
    </main>
  );
}
