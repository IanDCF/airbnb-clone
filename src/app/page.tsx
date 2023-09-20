import getCurrentUser from "@/actions/getCurrentUser";
import getListings, { IListingsParams } from "@/actions/getListings";
import ClientOnly from "@/components/commons/ClientOnly";
import Container from "@/components/commons/Container";
import EmptyState from "@/components/commons/EmptyState";
import ListingCard from "@/components/listings/ListingCard";
import { SafeListing } from "@/types/SafeListings";

type Props = {
  searchParams: IListingsParams;
};

const Home = async function ({ searchParams }: Props) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8"
        >
          {listings?.map((listing: SafeListing) => {
            return (
              <ListingCard
                key={listing.id}
                data={listing}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
function useSate(arg0: never[]): [any, any] {
  throw new Error("Function not implemented.");
}
