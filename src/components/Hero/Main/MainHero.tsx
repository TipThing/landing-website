export default function MainHero() {
  return (
    <div className="hero my-10 xl:my-40 lg:my-32 md:my- sm:my-6">
      <div className="hero-content px-5 sm:px-8 text-center">
        <div className="text-left md:text-center max-w-lg md:max-w-xl lg:max-w-5xl xl:max-w-full">
          <h1 className="text-center text-7xl sm:text-9xl leading-none select-none tracking-tightest font-extrabold">
            <span
              data-content="Imagine."
              className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1 inline-block h-full pb-2"
            >
              <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 h-full">
                {" "}
                Imagine.
              </span>
            </span>
            <span
              data-content="Build."
              className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2 inline-block h-full pb-2"
            >
              <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 h-full">
                {" "}
                Build.
              </span>
            </span>
            <span
              data-content="Use."
              className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-3 inline-block h-full pb-2"
            >
              <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 h-full">
                {" "}
                Use.
              </span>
            </span>
          </h1>
          <p className="py-8 lg:px-24 md:p-12 sm:py-10 sm:px-0 xl:text-2xl lg:text-xl md:text-xl">
            Create stunning dashboards with TipThing&apos;s drag-and-drop
            builder and plugin marketplace. Simplify your workflow and empower
            your life.
          </p>
          <div className="grid gap-8 items-start justify-center mt-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt"></div>
              <a
                href="#"
                className="cursor-pointer relative px-20 py-5 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
              >
                <span className="flex items-center">
                  <span className="text-gray-100 text-lg sm:text-xl">
                    Start Building
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
