"use client";
import { SafeReservation } from "@/types/index";
import { SafeUser } from "@/types/index";
import React, { useCallback, useState } from "react";
import Container from "../commons/Container";
import Heading from "../commons/Heading";
import ListingCard from "../listings/ListingCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Props = {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
};

const ReservationsClient: React.FC<Props> = ({ reservations, currentUser }) => {
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
      <Heading title="Reservations" subtitle="Bookings on your properties" />
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
            disabled={deletingId === reservation.id}
            onAction={onCancel}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
