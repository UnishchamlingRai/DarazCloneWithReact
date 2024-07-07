export async function getProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    // console.log("data:", data);
    return data;
  } catch (error) {
    console.log("ERROR IN Get Product:", error);
    return error;
  }
}

export async function getProducts(page, query, sortBy) {
  const limit = 10;
  const skip = (page - 1) * limit;
  let res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,discountPercentage,rating,thumbnail,id
    `
  );
  if (query) {
    res = await fetch(
      `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}&select=title,price,description,discountPercentage,rating,thumbnail,id,reviews`
    );
  }

  const data = await res.json();

  return data;
}

export async function getCategories() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  // console.log(data);
  return data;
}
// export async function getSearchProducts(query) {
//   const limit = 10; // Example limit value
//   const skip = 0; // Example skip value

//   const res = await fetch(
//     `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}&select=title,price`
//   );

//   const data = await res.json();
//   console.log("DAta:", data);
//   return data;
// }
