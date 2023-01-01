import React, { Fragment, useState, useEffect } from "react";
import { fs } from "../Config/Config";
import "../Styles/table.css";
// import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
const Bags = () => {
  const [state, setState] = useState(false);
  const [product, setProduct] = useState([]);

  const getProdcts = async () => {
    const Products = await fs.collection("bags").get();
    const productsArray = [];
    for (var snap of Products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === Products.docs.length) {
        setProduct(productsArray);
        console.log(product);
      }
    }
  };

  useEffect(() => {
    getProdcts();
  }, []);
  return (
    <Fragment>
      <div className="table">
        <table>
          <caption>Bags List</caption>
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {product.map((item, ind) => (
            <tbody>
              <tr>
                <td data-label="Account">{item.title}</td>
                <td data-label="Amount">{item.description}</td>
                <td data-label="Due Date">{item.price}</td>

                <td data-label="Period">
                  <img className="productImg" src={item.url} alt="" />
                </td>
                <td data-label="Period"><DeleteIcon/> </td>
              </tr>
            </tbody>
          ))}{" "}
        </table>
        {/* <Pagination count={1} variant="outlined" /> */}
        <span className="addMore">
          <Fab color="primary" aria-label="add">
            <Link to="/bagsform">
              <AddIcon />
            </Link>
          </Fab>
        </span>
      </div>
    </Fragment>
  );
};

export default Bags;
