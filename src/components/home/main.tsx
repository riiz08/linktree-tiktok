import Link from "next/link";
import { GiLargeDress } from "react-icons/gi";
import { IoShirtSharp } from "react-icons/io5";
import { TbPerfume } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Main = () => {
  return (
    <main className="min-h-screen pt-8 w-full flex flex-col justify-center items-center gap-6">
      <div>
        <Avatar className="w-36 h-36 mx-auto mb-4">
          <AvatarImage src="/profile.jpg" alt="Riiz O'Brien" />
          <AvatarFallback>RO</AvatarFallback>
        </Avatar>
        <h1 className="scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl text-center">
          Showcase Riiz O&apos;Brien
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-8 items-center">
        <Link href={"/produk/fashion-pria"}>
          <div className="flex items-center justify-center flex-col bg-white/15 backdrop-blur-sm py-2 px-4 gap-2 rounded-md hover:scale-105 transition-all w-44 h-52">
            <IoShirtSharp size={100} strokeWidth={0.75} />
            <h1 className="text-lg font-semibold">Fashion Pria</h1>
          </div>
        </Link>
        <Link href={"/produk/fashion-wanita"}>
          <div className="flex items-center gap-2 justify-center flex-col bg-white/15 backdrop-blur-sm w-44 h-52 py-2 px-4 rounded-md hover:scale-105 transition-all">
            <GiLargeDress size={100} strokeWidth={0.75} />
            <h1 className="text-lg font-semibold">Fashion wanita</h1>
          </div>
        </Link>
        <Link href={"/produk/parfum"}>
          <div className="flex items-center gap-2 justify-center flex-col bg-white/15 backdrop-blur-sm py-2 px-4 w-44 h-52 rounded-md hover:scale-105 transition-all">
            <TbPerfume size={100} strokeWidth={0.75} />
            <h1 className="text-lg font-semibold">Parfum</h1>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Main;
