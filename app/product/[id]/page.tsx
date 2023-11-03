import Header from "@/components/Header";
import React from "react";

const page = ({ params: { id } }: any) => {
  return (
    <>
      <Header />
      <div className="h-[70vh] text-center justify-center text-rose-400 underline items-center flex text-7xl">
        <p>this is product page of {id}</p>
      </div>
    </>
  );
};

export default page;
