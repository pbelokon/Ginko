import PageHeader from "@/components/PageHeader";

export default function Layout({ children }) {
  return (
    <>
      <PageHeader className="my-8" />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
