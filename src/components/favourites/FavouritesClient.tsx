"use client";
import { SafeListing } from "@/types/index";
import { SafeUser } from "@/types/index";
import React from "react";
import Container from "../commons/Container";
import Heading from "../commons/Heading";
import ListingCard from "../listings/ListingCard";

type Props = {
  listings: SafeListing[];
  currentUser: SafeUser | null;
};

const FavouritesClient: React.FC<Props> = ({ listings, currentUser }) => {
  return (
    <Container>
      <Heading
        title="Favourites"
        subtitle="List of places you have favourited!"
      />
      <div
        className="
      mt-10
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8"
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavouritesClient;
