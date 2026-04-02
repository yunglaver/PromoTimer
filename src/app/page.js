import {getOffers} from "@/app/core/api";
import ClientPage from "@/app/components/ClientPage";


export default async function Home() {

    const offersData = await getOffers()

    return (
        <ClientPage
            offers={offersData}
        />
    );
}
