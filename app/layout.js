import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "HomeFix",
  description:
    "This is the homefix app that connects customers and service providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="hv-100 bg-light shadow-lg bg-opacity-5">{children}</body>
    </html>
  );
}
