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
  const fetching = await fetch(
    `${process.env.API_BASE_URL}/api/v1/produk/fashion-wanita`
  );
  const response = await fetching.json();

  return response.data;
};
