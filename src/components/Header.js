import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import OpenSea from '../assets/opensea-logo.webp';
import SearchIcon from "@material-ui/icons/Search";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TokenPage } from './TokenPage';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Modal } from 'react-bootstrap';
import Web3 from 'web3';


export const Header = () => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [ account, setAccount ] = React.useState();
  const [ balance, setBalance ] = React.useState();

  useEffect(()=>{
    loadBlockchainData()
  })

  const loadBlockchainData = async () => {
    const web3 = new Web3(window.web3.currentProvider);
    // Load account
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const bal = await web3.eth.getBalance(accounts[0])
    const getbalance = web3.utils.fromWei(new web3.utils.BN(bal),'ETHER')
    console.log(getbalance)
    setBalance(getbalance)
  }

  const HandleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleClick() {
    window.location.href = "/asset"
   }
   function handleCollection(){
     window.location.href="/collection"
   }
   
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
  return (
    <div className="main-header">
     <nav class="navbar navbar-expand-lg navbar-light ">
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand ml-5" href="#" style={{    fontSize: "40px",
    fontWeight: "500", fontFamily:"cursive",    textShadow: "2px 2px 5px" }}><span>W</span><span style={{color:"red"}}>N</span><span >F</span><span style={{color:"yellow"}}>T</span></a>
      <input class="form-control mr-sm-2 form-control rounded" type="search" placeholder="Search" aria-label="Search" />
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#" onClick={handleClick}> Marketplace <span class="sr-only">(current)</span></a>
      </li>
      <div class="dropdown">
      <li class="nav-item"><a class="nav-link" href="#"><AccountCircleIcon/> </a> 
        <div class="dropdown-content">
          <a href="#">My Profile</a>
          <a  href="#" onClick={handleCollection}>My Collection </a> 
          <a  href="#">My Favourites </a>
          <a  href="#">My Account Settings </a>
          <a  href="#">Log out </a>   
        </div> 
      </li>
      </div>  
      <li class="nav-item">
          <Button variant="primary" className="nav-link" onClick={handleShow}>
          <AccountBalanceWalletIcon/>
      </Button>
      <Modal show={show} onHide={HandleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title><div><AccountCircleIcon className="wallet-icon"/><span> {account}</span></div></Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <div className="wallet">
         <span className="total"> Total balance </span> 
         <br/>
         <span className="balance" style={{whiteSpace :"nowrap"}}>  $0.000<img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="2%"></img> {balance} ETH</span> 
         </div>
         <button className="btn-btn-primary add-funds"> Add Funds </button> 
        </Modal.Body>
        </Modal>
      </li>
    </ul>
  </div>
</nav>
</div>
  )
}
