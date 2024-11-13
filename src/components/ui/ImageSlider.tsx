import Image from "next/image";
import { HomeData } from "../Home/types/constant";
interface ImageSliderLayoutProps{
  heroData:HomeData
}
const ImageSlider: React.FC<ImageSliderLayoutProps> = (heroData) => {
  return (
    <div className="relative w-full mx-auto h-full">
      <Image
        src={heroData.heroData.home[1].data?.image[0]?.src}
        alt="Hero Image"
        priority
        height={800}
        width={800}
        sizes="(max-width: 650px) 10vw, (max-width: 1024px) 50vw, 1200px"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default ImageSlider;
