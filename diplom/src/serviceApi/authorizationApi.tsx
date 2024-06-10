import { domainName } from "../fetcher/fetcher";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type whoAmIType = {
    userId: string;
    name: string;
    role: string;
}

export type LoginResponse = {
    accessToken: string;
}
  
export type LoginRequest = {
    email: string;
    password: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: domainName }),
    endpoints: (build) => ({
      whoAmI: build.query<whoAmIType, string>({
        query: () => ({
          url: "whoami",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
      }),
      login: build.mutation<LoginResponse, LoginRequest>({
        query: (body) => ({
          url: "signin",
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body
        })
      })
    })
  });

  export const { useLazyWhoAmIQuery, useLoginMutation } = authApi;