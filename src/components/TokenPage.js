import React, { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AppsIcon from '@material-ui/icons/Apps';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const SERVER_API_LINK = "http://localhost:8000/api/"

// const getAssets = async () => fetch(`${SERVER_API_LINK}get-all`).then(res => res.json())

export const TokenPage = () => {

  const [assets, setAssests] = useState([])

  useEffect(()=>{
    getAssets();
  },[])

  const getAssets = async () => {
    try {
      let response = await axios.get(`${SERVER_API_LINK}get-all`)
      setAssests(response.data)
    } catch (e) {
        console.log(e.Error)
    }
  }

  const Assets = (
    assets.map(item => {
      return (
        <div className="card token-card mr-4">
          <img src={`http://localhost:8000/${item.image}`} className="mt-3 token-image"/>
          <row>
            <div className="col-lg-12 card-body">
              <div className="left-text col-lg-8">
                <span style={{color:"rgb(138, 147, 155)"}}>{item.token_name}</span><br></br>
                <span > {item.description} </span>
              </div>
              <div className="col-lg-4 right-text ">
                <span style={{color:"rgb(138, 147, 155)"}}>price</span>
                <span style={{whiteSpace :"nowrap"}} > <img src={`http://localhost:8000/${item.image}`} width="26%"></img> 0.036</span>
              </div>
              <button className="buy-now mt-3">Buy Now</button>
            </div>
          </row>
        </div>
      )
    })
  )

  return (
    <div className="row">
    <div className="col-lg-3">
      <div className="filter">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading"> <StarIcon className="mr-2"/>  Status</Typography>
          </AccordionSummary>
          <AccordionDetails className="FeaturedFilter--items">
          <button className="FeaturedFilter">Buy Now</button>
          <button className="FeaturedFilter">On Auction</button>
          <button className="FeaturedFilter">New </button>
          <button className="FeaturedFilter">Has Offers</button>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="heading"><AttachMoneyIcon className="mr-2"/> Price</Typography>
          </AccordionSummary>
          <AccordionDetails className="Panel--isContentPadded">
            <FormControl className="select">
          <InputLabel id="demo-simple-select-label">$</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
          >
            <MenuItem value={10}>United States Dollar(USD)</MenuItem>
            <MenuItem value={20}>Ether(ETH)</MenuItem>
          </Select>
        </FormControl> 
          </AccordionDetails>
        </Accordion>
            <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="heading"><AppsIcon className="mr-2"/> Collection</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
            <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="heading"><InsertLinkIcon className="mr-2"/> Chains</Typography>
          </AccordionSummary>
          <AccordionDetails className="check">
            <FormControlLabel
              control={
              <Checkbox
                checked={false}
                name="checkedB"
                color="primary"
                  />
                }
                label="Ethereum"
            />
            <FormControlLabel
              control={
              <Checkbox
                checked={false}
                name="checkedB"
                color="primary"
                  />
                }
                label="Matic"
            />
            <FormControlLabel
              control={
              <Checkbox
                checked={false}
                name="checkedB"
                color="primary"
                  />
                }
                label="Klaytn"
            />
        
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className="heading"><LocalOfferIcon className="mr-2"/> On Sale In</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
      </div>
    <div className="col-lg-9 mt-5 Token_root ">
    {Assets}
    </div>
  </div>
  )
}
