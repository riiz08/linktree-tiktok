export const getAllParfum = async () => {
  try {
    const fetching = await fetch(
      `${process.env.API_BASE_URL}/api/v1/produk/parfum`
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

export const getAllFashionPria = async () => {
  try {
    const fetching = await fetch(
      `${process.env.API_BASE_URL}/api/v1/produk/fashion-pria`
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
