import { Suspense } from "react";
import Home from "./home";

export default function Page() {
  return (
    <Suspense
      fallback={
        <h1 className="h-screen w-screen flex items-center justify-center text-7xl font-extralight text-primary/15">
          Loading...
        </h1>
      }
    >
      <Home />
    </Suspense>
  );
}
