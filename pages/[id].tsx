import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { useAppSelector } from "@/app/hooks";
export async function getServerSideProps(context: any) {
  return {
    props: {
      params: context.params,
    },
  };
}

const DetailPage = ({ params }: any) => {
  const data: any = useAppSelector((state) => state.books.books);
  const { id } = params;

  const singleData = data.books.filter((items: any) => items.id == id);
  console.log(singleData, "single");
  console.log(id, "id");
  return (
    <>
      {singleData.map((items: any) => (
        <div key={items.id}>{items.id}</div>
      ))}
    </>
  );
};

DetailPage.PageLayout = MainLayout;
export default DetailPage;
