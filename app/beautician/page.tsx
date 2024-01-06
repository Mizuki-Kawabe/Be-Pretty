import { beauticians } from "@/utils/beauticians";
import BeauticianCard from "../components/beauticians/BeauticianCard";
import Container from "../components/Container";
import BeauticianDetails from "./[beauticianId]/BeauticianDetails";

const beautician = () => {
  return (
    <>
      <div className="bg-tan w-full h-52 flex items-center">
        <Container>
          <div className="h-full">
            <div className="font-bold text-mb text-4xl">Beauticians</div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="my-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-y-10 justify-center justify-items-center">
          {beauticians.map((beautician: any) => {
            return <BeauticianCard key={beautician.id} data={beautician} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default beautician;
