"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { ReactEventHandler, useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

type Props = {
  onChange: (value: string) => void;
  value: string;
};

const ImageUpload: React.FC<Props> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="wo7s5xqi"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        function handleOnClick(e: any) {
          e.preventDefault();
          open();
        }
        return (
          <div
            onClick={handleOnClick}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2  rounded-md p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
          >
            <TbPhotoPlus size={50} cl />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  className="rounded-md"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
