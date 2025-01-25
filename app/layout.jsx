import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from "@vercel/analytics";

export const metadata = {
  title: "HARP",
  description: "HARP web app connects repair professionals to the households",
  icons: {
    icon: "/repair.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
