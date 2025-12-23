import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import { useState, useEffect } from "react";
import type { UsersApiResponse } from "../types/user";
import UserItem from "./UserItem";
import Skeleton from "./Skeleton";
import "./UsersList.css";

const UsersList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching
  } = useQuery<UsersApiResponse, Error>({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
  });


  /** 🔥 Prefetch Next Page */
  useEffect(() => {
    if (!data) return;

    const totalPages = 1000;
    if (page < totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["users", page + 1],
        queryFn: () => fetchUsers(page + 1)
      });
    }
  }, [page, data, queryClient]);

  if (isError) return <p>{error.message}</p>;

  if (!data || data.results.length === 0) {
    return <p className="notFound">No users found</p>;
  }
 return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2 style={{ textAlign: 'center'}}>Users (Page {page})</h2>

      {isLoading ? (
        <>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} />
          ))}
        </>
      ) : (
        <ul style={{padding:'10px'}}>
          {data?.results.map((user) => (
            <UserItem key={user.id.value} user={user} />
          ))}
        </ul>
      )}

      <div style={{ display: "flex", gap: 10 }}>
        <button
          className="previous"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>

        <button className="next"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

      {isFetching && <p>Updating data...</p>}
    </div>
  );
};

export default UsersList;