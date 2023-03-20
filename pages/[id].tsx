import MainLayout from "@/layouts/MainLayout";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
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
        <div key={items.id} style={{ paddingLeft: "3%" }}>
          <Card
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/book-img.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Author name: {items.book_author[0]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Book title: {items.book_title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                City: {items.book_publication_city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country: {items.book_publication_country}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
};

DetailPage.PageLayout = MainLayout;
export default DetailPage;
