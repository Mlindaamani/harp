import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "HomeFix",
  description:
    "This is the homefix app that connects customers and service providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container-fluid vh-100 m-0 p-0">
        <header className="bg-primary text-light p-3 ">
          <div className="container-fluid">
            <h1 className="text-start fs-2 p-3">{metadata.title}</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
