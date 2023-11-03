import Header from "@/components/Header";
import getAllProducts from "@/libs/getAllProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const page = async () => {
  const getallproduct = await getAllProducts();
  return (
    <>
      <div className="h-[100vh]">
        <Header />
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {getallproduct.products.map((product: any) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="group">
                    <div className="relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover object-center hover:opacity-75"
                        />
                      </div>
                      <div className="absolute bg-slate-200 rounded-full bottom-2 right-2 text-rose-400 text-3xl p-2">
                        <button>
                          <AiOutlineHeart />
                        </button>
                      </div>
                    </div>

                    <h3 className="mt-4 text-center text-sm text-gray-700">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-center text-lg font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
