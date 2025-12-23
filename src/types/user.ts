export interface User {
  id: {
    value: string,
  },
  name: {
    title: string,
    first: string,
    last: string,
  },
  email: string,
  dob: {
    age: number,
    date: string
  },
  picture: {
    thumbnail: string
  }
}

export interface UsersApiResponse {
  info: {
    page: number;
    results: number;
  },
  results: User[];
}
