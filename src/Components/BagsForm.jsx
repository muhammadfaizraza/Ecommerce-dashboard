import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storage, fs } from "../Config/Config";
import swal from "sweetalert";
import { TextField } from "@mui/material";
import "../Styles/Form.css";

const BagsForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [image, setimage] = useState(null);
  let name, value;

  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
  const handleImage = (e) => {
    let selectedfile = e.target.files[0];
    if (selectedfile) {
      if (selectedfile && types.includes(selectedfile.type)) {
        setimage(selectedfile);
      } else {
        setimage(null);
      }
    } else {
      console.log("please select a file");
    }
  };

  const SubmitProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => console.log(error.message),
      () => {
        storage
          .ref("product-images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            fs.collection("bags")
              .add({
                title,
                description,
                price: Number(price),
                url,
              })
              .then(() => {
                swal({
                  icon: "success",
                  text: "data has been added",
                  title: "Success",
                });
                setTitle("");
                setDescription("");
                setPrice("");
                document.getElementById("file").value = "";

                setTimeout(() => {}, 3000);
              })
              .catch((error) =>
                swal({
                  icon: Error,
                  text: error.message,
                  title: "Error!",
                  type: "error",
                })
              );
          });
      }
    );
  };

  return (
    <div className="form">
      <div className="formHeader">Bags Form</div>
      <form method="POST">
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="inputDiv">
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="inputDiv">
          <input type="file" onChange={handleImage} />
        </div>
        <div className="inputDiv">
          <button type="submit" onClick={SubmitProduct}>
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BagsForm;
