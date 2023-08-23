"use client";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import Image from "next/image";


interface GalleryProps {
  images: ImageType[];
}

export default function Gallery({
  images
}: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="
        hidden
        sm:block
        mx-auto
        mt-6
        w-full
        max-w-2xl
        lg:max-w-none
      ">
        <Tab.List className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                alt="Product image gallery"
                src={image.url}
                className="
                  object-cover
                  object-center
                "
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
