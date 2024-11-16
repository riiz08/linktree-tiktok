import CardProduct from "./card-product";

const ProductList = () => {
  return (
    <div className="px-8 py-4 flex justify-center flex-wrap items-center gap-4">
      <CardProduct
        name="Burgundy Berroca EDP"
        description="parfum elegan dengan aroma beri gelap, mawar intens, dan musk hangat, cocok untuk kepercayaan diri di segala suasana"
        image="/burgundy-berocca.jpg"
        amount={180000}
        shopee="https://s.shopee.co.id/9zgYm2hR9X"
        tiktok="https://vt.tokopedia.com/t/ZSjf5TSjV"
      />

      <CardProduct
        name="Liquid Brun"
        description="parfum dengan aroma mewah yang memadukan kehangatan vanila, kayu cedar, dan sentuhan rempah, memberikan kesan maskulin dan elegan."
        image="/liquid-brun.png"
        amount={500000}
        shopee="https://s.shopee.co.id/40PLdooTs8"
        tiktok="https://vt.tokopedia.com/t/ZSjPXL1f7"
      />

      <CardProduct
        name="Fordive Shelby"
        description="parfum dengan aroma segar yang memadukan keharuman citrus, musk lembut, dan sentuhan amber, menciptakan kesan maskulin yang modern dan penuh energi."
        image="/fordive-shelby.jpg"
        amount={270000}
        shopee="https://s.shopee.co.id/9pN9Y3u1TD"
        tiktok="https://vt.tokopedia.com/t/ZSj52kdGd"
      />
    </div>
  );
};

export default ProductList;
