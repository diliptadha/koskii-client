import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[100vh]">
        <Header />

        <div className="h-[70vh] text-center justify-center text-rose-400 underline items-center flex text-7xl">
          <Link href="/product/list">
            <p>Go to the product list page</p>
          </Link>
        </div>
      </div>
    </>
  );
}
