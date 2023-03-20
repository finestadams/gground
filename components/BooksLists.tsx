import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import BooksService from "@/services/booksService";
import { booksData } from "@/features/bookSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const BooksLists = () => {
  //   const [books, setBooks] = useState(null);
  const [fetched, setFetched] = useState(false);
  const dispatch = useAppDispatch();
  const data: any = useAppSelector((state) => state.books.books);
  const getAllBooks = async () => {
    try {
      let response = await BooksService.Books();
      if (response.status === 200) {
        dispatch(booksData(response.data));
        setFetched(true);
      }
    } catch (error) {
      console.log(error, "error getting books");
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  console.log(data, "data");
  const getBooks = data?.books.map((book: any) => (
    <>
      <ListItem key={book.id} alignItems="center">
        <ListItemAvatar>
          <Avatar>{book.id}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={book.book_title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {book.book_publication_country}
            </React.Fragment>
          }
        />
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  ));
  return (
    <>
      {fetched ? (
        <List
          sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}
        >
          {getBooks}
        </List>
      ) : (
        <Box sx={{ width: 560 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
    </>
  );
};
