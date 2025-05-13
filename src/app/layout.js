import "./globals.css";
import NavBar from "./components/navbar/Navbar";

export const metadata = {
  title: "Ginko",
  description: "Personal Finance App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
