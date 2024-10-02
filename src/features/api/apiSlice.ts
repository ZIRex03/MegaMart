import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL} from "../../utils/constants";
import { buildUrl } from "../../utils/common";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    getCategory: builder.query({
        query: ({id}) => `/categories/${id}/products`,
        providesTags: ["Category"],
    }),
    getProducts: builder.query({
      query: (params) => buildUrl('/products', params),
      providesTags: ["Product"]
    })
  }),
});

export const { useGetProductQuery, useGetCategoryQuery, useGetProductsQuery } = apiSlice;
