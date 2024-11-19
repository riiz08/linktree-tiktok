import CardProduct from "./card-product";

interface ProductsType {
  name: string;
  image: string;
  description: string;
  shopee: string;
  price: string;
}

interface ProductListProps {
  fetchProducts: () => Promise<ProductsType[]>; // Fungsi fetching data
}

const ProductList = async ({ fetchProducts }: ProductListProps) => {
  const products = await fetchProducts();

  return (
    <div className="px-8 py-4 flex justify-center flex-wrap items-center gap-4">
      {products != undefined ? (
        products.map((product: ProductsType) => (
          <CardProduct
            key={product.name} // Tambahkan `key` untuk identifikasi unik
            name={product.name}
            image={product.image}
            description={product.description}
            shopee={product.shopee}
            amount={Number(product.price)}
          />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-xl">
          Belum ada produk ditambahkan
        </div>
      )}
    </div>
  );
};

export default ProductList;
