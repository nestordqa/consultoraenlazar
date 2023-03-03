import { createClient } from "next-sanity";

import { config } from "./config";

export const sanityClient = createClient(config);

export const getClient = () => sanityClient;
