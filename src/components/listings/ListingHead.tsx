"use client";
import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types/index";
import React from "react";
import Heading from "../commons/Heading";
import Image from "next/image";
import HeartButton from "../commons/HeartButton";

type Props = {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
};

const ListingHead: React.FC<Props> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          src={imageSrc}
          alt="Image"
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
