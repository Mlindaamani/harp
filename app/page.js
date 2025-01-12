import UserProfile from "./users/page";

export default function Home() {
  return (
    <div className="vh-100">
      <main className="p-3  bg-success">
        <UserProfile />
      </main>
      <footer className="footer">
        <p className="bg-success text-light p-4">Footer</p>
      </footer>
    </div>
  );
}
