import BlockReveal from "../components/blockReveal";

export default function Header() {
  return (
    <header className="p-4 flex space-x-4 pt-28">
      <div>
        <div>
          <BlockReveal backgroundColor={"bg-cream"} delay={1000}>
            <h1 className="text-white font-normal text-3xl m-4 font-Outfit lg:text-6xl">
              Hi, my name is{" "}
              <span className="font-Indie font-normal text-3xl lg:text-7xl">
                Randy Dyer
              </span>
            </h1>
          </BlockReveal>
        </div>
        <div>
          <BlockReveal backgroundColor={"bg-gold"} delay={1600}>
            <h1 className="text-white text-2xl px-4 font-normal font-Outfit lg:text-4xl">
              I design and develop mobile apps and websites
            </h1>
          </BlockReveal>
        </div>
      </div>
    </header>
  );
}
