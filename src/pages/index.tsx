import Head from "next/head"
import Items from "../components/itemPage/Items"
import ActiveList from "../components/layouts/ActiveList"
import Sidebar from "../components/layouts/Sidebar"

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#FAFAFE] flex">
      <Head>
        <title>Shoppingify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Items />
      <ActiveList />
    </main>
  )
}
