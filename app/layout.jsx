import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from "next/font/google";

const harpFont = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "HARP",
  description: "HARP web app connects repair professionals to the households",
  icons: {
    icon: "/svg/repair.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={harpFont.className}>
      <body className="bg-white">{children}</body>
    </html>
  );
};

export default RootLayout;
