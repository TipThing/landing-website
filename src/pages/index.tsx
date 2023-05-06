import MainHero from "@/components/Hero/Main/MainHero";
import Navbar from "@/components/navigation/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="xl:container lg:container md:container xl:mx-auto lg:mx-auto md:mx-auto">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>TipThing - Imagine. Build. Use. Dashboards made easy</title>
        <meta name="title" key="title" content="TipThing - Imagine. Build. Use. Dashboards made easy" />
        <meta name="description" key="description" content="Empower your life with TipThing's customizable dashboard builder. Simplify your workflow and enhance your productivity with ease." />
        <meta name="keywords" key="keywords" content="dashboard builder, customizable, productivity, workflow, todo tracker, budget planner, community-driven, SaaS, user-friendly, innovative solutions, highly flexible, accessibility, quality, value for money, personal, professional, ease, drag and drop, drag n drop"/>
        <meta name="robots" key="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" key="content-type" content="text/html; charset=utf-8"/>
        <meta name="language" key="language" content="English"/>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:url" key="og:url" content="https://metatags.io/" />
        <meta property="og:title" key="og:title" content="TipThing - Imagine. Build. Use. Dashboards made easy" />
        <meta property="og:description" key="og:description" content="Empower your life with TipThing's customizable dashboard builder. Simplify your workflow and enhance your productivity with ease." />
        <meta property="og:image" key="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" key="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" key="twitter:title" content="TipThing - Imagine. Build. Use. Dashboards made easy" />
        <meta property="twitter:description" key="twitter:description" content="Empower your life with TipThing's customizable dashboard builder. Simplify your workflow and enhance your productivity with ease." />
        <meta property="twitter:image" key="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <Navbar />
      <MainHero />
    </div>
  )
}
