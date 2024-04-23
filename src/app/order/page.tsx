import { Item } from "./components/Item";
import { Suspense } from "react";

export default function Order() {
  return (
    <div className="max-w-7xl mx-auto">
      <Suspense
        fallback={
          <div className="text-center flex justify-center items-center w-full h-full">
            Loading...
          </div>
        }
      >
        <Item />
      </Suspense>
    </div>
  );
}
