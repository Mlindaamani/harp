import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "HARP",
  description: "HARP web app connects repair professionals to the households",
  icons: {
    icon: "/svg/repair.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
};

export default RootLayout;
