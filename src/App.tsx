import UsersList from "./components/UsersList";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        React Query Pagination
      </h1>
      <UsersList />
    </div>
  );
};

export default App;
