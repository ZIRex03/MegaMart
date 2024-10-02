import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryQuery } from "../../../../features/api/apiSlice";
import ProductsInCategories from "./ProductsInCategories";

type Props = {};

const SingleCategory = (props: Props) => {

  const { id } = useParams();

  console.log(`id: ${id}`)

  const { data, isLoading } = useGetCategoryQuery({ id });

  console.log(data);

  return data ? (
    <>
      <ProductsInCategories products={data} />
    </>
  ) : (
    <>{isLoading && <h2>Загрузка...</h2>}</>
  );
};

export default SingleCategory;
