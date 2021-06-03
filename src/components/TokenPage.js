import React from 'react';
import Image1 from '../assets/token/crypoterior.png';
import Image2 from '../assets/token/crypto.gif';
import Art from '../assets/token/art-light.svg';
import Music from '../assets/token/music-light.svg';
import Domain from '../assets/token/domain-names-light.svg';
import Virtual from '../assets/token/virtual-worlds-light.svg';
import Trading from '../assets/token/trading-cards-light.svg';
import Utility from '../assets/token/utility-light.svg';
import Sports from '../assets/token/sports-light.svg';
import Collectibles from '../assets/token/collectibles-light.svg';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  root: {
    width: '20%',
  },
});

export const TokenPage = () => {
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

    <div className="col-md-9 mt-5 Token_root ">
        <div className="card token-card mr-2">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image1} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}} > <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
       <div className="card token-card mr-2">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src="https://lh3.googleusercontent.com/i38dNKQsaL3sUbl3jT5HCwNze9hEb0dvMgISNUIWAd1L5YRkZ-j84N9dTZW0AXkGy6Rh0X-a_LH-HWnt0yjbr2rIJ5lAF75HRZ_TKqI=s262" width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}}> <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
       <div className=" card token-card">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image2} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}} > <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
       <div className="card token-card mr-5">
        <header>
           <IconButton className="icon-button">
           <FavoriteBorderIcon />
           </IconButton>
        </header>
          <img src={Image1} width="auto"/>
          <row>
          <div className="col-lg-12 card-body">
          <div className="left-text col-lg-8">
            <span style={{color:"rgb(138, 147, 155)"}}>BASTARD GAN PUNKS</span><br></br>
            <span > BASTARD GAN PUNKS V2... </span>
          </div>
          <div className="col-lg-4 right-text ">
            <span style={{color:"rgb(138, 147, 155)"}}>price</span>
            <span style={{whiteSpace :"nowrap"}}> <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="26%"></img> 0.036</span>
          </div>
           </div>
          </row>
      </div>
      
    </div>
    
    </div>
   
  
  
  )
}
