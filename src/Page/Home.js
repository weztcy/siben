import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Component/NavigationBar";
import DataBencana from "../Component/DataBencana";
import disasterData from "../Component/IsiDataBencana";

function Home() {
  const dataToShow = disasterData.slice(0, 5);
  return (
    <div className="Home">
      <NavigationBar />
      <div>
        <h1 className="text-center">Tangkas Hadapi Bencana</h1>
        <h4 className="text-center">Tabel Data Bencana</h4>
        <div className="row justify-content-center">
          <div className="mx-auto">
            <div className="d-flex justify-content-center">
              <DataBencana dataToShow={dataToShow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
