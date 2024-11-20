import { dummyProducts } from "./dummyData";

interface ProductData {
  name: string;
  image: string;
  description: string;
  shopee: string;
  price: string;
}

export const getAllParfum = async () => {
  try {
    if (process.env.NODE_ENV === "production") {
      const fetching = await fetch(
        `${process.env.API_BASE_URL}/api/v1/produk/parfum`
      );

      if (!fetching.ok) {
        throw new Error(`HTTP error! Status: ${fetching.status}`);
      }

      const response = await fetching.json();
      return response.data;
    } else {
      return dummyProducts;
    }
  } catch (error) {
    console.error("Error fetching fashion wanita:", error);
    return []; // Kembalikan array kosong jika terjadi error
  }
};

export const getAllFashionPria = async () => {
  try {
    if (process.env.NODE_ENV === "production") {
      const fetching = await fetch(
        `${process.env.API_BASE_URL}/api/v1/produk/fashion-pria`
      );

      if (!fetching.ok) {
        throw new Error(`HTTP error! Status: ${fetching.status}`);
      }

      const response = await fetching.json();
      return response.data;
    } else {
      return dummyProducts;
    }
  } catch (error) {
    console.error("Error fetching fashion wanita:", error);
    return []; // Kembalikan array kosong jika terjadi error
  }
};

export const getAllFashionWanita = async () => {
  try {
    if (process.env.NODE_ENV === "production") {
      const fetching = await fetch(
        `${process.env.API_BASE_URL}/api/v1/produk/fashion-wanita`
      );

      if (!fetching.ok) {
        throw new Error(`HTTP error! Status: ${fetching.status}`);
      }

      const response = await fetching.json();
      return response.data;
    } else {
      return dummyProducts;
    }
  } catch (error) {
    console.error("Error fetching fashion wanita:", error);
    return []; // Kembalikan array kosong jika terjadi error
  }
};
