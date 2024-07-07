import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function DataBencana({ dataToShow }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(dataToShow.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dataToShow.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ margin: "0px", width: "1400px" }}>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th style={{ width: "10px" }}>No</th>
            <th style={{ width: "100px" }}>Tanggal</th>
            <th style={{ width: "160px" }}>Provinsi</th>
            <th style={{ width: "150px" }}>Kota / Kabupaten</th>
            <th style={{ width: "200px" }}>Alamat</th>
            <th style={{ width: "190px" }}>Bencana</th>
            <th style={{ width: "" }}>Penyebab</th>
            <th style={{ width: "110px" }}>Korban Jiwa</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((data, index) => (
            <tr key={index} style={{ textAlign: "left" }}>
              <td style={{ textAlign: "center" }}>{data.id}</td>
              <td>{data.tanggalBencana}</td>
              <td>{data.provinsi}</td>
              <td>{data.kotaKabupaten}</td>
              <td>{data.alamatLokasi}</td>
              <td>{data.bencanaAlam}</td>
              <td>{data.penjelasanPenyebab}</td>
              <td style={{ textAlign: "center" }}>{data.korbanJiwa}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ textAlign: "right", marginTop: "20px", marginBottom:"20px"}}>
        {currentPage > 1 && (
          <Button variant="primary" onClick={prevPage}>
            Previous
          </Button>
        )}{" "}
        {currentPage < totalPages && (
          <Button variant="primary" onClick={nextPage}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default DataBencana;
