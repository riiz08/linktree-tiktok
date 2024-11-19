import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { PiDress, PiTShirt } from "react-icons/pi";
import { TbPerfume } from "react-icons/tb";

const Page = () => {
  return (
    <div>
      <h1 className="ml-6 scroll-m-20 text-2xl font-semibold tracking-tight">
        Products
      </h1>
      <div className="flex items-center">
        <Link href={"/admin/dashboard/fashion-pria"}>
          <Card className="ml-8 my-4 px-4 py-2 w-48 cursor-pointer transition-all duration-300 hover:scale-105">
            <CardContent className="flex items-center justify-center gap-4 flex-col">
              <div className="flex items-center justify-center gap-2">
                <PiTShirt size={25} />
                <span className="scroll-m-20 text-md font-semibold tracking-tight">
                  Fashion pria
                </span>
              </div>
              <span className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                0
              </span>
            </CardContent>
          </Card>
        </Link>

        <Link href={"/admin/dashboard/fashion-wanita"}>
          <Card className="ml-8 my-4 px-4 py-2 w-48 cursor-pointer transition-all duration-300 hover:scale-105">
            <CardContent className="flex items-center justify-center gap-4 flex-col">
              <div className="flex items-center justify-center gap-2">
                <PiDress size={25} />
                <span className="scroll-m-20 text-md font-semibold tracking-tight">
                  Fashion wanita
                </span>
              </div>
              <span className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                0
              </span>
            </CardContent>
          </Card>
        </Link>

        <Link href={"/admin/dashboard/parfum"}>
          <Card className="ml-8 w-48 my-4 px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105">
            <CardContent className="flex items-center justify-center gap-4 flex-col">
              <div className="flex items-center justify-center gap-2">
                <TbPerfume size={25} />
                <span className="scroll-m-20 text-md font-semibold tracking-tight">
                  Parfum
                </span>
              </div>
              <span className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                0
              </span>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Page;
