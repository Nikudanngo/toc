import { Item } from "./components/Item";
import { Suspense } from "react";

export default function Order() {
  return (
    <div className="max-w-7xl mx-auto">
      <Suspense
        fallback={
          <p className="text-center flex justify-center items-center w-full h-full">
            Loading...
          </p>
        }
      >
        <Item />
      </Suspense>
    </div>
  );
}
