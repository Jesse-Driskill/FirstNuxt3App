import toilets from "@/data/toilets.json";
import makes from "@/data/makes.json";
import listings from "@/data/listings.json";

//Makes is a list of the manufacturers of the catalogged toilets

export const useToilets = () => {
    return {
        toilets,
        makes,
        listings
    }
}