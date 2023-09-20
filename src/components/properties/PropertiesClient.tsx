"use client";
import { SafeListing } from "@/types/index";
import { SafeUser } from "@/types/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Heading from "../commons/Heading";
import ListingCard from "../listings/ListingCard";
import Container from "../commons/Container";

type Props = {
  listings: SafeListing[];
  currentUser: SafeUser | null;
};

const PropertiesClient: React.FC<Props> = ({ listings, currentUser }) => {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing Deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Properties" subtitle="View your listings" />
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
            actionId={listing.id}
            disabled={deletingId === listing.id}
            onAction={onCancel}
            actionLabel="Delete Listing"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
