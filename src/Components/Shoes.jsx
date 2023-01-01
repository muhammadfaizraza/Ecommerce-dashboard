import React, { Fragment } from "react";
import "../Styles/table.css";
// import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Shoes = () => {
  return (
    <Fragment>
    <div className="table">
      <table>
        <caption>Statement Summary</caption>
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Period</th>
            <th scope="col">Period</th>
            <th scope="col">Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account">Visa - 3412</td>
            <td data-label="Due Date">04/01/2016</td>
            <td data-label="Amount">$1,190</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              Visa - 6076
            </td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$2,443</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              Corporate AMEX
            </td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$1,181</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              Visa - 3412
            </td>
            <td data-label="Due Date">02/01/2016</td>
            <td data-label="Amount">$842</td>
            <td data-label="Period">01/01/2016 - 01/31/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
          </tr>
        </tbody>

      </table>
      {/* <Pagination count={1} variant="outlined" /> */}
<span className="addMore">
<Fab color="primary" aria-label="add">
<Link to="/shoesform">

<AddIcon />
</Link>
</Fab>

</span>
    </div>
  </Fragment>)
}

export default Shoes