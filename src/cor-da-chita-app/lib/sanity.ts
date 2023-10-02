import { createClient } from "next-sanity";

//id projeto BIEL
const projectId = "59v4hski";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// 