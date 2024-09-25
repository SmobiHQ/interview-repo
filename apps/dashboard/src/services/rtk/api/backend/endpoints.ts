import { createApi } from "@reduxjs/toolkit/query/react";
import { tunnelBaseQuery } from "../../tunnelBaseQuery";

export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: tunnelBaseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
