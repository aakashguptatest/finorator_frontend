import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Table, Thead, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./Purchase-Invest.css";
import axios from "axios";
export default function Page2() {
  const username = sessionStorage.getItem("username");
  const location = useLocation();
  console.log(location.state.results);
  var results = location.state.results;
  console.log(results);
  const nav = useNavigate();
  function handleclick(results) {
    console.log("fghjkl;");
    nav("/mf/invest/Page3", { state: { results: results } });
  }
  function addToWatchlist(result){
    axios
        .post(
          "http://127.0.0.1:5000/users/watchlist",
          {
            username: username,
            result: result,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data.message)
        })
        .catch((error) => console.error(error));
  }

  return (
    
    <div>
      <Sidebar/>
      {" "}
      <Table>
        <Thead>
          <Tr>
            <Th style={{ width: "50%" }}>Scheme</Th>
            <Th style={{ width: "15%" }}>Min Invt</Th>
            <Th style={{ width: "14%" }}>Select Scheme</Th>
            <Th>Add to watchlist</Th>
          </Tr>
        </Thead>

        {Array.isArray(results) ? (
          results.map((result) => (
            <Tr key={result._id}>
              <Td>{result.scheme_name}</Td>
              <Td>{result.minimum_purchase_amount}</Td>
              <Td>
                <button style={{height: "100"}}
                  onClick={() => {
                    handleclick(result);
                  }}
                >
                  Go
                </button>
              </Td>
              <Td>
                <button
                  onClick={() => {
                    addToWatchlist(result);
                  }}
                >
                  Add
                </button>
              </Td>
            </Tr>
          ))
        ) : (
          <Tr>
            <Td>{results.scheme_name}</Td>
            <Td>{results.minimum_purchase_amount}</Td>
            <Td>
              <button
                onClick={() => {
                  handleclick(results);
                }}
              >
                Go
              </button>
            </Td>
            <Td>
                <button
                  onClick={() => {
                    addToWatchlist(results);
                  }}
                >
                  Add to Watchlist
                </button>
              </Td>
          </Tr>
        )}
      </Table>
    </div>
  );
}
