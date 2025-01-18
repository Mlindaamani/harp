import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "HARP",
  description: "Home repair platform app",
  icons: {
    icon: "/service.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
