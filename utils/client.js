import Prismic from "@prismicio/client";

const apiEndpoint = "https://your-repo-name.cdn.prismic.io/api/v2";
const Client = Prismic.client(apiEndpoint);

export default Client;
