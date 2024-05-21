import React from "react";
import { AddressElement } from "@stripe/react-stripe-js";

const AddressForm = () => {
  return (
    <form>
      <AddressElement
        options={{
          mode: "shipping",
          fields: {
            phone: "always",
          },
          validation: {
            phone: {
              required: "always",
            },
          },
        }}
      />
    </form>
  );
};

export default AddressForm;
