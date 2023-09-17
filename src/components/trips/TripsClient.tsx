"use client";
import { SafeReservation } from "@/types/SafeListings";
import { SafeUser } from "@/types/safeUser";
import React, { useCallback, useState } from "react";
import Container from "../commons/Container";
import Heading from "../commons/Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../listings/ListingCard";

type Props = {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
};

const TripsClient: React.FC<Props> = ({ reservations, currentUser }) => {
  const [deletingId, setDeletingId] = useState("");
  const router = useRouter();

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation Cancelled");
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
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
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
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
