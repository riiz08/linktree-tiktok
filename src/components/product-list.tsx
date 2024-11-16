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
    </div>
  );
};

export default ProductList;
