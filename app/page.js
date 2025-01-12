import UserProfile from "./users/page";

export default function Home() {
  return (
    <div className="vh-100">
      <main className="p-3  bg-success">
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </main>
      <footer className="footer bg-dark p-4">
        <p className="text-light p-4 fs-2 text-center ">Footer</p>
      </footer>
    </div>
  );
}
