import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "HomeFix",
  description: "Home repair platform app",
  icons: {
    icon: "/zeus.jpg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="m-0 p-0 vh-100">{children}</body>
    </html>
  );
};

export default RootLayout;
