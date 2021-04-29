import Header from "../components/Header";
import MainTable from "../components/MainTable";
import Sidebar from "../components/Sidebar";
import TabHeader from "../components/TabHeader";

export default function Home(): JSX.Element {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex-1 flex flex-col space-y-3 h-full px-8">
        <Header />
        <TabHeader />
        <MainTable />
      </section>
    </main>
  );
}
