import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, TextField } from '@material-ui/core';

export default function AlertDialog({open,userdata}) {
 
  const [state, setstate] = React.useState({
        "id":null,
        "name": "",
        "username": "",
        "email": "",
        "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
                "lat": "",
                "lng": ""
            }
        },
        "phone": "",
        "website": "",
        "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
        }
    
  });
  
  const onChangeHandle = (props)=>(e)=>{
      if(props === 'address' || props === 'company'){
        setstate({...state,[props]:{...state[props],[e.target.name]:e.target.value}})
      }else{
     setstate({...state,[e.target.name]:e.target.name ==='id' ? +e.target.value :e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)})
      }
  }
  const handleClose = () =>  { 
    userdata(state)}

    console.log(state)
  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Add Users"}</DialogTitle>
        <DialogContent>
        <form noValidate autoComplete="off">
        <Grid container spacing={3}>
        {Object.keys(state).map(key => 

          key ==='address' ?
          Object.keys(state[key]).map(address => 
            <Grid item xs={12} md={6}>
        <TextField onChange={onChangeHandle('address')}  name={address} label={address} />
        </Grid>
            
            )
            : key ==='company' ? 
            Object.keys(state[key]).map(company => 
                <Grid item xs={12} md={6}>
            <TextField onChange={onChangeHandle('company')}  name={company} label={company ==='name' ? `company ${company}`:company} />
            </Grid>
                
                )
            :
            <Grid item xs={12} md={6}>
            <TextField onChange={onChangeHandle('main')}  name={key} label={key} />
            </Grid>
            )}
        </Grid>
       

       </form>
        </DialogContent>
        <DialogActions>
         
          <Button disabled={!state.id} color="primary" variant="contained" onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
