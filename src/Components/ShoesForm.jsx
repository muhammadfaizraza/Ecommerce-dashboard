import React from "react";
import { TextField } from "@mui/material";
import "../Styles/Form.css";

const ShoesForm = () => {
  return (
    <div className="form">
      <div className="formHeader">Shoes Form</div>
      <form>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
          />
        </div>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
          />
        </div>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
        </div>
        <div className="inputDiv">
          <input type="file" />
        </div>
        <div className="inputDiv">
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ShoesForm;
