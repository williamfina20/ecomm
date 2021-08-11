import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await fetch("http://localhost:8000/api/list");
    const results = await result.json();
    setData(results);
  }

  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    fetchData();
  }

  return (
    <div>
      <Header />
      <div className="col-sm-8 offset-sm-2">
        <h1>Product List</h1>
        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                      <img
                        src={`http://localhost:8000/${item.file_path}`}
                        style={{ height: 80 }}
                      />
                    </td>
                    <td>
                      <span
                        onClick={() => deleteOperation(item.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
