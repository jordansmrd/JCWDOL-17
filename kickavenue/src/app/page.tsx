/** @format */
import Carousel1 from "@/../public/carousel_1.jpeg";
import CardList from "@/components/card.component";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center flex-col w-full">
      <div className="max-w-screen-2xl">
        <Image
          src={Carousel1}
          width={1440}
          height={485}
          className="w-full"
          alt=""
        />
        <CardList />
      </div>
    </div>
  );
}
