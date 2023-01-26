import { Feed, Header, Login, Sidebar } from "@/components";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        {/* Widget */}
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
