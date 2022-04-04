import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row title= 'Netflix Originals' fetchURL = {requests.fetchNetflixoriginals} isLargeRow={true} />
      <Row title= 'Trending Now' fetchURL= {requests.fetchTrending} />
      <Row title= 'Top Rated' fetchURL= {requests.fetchTopRated} />
      <Row title= 'Action Movies' fetchURL= {requests.fetchActionMovies} />
      <Row title= 'Animation Movies' fetchURL= {requests.fetchAnimationMovies} />
      <Row title= 'Comedy Movies' fetchURL= {requests.fetchComedyMovies} />
      <Row title= 'Crime Movies' fetchURL= {requests.fetchCrimeMovies} />
      <Row title= 'Horror Movies' fetchURL= {requests.fetchHorrorMovies} />
      <Row title= 'Romance Movies' fetchURL= {requests.fetchRomanceMovies} />
      <Row title= 'Sci-Fi Movies' fetchURL= {requests.fetchScienceFiction} />
      <Row title= 'Documentaries' fetchURL= {requests.fetchDocumantaries} />
      
    </div>
  );
}

export default App;
