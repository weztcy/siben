import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../Component/NavigationBar";
import DataBencana from "../Component/DataBencana";
import disasterData from "../Component/IsiDataBencana";

function Data() {
  const dataToShow = disasterData.slice(0, );
  return (
    <div className="Home">
      <NavigationBar />
      <div>
        <h1 className="text-center">Data Bencana</h1>
        <br/>
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

export default Data;
