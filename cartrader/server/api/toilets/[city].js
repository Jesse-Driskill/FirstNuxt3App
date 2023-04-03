import toilets from "@/data/toilets.json";

export default defineEventHandler((event) => {
    const {city} = event.context.params;

    let filteredToilets = toilets;

    filteredToilets = filteredToilets.filter(toilet => {
        return toilet.city.toLowerCase() === city.toLowerCase();
    })
    return filteredToilets;
})