"use client";
import { SafeListing } from "@/types/SafeListings";
import { SafeUser } from "@/types/safeUser";
import { Reservation } from "@prisma/client";
import React, { useMemo } from "react";
import { categories } from "../navbar/Categories";
import Container from "../commons/Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";

type Props = {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
};

const ListingClient: React.FC<Props> = ({
  reservation,
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:grap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
