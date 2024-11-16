import ProductList from "@/components/product-list";

const Page = () => {
  return (
    <main>
      <h1 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center pt-1">
        Rekomendasi Parfum
      </h1>
      <ProductList />
    </main>
  );
};

export default Page;
