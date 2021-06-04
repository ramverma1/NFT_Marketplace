import React,{useState} from 'react';
import { makeStyles,Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import StoreIcon from '@material-ui/icons/Store';
import Alert from '@material-ui/lab/Alert';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';

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
   const [open, setOpen] = React.useState(false);
   const [picture, setPicture] = useState(null);
   const [imgData, setImgData] = useState(null);

   const [message, setmessage] = useState(null)
   const [isMessage, setIsMessage] = useState(false)
   const [messageType, setMessageType] = useState("success")
 
   const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClickClose = () => {
    setOpen(false);
  };

   const handleSubmit=()=>{
       if(false)
      {
         setIsMessage(true)
          setMessageType("success")
          setmessage(" Token Created Successfully")
          setTimeout(() => {
          setIsMessage(false) ;
        }, 1500);
      }
      else{
         {
         setIsMessage(true)
         setMessageType("warning")
          setmessage(" This Token Already Exists ")
          setTimeout(() => {
          setIsMessage(false) ;
        }, 1500);
      }
        
      }
      
   }
  
  return (
    <div className="row">
    <div className="col-lg-2 collection-sidenav filter ">
    <div className="collection-filter ml-3">
        <Typography className="heading"> <ListIcon className="mr-3"/>  My Payouts</Typography>
        <Typography className="heading"> <StoreIcon className="mr-3"/>  My Collections</Typography>
        <Typography className="heading"> <InfoIcon className="mr-3"/>  Community & Help</Typography>
       </div> 
      </div>
      <div className="col-lg-10 collection-right mt-5">
        <h4 className="mb-5">My Collections</h4>
        <div className="collection-card ">
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
              <input type="file" name="imageUpload" id="imageUpload" hidden accept="image/*" onChange={onChangePicture}  />
              <label for="imageUpload" className="img-icon"><ImageOutlinedIcon className="svg"/></label>
                <img width="100%"  src={imgData} />
              </div>
            <div>
              <label className="black" style={{marginTop:'20px'}}>Name*</label>
              <input 
                type="text" 
                placeholder="Example: Treasures of the Sea" 
                className="input-text"
                onChange={e => setName(e.target.value)}/>
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
        <div className="collection-card ml-5">
        </div>
      </div>
    </div>
  )
}
