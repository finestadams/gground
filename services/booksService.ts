import { AxiosResponse } from 'axios';
import axios from '@/interceptor/axiosinstance';

const Books = () => {
  return axios<AxiosResponse>({
    method: 'POST',
    url: `/api/books`
  });
};
const BooksService = {
    Books
};
export default BooksService;
