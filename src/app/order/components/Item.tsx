"use client";
import { useState } from "react";
import { ItemImageCard } from "./ItemImageCard";
import ItemSlides from "./ItemSlides";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { Cart } from "./Cart";
import { FormData } from "../types";

export const KaguyaVariants = {
  triangle: {
    image: "/kaguyaImages/order/triangle.jpg",
    colors: {
      white: {
        color: "white",
        image: "/kaguyaImages/colorVariation/3_white.jpg",
      },
      black: {
        color: "black",
        image: "/kaguyaImages/colorVariation/3_black.jpg",
      },
      pink: { color: "pink", image: "/kaguyaImages/colorVariation/3_pink.jpg" },
      blue: { color: "blue", image: "/kaguyaImages/colorVariation/3_blue.jpg" },
      cream: {
        color: "cream",
        image: "/kaguyaImages/colorVariation/3_cream.jpg",
      },
    },
  },
  circle: {
    image: "/kaguyaImages/order/circle.jpg",
    colors: {
      white: {
        color: "white",
        image: "/kaguyaImages/colorVariation/0_white.jpg",
      },
      black: {
        color: "black",
        image: "/kaguyaImages/colorVariation/0_black.jpg",
      },
      pink: { color: "pink", image: "/kaguyaImages/colorVariation/0_pink.jpg" },
      blue: { color: "blue", image: "/kaguyaImages/colorVariation/0_blue.jpg" },
      cream: {
        color: "cream",
        image: "/kaguyaImages/colorVariation/0_cream.jpg",
      },
    },
  },
  assort: {
    1: 200,
    3: 180,
    5: 170,
    10: 150,
    20: 140,
  },
};

export const Item = () => {
  const { setValue, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      product: "kaguya",
      shape: "triangle",
      color: "white",
      amount: 1,
    },
  });
  const onSubmit = handleSubmit((data) => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      const cartData = cart ? JSON.parse(cart) : [];
      localStorage.setItem("cart", JSON.stringify([...cartData, data]));
      reset();
      setShape("triangle");
      setColor("white");
      setAmount(1);
    }
  });
  const [shape, setShape] = useState<FormData["shape"]>("triangle");
  const [color, setColor] = useState<FormData["color"]>("white");
  const [amount, setAmount] = useState<FormData["amount"]>(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = JSON.parse(
    (typeof window !== "undefined" && localStorage.getItem("cart")) || "[]"
  ) as FormData[] | [];
  setValue("id", Math.random().toString(36));
  return (
    <>
      <div className="my-4">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <ItemSlides
              images={[
                KaguyaVariants[shape]["colors"][color].image,
                "/kaguyaImages/order/handle.jpg",
                "/kaguyaImages/order/model.jpeg",
                "/kaguyaImages/order/repellent.jpg",
              ]}
            />
          </div>
          <form onSubmit={onSubmit}>
            <div className="w-full gap-4 flex flex-col p-4">
              <div>
                <h2 className="text-2xl">竹歯ブラシ</h2>
                <p className="text-xl font-bold">
                  <span
                    className={clsx({
                      "line-through": amount !== 1,
                    })}
                  >
                    {KaguyaVariants.assort[1]}
                  </span>
                  <span className="text-sm">円/本</span>
                  {amount !== 1 && (
                    <>
                      <span className="text-base mx-4 font-normal">→</span>
                      <span className="text-xl font-bold">
                        {KaguyaVariants.assort[amount]}
                      </span>
                      <span className="text-sm">円/本</span>
                    </>
                  )}
                </p>
                <p>竹から生まれた天然歯ブラシ</p>
              </div>
              <div>
                <p>形状:{shape}</p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-1 px-2">
                  <ItemImageCard
                    image={KaguyaVariants["triangle"]["image"]}
                    className={clsx(
                      "border-2 p-0.5 rounded-md object-none object-top w-24",
                      {
                        "border-black": shape === "triangle",
                      }
                    )}
                    text="triangle"
                    width={200}
                    onClick={() => {
                      setValue("shape", "triangle");
                      setShape("triangle");
                    }}
                  />
                  <ItemImageCard
                    image={KaguyaVariants["circle"]["image"]}
                    className={clsx(
                      "border-2 p-0.5 rounded-md object-none object-top w-24",
                      {
                        "border-black": shape === "circle",
                      }
                    )}
                    text="circle"
                    width={200}
                    onClick={() => {
                      setValue("shape", "circle");
                      setShape("circle");
                    }}
                  />
                </div>
              </div>
              <div>
                <p>色:{color}</p>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-1 px-2">
                  {shape === "triangle" &&
                    Object.entries(KaguyaVariants.triangle.colors).map(
                      ([key, value]) => (
                        <ItemImageCard
                          key={key}
                          className={clsx(
                            "border-2 p-0.5 rounded-md object-none object-[30%_top] w-24",
                            {
                              "border-black": color === key,
                            }
                          )}
                          width={180}
                          height={100}
                          image={value.image}
                          text={key}
                          onClick={() => {
                            setValue("color", key as FormData["color"]);
                            setColor(key as FormData["color"]);
                          }}
                        />
                      )
                    )}
                  {shape === "circle" &&
                    Object.entries(KaguyaVariants.circle.colors).map(
                      ([key, value]) => (
                        <ItemImageCard
                          key={key}
                          image={value.image}
                          className={clsx(
                            "border-2 p-0.5 rounded-md object-none object-[30%_top] w-24",
                            {
                              "border-black": color === key,
                            }
                          )}
                          width={180}
                          height={100}
                          text={key}
                          onClick={() => {
                            setValue("color", key as FormData["color"]);
                            setColor(key as FormData["color"]);
                          }}
                        />
                      )
                    )}
                </div>
              </div>
              <div>
                <p>数量</p>
                <div className="flex justify-center items-center">
                  <select
                    name="amount"
                    id="kaguya-amount"
                    className="text-xl m-2"
                    value={amount}
                    onChange={(e) => {
                      setValue(
                        "amount",
                        Number(e.target.value) as FormData["amount"]
                      );
                      setAmount(Number(e.target.value) as FormData["amount"]);
                    }}
                  >
                    {Object.entries(KaguyaVariants.assort).map(([key]) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                  <p>本</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="m-2 relative">
                  {cart.length !== 0 && (
                    <div className="absolute -top-2 -right-2 rounded-full bg-yellow-400 w-5 h-5 flex justify-center items-center">
                      {cart.length}
                    </div>
                  )}
                  <button
                    className="text-gray-700 font-bold border border-gray-700 py-2 px-3 rounded-md"
                    type="button"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                  >
                    カートを見る
                  </button>
                </div>
                <div className="m-2">
                  <button
                    className="bg-blue-600 font-bold text-white py-2 px-3 rounded-md"
                    type="submit"
                  >
                    カートに追加
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Cart
        cart={cart}
        isCartOpen={isCartOpen}
        onClose={() => {
          setIsCartOpen(false);
        }}
      />
    </>
  );
};
