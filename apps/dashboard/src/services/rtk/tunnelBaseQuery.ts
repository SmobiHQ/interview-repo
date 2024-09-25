import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tunnelBaseQuery = fetchBaseQuery({
  // baseUrl: `${process.env.TUNNEL_API_URL}/v1/`,

  baseUrl: `${process.env.API_URL!}/v1/`,
  prepareHeaders: async (headers) => {
    // const supabase = createClientComponentClient<Database>();
    // const {
    //   data: { session },
    // } = await supabase.auth.getSession();

    // if (session?.access_token) {
    //   headers.set("authorization", `Bearer ${session.access_token}`);
    // }

    return headers;
  },
});
