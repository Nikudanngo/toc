"use client";
import { useEffect, useState } from "react";
import { FormData } from "../types";
import { KaguyaVariants } from "./Item";
import Image from "next/image";
import { IoTrashBinOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { auth } from "@/config/Firebase";
import { EmailModal } from "./EmailModal";

export const Cart = (props: {
  cart: FormData[] | [];
  isCartOpen: boolean;
  onClose: () => void;
}) => {
  const { cart, isCartOpen, onClose } = props;
  const [cartState, setCartState] = useState<FormData[]>(cart);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    setCartState(cart);
  }, [cart]);

  const totalAmount = cartState.reduce((acc, item) => {
    const allAmount = acc + item.amount;
    return allAmount;
  }, 0);

  const totalAmountPrice = (allAmount: number) => {
    if (allAmount < 3) {
      return allAmount * KaguyaVariants["assort"][1];
    } else if (allAmount < 5) {
      return allAmount * KaguyaVariants["assort"][3];
    } else if (allAmount < 10) {
      return allAmount * KaguyaVariants["assort"][5];
    } else if (allAmount < 20) {
      return allAmount * KaguyaVariants["assort"][10];
    } else {
      return allAmount * KaguyaVariants["assort"][20];
    }
  };

  const onCheckout = () => {
    if (!user) {
      setIsOpenModal(true);
      return;
    }
    localStorage.removeItem("cart");
    fetch("/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({
        items: cart,
        email: user.email,
        description: "KAGUYA",
        amount: totalAmountPrice(totalAmount),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push(`/payment/${data.clientSecret}`);
      });
  };

  return (
    <>
      {cart.length !== 0 && isCartOpen && (
        <div className="sticky border bg-white/40 backdrop-blur-md w-full z-10 bottom-0">
          <div className="flex justify-between items-center m-4">
            <h2 className="text-xl font-bold">カート</h2>
            <div className="flex gap-4">
              <button
                className="border font-bold rounded-md px-3 py-2"
                onClick={onClose}
              >
                閉じる
              </button>
              <button
                className="border bg-blue-600 rounded-md font-bold text-white px-3 py-2"
                onClick={onCheckout}
              >
                注文する
              </button>
            </div>
          </div>
          <div className="m-4 flex gap-2">
            {user ? (
              <p>
                領収書送信先:{" "}
                <span>
                  <button
                    className="text-blue-500 underline"
                    onClick={() => {
                      window.localStorage.removeItem("emailForSignIn");
                      setIsOpenModal(true);
                    }}
                  >
                    {user.email}
                  </button>
                </span>
              </p>
            ) : (
              <p>
                <span>
                  <button
                    className="text-blue-500 underline"
                    onClick={() => {
                      setIsOpenModal(true);
                    }}
                  >
                    ログイン
                  </button>
                </span>
                してください
              </p>
            )}
          </div>
          <div className="overflow-y-scroll border p-2 rounded-md shadow-inner h-80 mt-6 mx-4 mb-2 bg-zinc-200">
            <div className="flex flex-col gap-3">
              {cartState.map((item) => (
                <div className="border border-white p-2" key={item.id}>
                  <div className="grid grid-cols-[1fr_auto]">
                    <div className="text-sm flex justify-start items-start gap-4">
                      <p className="text-lg">{item.product}</p>
                      <Image
                        className="border-2 p-0.5 rounded-md"
                        src={
                          KaguyaVariants[item.shape]["colors"][item.color].image
                        }
                        width={100}
                        height={100}
                        alt={item.color + "_" + item.shape}
                      />
                      <div className="grid grid-cols-2 gap-1 my-auto">
                        <p className="">{item.shape}</p>
                        <p className="">{item.color}</p>
                        <p className="">{item.amount}個</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => {
                          const newCart = cartState.filter(
                            (cartItem) => cartItem.id !== item.id
                          );
                          localStorage.setItem("cart", JSON.stringify(newCart));
                          setCartState(newCart);
                        }}
                      >
                        <IoTrashBinOutline className="text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 my-4 text-xl font-bold">
            <p>
              {totalAmount}
              <span className="text-base">個</span>
            </p>
            <p>
              {totalAmountPrice(totalAmount)}
              <span className="text-base">円(税込)</span>
            </p>
          </div>
        </div>
      )}
      {isOpenModal && (
        <EmailModal
          open={isOpenModal}
          onClose={() => {
            setIsOpenModal(false);
          }}
        />
      )}
    </>
  );
};
