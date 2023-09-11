import getCurrentUser from "@/actions/getCurrentUser";
import getListingById, { IParams } from "@/actions/getListingById";
import ClientOnly from "@/components/commons/ClientOnly";
import EmptyState from "@/components/commons/EmptyState";
import ListingClient from "@/components/listings/ListingClient";
import React from "react";

type Props = {
  listingId?: string;
};

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
