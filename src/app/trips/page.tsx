import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import ClientOnly from "@/components/commons/ClientOnly";
import EmptyState from "@/components/commons/EmptyState";
import TripsClient from "@/components/trips/TripsClient";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ userId: currentUser?.id });

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unathorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you haven't reserved any trips."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
