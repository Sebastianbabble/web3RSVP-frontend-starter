import { InMemoryCache } from "@apollo/client";
import {ApolloCLient, inMemoryCache} from "apollo/client";

const client = new ApolloCLient({
    uri: "https://api.thegraph.com/subgraphs/name/sebastianbabble/finalweb3rsvp",
    cache: new InMemoryCache(),
});

export default client;