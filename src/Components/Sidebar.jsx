import React from 'react'
import "../Styles/sidebar.css"
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CategoryIcon from '@mui/icons-material/Category';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import IceSkatingTwoToneIcon from '@mui/icons-material/IceSkatingTwoTone';
import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='productItem'>
    
    <Link to="/dashboard">
          <h6>Dashboard</h6>
        </Link>   
    <GridViewIcon/>
    </div>

<div className='productItem'>
<CategoryIcon/>
<h5> Category     </h5>    
</div>
<div className='productItem'>
<BookmarkBorderIcon/>
<h5>Orders</h5>    
</div>
<div className='productItem'>
<ShoppingBagIcon/>
<Link to="/bags">
          <h6>Bags</h6>
        </Link></div>
<div className='productItem'>
<IceSkatingTwoToneIcon/>
<Link to="/shoes">
          <h6>Shoes</h6>
        </Link></div>

<div className='productItem'>
<SupervisedUserCircleIcon/>
<h5> User    </h5>    
</div>


    </div>
  )
}

export default Sidebar