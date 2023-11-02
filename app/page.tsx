import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-stone-300 h-[100vh]">
        <Header />
        <div className="h-[70vh] items-center flex text-7xl">
          Go to the product list page
        </div>
      </div>
    </>
  );
}
