const getAllProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("failed to fetch users");
  }
  return response.json();
};

export default getAllProducts;
