import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import ClientOnly from "@/components/commons/ClientOnly";
import EmptyState from "@/components/commons/EmptyState";
import ReservationsClient from "@/components/reservations/ReservationsClient";

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

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default page;
