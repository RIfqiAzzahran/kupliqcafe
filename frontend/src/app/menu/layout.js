import NavbarMenu from "../components/NavbarMenu";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:text-white">
        <NavbarMenu />
        {children}
      </body>
    </html>
  );
}