import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
export default function GalleryMobile({ projectData }) {
    return (
        <div className="flex gap-40 flex-col pt-40">
          {projectData[0].imagesGallery.map((image) => (
            <div key={image._key} className="mb-4">
              <Image
                src={urlForImage(image.asset._ref)}
                alt="Image"
                className="w-full object-cover h-full"
                width={1000}
                height={1000}
                
              />
            </div>
          ))}
        </div>
      );
    }