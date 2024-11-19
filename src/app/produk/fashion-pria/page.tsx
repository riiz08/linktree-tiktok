import ProductList from "@/components/product-list";
import { getAllFashionPria } from "@/lib/getProducts";

const Page = async () => {
  const products = await getAllFashionPria();
  return (
    <main>
      <h1 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center pt-1">
        Rekomendasi Fashion Pria
      </h1>
      <ProductList products={products} />
    </main>
  );
};

export default Page;
