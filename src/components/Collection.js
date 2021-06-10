import React,{useEffect, useState} from 'react';
import { makeStyles,Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import StoreIcon from '@material-ui/icons/Store';
import Alert from '@material-ui/lab/Alert';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import sha256 from 'js-sha256';
import axios from 'axios';
import Web3 from 'web3';
import Marketplace from '../abis/Wnft.json';

const SERVER_API_LINK = "http://localhost:8000/api/"

const useStyles = makeStyles((theme) => ({

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Collection = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState()
  const [imgData, setImgData] = useState()
  const [description, setDescription] = useState()
  const [account, setAccount ] = useState();
  const [message, setmessage] = useState(null)
  const [isMessage, setIsMessage] = useState(false)
  const [messageType, setMessageType] = useState("success")
  const [assets, setAssests] = useState([])
  const [marketplace, setMarketplace ] = useState();
  const [price, setPrice] = useState()
  useEffect(() => {
    loadBlockchainData()
    getAssets()
  }, [])

  const loadBlockchainData = async () => {
    const web3 = new Web3(window.web3.currentProvider);
    // Load account
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const market_place = new web3.eth.Contract(Marketplace.abi, networkData.address)
      setMarketplace(market_place)
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  const onChangePicture = e => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  const getAssets = async () => {
    try {
      let response = await axios.post(`${SERVER_API_LINK}get-my-token`,{
        address:account
      })
      setAssests(response.data)
    } catch (e) {
        console.log(e.Error)
    }
  }

  const mint = async (hash) => {
    const transaction = await marketplace.methods.mint(hash).send({from: account})
    console.log(transaction.transactionHash)
    return transaction;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const createHash = () => {
    return sha256(imgData) 
  }
  
  const handleClickClose = () => {
    setOpen(false);
  };

  const lengthReturn = async () => {
    const lengths = await marketplace.methods.lengthReturn().call()
    return lengths
  }
 
  const Assets = (
    assets.map(item => {  
     return (
        <div className="card token-card2 mr-4 mt-5 mb-5">
          <img src={`http://localhost:8000/${item.image}`} className="mt-3 token-image"/>
          <row>
            <div className="col-lg-12 card-body">
              <div className="left-text col-lg-8">
                <span style={{color:"rgb(138, 147, 155)"}}>{item.token_name}</span><br></br>
                <span > {item.description} </span>
              </div>
              <div className="col-lg-4 right-text ">
                <span style={{color:"rgb(138, 147, 155)",whiteSpace :"nowrap"}}>price</span>
                <span style={{whiteSpace :"nowrap"}} > <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="15%"></img> 0.036</span>
              </div>
            </div>
          </row>
        </div>
      )
    })
  )


  // async function createNFT(image) {
  //   try {
  //     let response = await axios.post(`${SERVER_API_LINK}create`, image)
  //     console.log(response.data)
  //     return { response }
  //   } catch (e) {
  //       console.log(e.Error)
  //   }
  // }

  const handleSubmit = async () => {
    const hash = createHash()
    const image = new FormData()
    image.append("hash", hash)
    image.append("name", name)
    image.append("image", picture)
    image.append("description", description)
    image.append("address", account)
    image.append("price",price)

    const minting = await mint(hash)
    console.log(minting)

    if (minting.transactionHash !== '') {
      let response;
      const token_id = await lengthReturn()
      console.log("token id",token_id)
      image.append("token_id",token_id)
      try {
        response = await axios.post(`${SERVER_API_LINK}create`, image)
        console.log(response)
      } catch (e) {
          console.log(e.Error)
      }
      console.log(response)
      if(response == null ) {
        setIsMessage(true)
        setMessageType("success")
        setmessage(" Token Created Successfully")
        setTimeout(() => {
          setIsMessage(false) ;
        }, 1500);
      } else {  
        setIsMessage(true)
        setMessageType("warning")
        setmessage(" This Token Already Exists ")
        setTimeout(() => {
          setIsMessage(false) ;
        }, 1500);
      }
    } else {
      setIsMessage(true)
      setMessageType("warning")
      setmessage(" Transaction failed ")
      setTimeout(() => {
        setIsMessage(false) ;
      }, 1500);
    }
      
  }
  
  return (
    <div className="row">
    <div className="col-lg-3 collection-sidenav filter ">
      <div className="collection-filter ml-3">
        <Typography className="heading"> <ListIcon className="mr-3"/>  My Payouts</Typography>
        <Typography className="heading"> <StoreIcon className="mr-3"/>  My Collections</Typography>
        <Typography className="heading"> <InfoIcon className="mr-3"/>  Community & Help</Typography>
       </div> 
      </div>
      <div className="col-md-9 collection-right mt-5 Token_root ">
       <h4 className="mb-5">My Collections</h4>
        <div className="collection-card mt-5 mr-4">
        <div className="icon"> <StoreIcon className="store-icon"/>
         </div>
        <span className="span"> Create new collection </span>
        <button type="button" class="btn btn-primary create" onClick={handleClickOpen}>Create </button>
        <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
         {isMessage &&
          <Alert severity={messageType} style={{ position:'absolute' , marginLeft:'115px'}}>{message}</Alert>
        }
        <DialogTitle id="alert-dialog-title">{"Create Your Collection"}</DialogTitle>
        <DialogContentText id="alert-dialog-description">
          You can change these values later, along with configuring external URls,<br></br>
                payment options, and trading fees
          </DialogContentText>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="DialogContentText">
           <label className="black">Logo* </label>
           <br></br>
           <label id="logo" >(350 x 350 recommended) </label>
           <div clas="file_input_wrap">
              <input type="file" width="50px" height="50px" name="file" id="imageUpload" hidden accept="image/*" onChange={(e)=>onChangePicture(e)}/>
              <label for="imageUpload" className="img-icon"><ImageOutlinedIcon className="svg"/></label>
              <img width="70%" height="70%" src={imgData} />
            </div>
            <div>
              <label className="black" style={{marginTop:'20px'}}>Name*</label>
              <input 
                type="text" 
                placeholder="Example: Treasures of the Sea" 
                className="input-text"
                onChange={e => setName(e.target.value)}/>
              <label className="black" style={{marginTop:'20px'}}>price*</label>
              <input 
                type="text" 
                placeholder="Price: in Eth" 
                className="input-text"
                onChange={e => setPrice(e.target.value)}/>
              <label className="black" style={{marginTop:'13px'}}>Description*</label>
              <textarea 
                placeholder="Provide a description for your store. Markdown syntax is supported" 
                className="input-text textarea"
                onChange={e => setDescription(e.target.value)}/>
            </div>  
          </DialogContentText>
            <button type="button" class="btn btn-primary create last" onClick={handleSubmit} > Create </button>
          </DialogContent>
      </Dialog>
      </div>
      {Assets}</div>
        </div> 
  )
}
