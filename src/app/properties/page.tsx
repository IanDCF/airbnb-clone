import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import ClientOnly from "@/components/commons/ClientOnly";
import EmptyState from "@/components/commons/EmptyState";
import PropertiesClient from "@/components/properties/PropertiesClient";
import { SafeListing } from "@/types/index";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unathorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no listed properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient
        listings={listings as SafeListing[]}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default page;
