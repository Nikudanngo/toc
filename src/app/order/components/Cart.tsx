"use client";

import { FormData } from "../types";
export const Cart = (props: {
  cart: FormData[] | [];
  isCartOpen: boolean;
  onClose: () => void;
}) => {
  const { cart, isCartOpen, onClose } = props;
  console.log(cart);
  return (
    <>
      {cart.length !== 0 && isCartOpen && (
        <div className="sticky border bg-white/40 backdrop-blur-sm w-full z-20 bottom-0">
          <div className="flex justify-end items-center gap-4 m-4">
            <button
              className="border font-bold rounded-md px-3 py-2"
              onClick={onClose}
            >
              閉じる
            </button>
            <button className="border bg-blue-600 rounded-md font-bold text-white px-3 py-2">
              注文する
            </button>
          </div>
          <div className="overflow-y-scroll border p-2 rounded-md shadow-inner h-80 mt-6 mx-4 mb-2">
            <div>カートの中身</div>
            {cart.map((item, index) => (
              <div className="border" key={index}>
                <div>{item.product}</div>
                <div>{item.shape}</div>
                <div>{item.color}</div>
                <div>{item.amount}</div>
                <div>{item.id}</div>
              </div>
            ))}
            <div>合計金額</div>
            <div>
              <button
                onClick={() => {
                  localStorage.removeItem("cart");
                  window.location.reload();
                }}
                className="bg-blue-600 text-white p-2 rounded-md"
              >
                reset
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
