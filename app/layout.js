import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "HomeFix",
  description:
    "This is the homefix app that connects customers and service providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container-fluid vh-100 m-0 p-0">
        <Header metadata={metadata} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
