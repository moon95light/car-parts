export default function Home() {
  return (
    <div className="Home relative min-h-screen w-full">
      <div
        className="HomeBackground fixed sm:mt-[104px] max-sm:top-[56px] top-0 left-0 w-lvw sm:h-[calc(100vh-104px)] max-sm:h-[calc(100vh-56px)] -z-10 bg-cover bg-bottom bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('/background.jpg')] transition-opacity"
      />

      <div className="flex flex-col row-start-2 justify-center items-center max-w-screen-lg mx-auto w-full mt-4 sm:mt-4 px-5 sm:min-h-[calc(100vh-112px-128px)] min-h-[calc(100vh-64px-128px)] pb-40 ">
        <div className="flex flex-col items-center">
          <div className="hero-text font-bold text-white max-sm:text-2xl sm:text-4xl mt-12 sm:mt-16 sm:text-center text-center ">
            Car Part Search - <span className="text-primary text-nowrap">Made Simple</span>
          </div>
          <button className="flex items-center bg-foreground text-base font-bold rounded-xl py-2 px-3 sm:p-3 sm:pr-4 text-text mt-5 sm:mt-12 mb-5">
            <span className="text-2xl sm:text-3xl text-text mr-3">▶</span> How does it work?
          </button>
        </div>

        <form className="SearchBar p-3 rounded-2xl bg-[linear-gradient(90deg,#fff3,#ffffff1a)] w-full block mt-5 sm:mt-12">
          <div className="flex sm:flex-row flex-col w-full">
            <label className="flex sm:flex-row w-full">
              <div className="max-sm:hidden bg-[#d8d8d8] py-4 px-3 sm:px-7 rounded-l-xl font-medium text-black ">alt.parts/</div>
              <input
                type="search"
                className="max-sm:rounded-xl max-sm:text-center bg-white max-sm:font-bold block py-2 pl-3 sm:pl-4 w-full h-14 rounded-none rounded-r-xl placeholder-placeholder "
                placeholder="Paste in your product's URL."
              />
            </label>
            <button className="max-sm:hidden rounded-xl bg-primary font-bold text-white sm:ml-2 mt-0 sm:p-0 w-40" >
              Search
            </button>
            <button className="sm:hidden rounded-xl bg-primary font-bold text-white mt-2 p-2 w-full h-14" disabled>
              Search
            </button>
          </div>
        </form>
      </div>

      <section className="max-w-screen-lg mx-auto w-full px-5 mt-30 relative">
        <div className="absolute left-5 top-0 w-[calc(100%-40px)] h-full bg-cover bg-center bg-no-repeat bg-[url('/home_2.jpg')] rounded-2xl"></div>
        <div className="relative z-10 flex justify-between md:flex-row flex-col bg-[linear-gradient(to_right,rgba(85,90,29,0.7)_100%,rgba(85,90,29,0.7)_100%)] backdrop-blur-sm shadow-inner border border-[rgb(235_255_0/var(--tw-border-opacity,1))] p-10 max-sm:p-5 max-sm:py-10 rounded-2xl text-sm md:space-x-20 max-md:space-y-10 text-white">
          <div className="left space-y-6 md:max-w-[520px] max-w-[600px]">
            <div className="logo">
              <a href="/">
                <img src="/logo.png" alt="Logo" className="w-32 h-12 object-contain" />
              </a>
            </div>
            <div>
              Save on your car parts by finding cheaper alternatives from the entirety of the internet within seconds.
            </div>
            <hr className="border-white/20" />
            <div>
              We participate in affiliate programs, which means we may earn a commission when you purchase products through links on our site, at no extra cost to you.
              <br />
              <strong>This does not influence the results we show you or their ranking.</strong>
            </div>
            <div className="flex items-center space-x-5 text-white/80">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
          </div>

          <div className="right flex lg:space-x-20 md:space-x-10 space-x-20">
            <div className="flex flex-col justify-start pt-1 space-y-2 min-w-[160px]">
              <strong className="mb-3">Site Map</strong>
              <a className="relative leading-6 hover:text-white whitespace-nowrap text-primary" href="/">Home</a>
              <a className="relative leading-6 hover:text-white whitespace-nowrap" href="/about">About Us</a>
              <a className="relative leading-6 hover:text-white whitespace-nowrap" href="/community">Community</a>
              <a className="relative leading-6 hover:text-white whitespace-nowrap" href="/faq">FAQ</a>
            </div>
            <div className="flex flex-col justify-start pt-1 lg:pr-20 pr-5 space-y-2 min-w-[160px]">
              <strong className="mb-3">Legal</strong>
              <a className="relative leading-6 hover:text-white whitespace-nowrap" href="/terms">Terms of Service</a>
              <a className="relative leading-6 hover:text-white whitespace-nowrap" href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-behind-footer bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_50%)] h-70"></div>
    </div>
  );
}
