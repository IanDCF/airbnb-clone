import getCurrentUser from "@/actions/getCurrentUser";
import getFavourites from "@/actions/getFavourites";
import ClientOnly from "@/components/commons/ClientOnly";
import EmptyState from "@/components/commons/EmptyState";
import FavouritesClient from "@/components/favourites/FavouritesClient";

type Props = {};

const page = async (props: Props) => {
  const favourites = await getFavourites();
  const currentUser = await getCurrentUser();

  if (favourites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favourites found"
          subtitle="Looks like you have no favourite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavouritesClient listings={favourites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
