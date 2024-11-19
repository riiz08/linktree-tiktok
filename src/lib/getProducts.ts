interface ProductData {
  name: string;
  image: string;
  description: string;
  shopee: string;
  price: string;
}

export const getAllParfum = async () => {
  const fetching = await fetch(
    `${process.env.API_BASE_URL}/api/v1/produk/parfum`
  );
  const response = await fetching.json();

  return response.data;
};

export const getAllFashionPria = async () => {
  const fetching = await fetch(
    `${process.env.API_BASE_URL}/api/v1/produk/fashion-pria`
  );
  const response = await fetching.json();

  return response.data;
};

export const getAllFashionWanita = async () => {
  try {
    const fetching = await fetch(
      `${process.env.API_BASE_URL}/api/v1/produk/fashion-wanita`
    );

    if (!fetching.ok) {
      throw new Error(`HTTP error! Status: ${fetching.status}`);
    }

    const response = await fetching.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching fashion wanita:", error);
    return []; // Kembalikan array kosong jika terjadi error
  }
};
