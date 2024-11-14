import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="">Sub Total</p>
          <p className="">
            {getCartAmount() === 0 ? "-" : currency + getCartAmount() + ".00"}
          </p>
        </div>
        <hr className="" />
        <div className="flex justify-between">
          <p className="">Shipping Fee</p>
          <p className="">
            {getCartAmount() === 0 ? "-" : currency + delivery_fee + ".00"}
          </p>
        </div>
        <hr className="" />
        <div className="flex justify-between">
          <b className="">TOTAL</b>
          <b className="">
            {getCartAmount() === 0
              ? "-"
              : currency + (getCartAmount() + delivery_fee + ".00")}
          </b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
