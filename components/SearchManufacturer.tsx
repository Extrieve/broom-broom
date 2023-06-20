'use client';
import { SearchManufacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

function SearchManufacturer({manufacturer, setManufacturer}: SearchManufacturerProps) {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="car logo"
              className="ml-14"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;