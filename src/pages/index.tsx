import Head from "next/head"
import Items from "../components/itemPage/Items"
import ActiveList from "../components/layouts/ActiveList"
import AddItem from "../components/layouts/AddItem"
import Details from "../components/layouts/Details"
import MyModal from "../components/layouts/MyModal"
import Sidebar from "../components/layouts/Sidebar"

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#FAFAFE] flex">
      <Head>
        <title>Shoppingify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyModal />

      <Sidebar />
      <Items />
      {/* <ActiveList /> */}
      {/* <AddItem /> */}
      <Details />
    </main>
  )
}
