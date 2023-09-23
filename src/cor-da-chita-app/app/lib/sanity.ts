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
   token:"sk0MQpAJ2C21xcYIXl3ZM2TQoa7RMq0BOUdVSMgOumoAPposFkahPoQOVw2jjepWxnSZw7lignTFYxwtUxk5JVL5rJu2MQzBTcSGWuEBE49re85VrEin3QPOlpkyzlvK9EZPdvoghRllSBJy0jt4Rtz2ojdOTosNbQwRRYYWT75Et0j5Rd3V"
  
});
