export default function Home() {
  return (
    <div className="Home relative min-h-screen w-full">
      <div
        className="HomeBackground fixed sm:mt-[104px] max-sm:top-[56px] top-0 left-0 w-lvw sm:h-[calc(100vh-104px)] max-sm:h-[calc(100vh-56px)] -z-10 bg-cover bg-bottom bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/background.jpg')] transition-opacity"
      />

      <div className="flex flex-col row-start-2 justify-center items-center max-w-screen-lg mx-auto w-full mt-16 sm:mt-28 px-5 sm:min-h-[calc(100vh-112px-128px)] min-h-[calc(100vh-64px-128px)] pb-40 ">
        <div className="flex flex-col items-center">
          <div className="hero-text font-bold max-sm:text-2xl sm:text-4xl mt-12 sm:mt-16 sm:text-center text-center ">
            Car Part Search - <span className="text-primary text-nowrap whitespace-nowrap">Made Simple</span>
          </div>
          <button className="flex items-center bg-background text-base font-bold rounded-xl py-2 px-3 sm:p-3 sm:pr-4 text-text mt-5 sm:mt-12 mb-5">
            <span className="text-2xl sm:text-3xl text-text mr-3">▶</span> How does it work?
          </button>
        </div>

        <form className="SearchBar p-3 rounded-2xl w-full block mt-5 sm:mt-12">
          <div className="flex sm:flex-row flex-col w-full">
            <label className="flex sm:flex-row w-full">
              <div className="max-sm:hidden bg-[#d8d8d8] py-4 px-3 sm:px-7 rounded-l-xl font-medium text-black ">alt.parts/</div>
              <input
                type="search"
                className="max-sm:rounded-xl max-sm:text-center max-sm:font-bold block py-2 pl-3 sm:pl-4 w-full h-14 rounded-none rounded-r-xl placeholder-placeholder "
                placeholder="Paste in your product's URL."
              />
            </label>
            <button className="max-sm:hidden rounded-xl bg-primary font-bold sm:ml-2 mt-0 sm:p-0 w-40" disabled>
              Search
            </button>
            <button className="sm:hidden rounded-xl bg-primary font-bold mt-2 p-2 w-full h-14" disabled>
              Search
            </button>
          </div>
        </form>

        <div className="flex flex-col w-full"></div>
      </div>

      <div className="bg-behind-footer bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] "></div>
    </div>
  );
}
