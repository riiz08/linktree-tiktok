import Image from "next/image";
import { Badge } from "./ui/badge";
import { formatToIDR } from "@/lib/formatToIDR";
import { Button } from "./ui/button";
import Link from "next/link";

interface PropsCardProduct {
  name: string;
  description: string;
  image: string;
  amount: number;
  shopee: string;
  tiktok: string;
}

const CardProduct = (props: PropsCardProduct) => {
  const { name, description, image, amount, shopee, tiktok } = props;
  return (
    <div className="relative group py-4 flex gap-2 w-96 h-52 border mt-4 rounded-lg p-4">
      <Image
        src={image}
        alt={name}
        height={150}
        width={150}
        className="rounded-md group-hover:blur-sm transition-all duration-300"
      />
      <Badge
        variant={"destructive"}
        className="absolute bottom-0 left-11 px-2 py-1 rounded-lg group-hover:blur-sm transition-all duration-300"
      >
        {formatToIDR(amount)}
      </Badge>
      <div className="group-hover:blur-sm transition-all duration-300">
        <h1 className="scroll-m-20 text-md md:text-lg font-semibold tracking-tight">
          {name}
        </h1>
        <p className="leading-4 md:leading-6 [&:not(:first-child)]:mt-1 text-xs md:text-sm">
          {description}
        </p>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col gap-2">
        <Button asChild size={"lg"} className="font-semibold uppercase">
          <Link href={shopee}>
            Beli Sekarang Di
            <Image
              src={"/shopee.png"}
              height={20}
              width={20}
              alt="Shopee afilliate"
            />
          </Link>
        </Button>
        <Button size={"lg"} asChild className="font-semibold uppercase">
          <Link href={tiktok}>
            Beli Sekarang Di
            <Image
              src={"/tiktokshop.png"}
              height={20}
              width={20}
              alt="Tiktok afilliate"
              className="mix-blend-multiply"
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CardProduct;
