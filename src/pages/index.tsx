import MainHero from "@/components/Hero/Main/MainHero";
import Navbar from "@/components/navigation/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="xl:container lg:container sm:container mx-auto">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <MainHero />
    </div>
  )
}
