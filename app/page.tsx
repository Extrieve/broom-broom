import { CustomFilter, Hero, SearchBar } from '../components/index';
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore vehicles of your liking</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel"/>
            <CustomFilter title="Fuel"/>
          </div>
        </div>
      </div>
    </main>
  );
}
