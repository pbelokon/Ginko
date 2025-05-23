import PageHeader from "@/components/PageHeader";

export default function Layout({ children }) {
  return (
    <>
      <PageHeader className="my-8 " />
      <main className="dark:text-white">{children}</main>
      <footer className="dark:text-white mt-auto text-center py-8">
        Footer
      </footer>
    </>
  );
}
