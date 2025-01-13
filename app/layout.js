import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderContents } from "./components/HeaderContents";

export const metadata = {
  title: "HomeFix",
  description:
    "This is the homefix app that connects customers and service providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <header className="bg-primary text-light p-5 d-flex align-items-center">
          <HeaderContents metadata={metadata} />
        </header>
        <main>{children}</main>
        <footer>
          <p>This is a footer</p>
        </footer>
      </body>
    </html>
  );
}
