import React from 'react'
import {userServices} from '../services/Services'
import AppBar from '../components/Appbar';
import Card from '../components/Card';
import { Button, Container,Grid } from '@material-ui/core';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Loading from '../components/Loading'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AlertDialog from '../components/Dialog';

function Home() {
    const [state, setstate] = React.useState({
        data:null,
        sort:true,
        loading:false,
        dialogOpen:false
    })
    const { users } = userServices;
React.useEffect( () => {
    setstate({...state,loading:true})
   users('/users').then(res => setstate({...state,data:res.sort((a,b) => {if (a.name < b.name)return -1;if (a.name > b.name)return 1;return 0;}),loading:false}))
}, [])

const sortOrder = React.useCallback( ()=>{
if(state.sort){
   const result =  state.data.sort((a,b) => {
    if (a.name > b.name)
    return -1;
if (a.name < b.name)
    return 1;
return 0;
      
   })
   setstate({...state,data:result,sort:false});
   
}else{
    const result =  state.data.sort((a,b) => {
        if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
          
       })
       setstate({...state,data:result,sort:true});
}
}
);
const handleDialog = React.useCallback(()=>{
    setstate({...state,dialogOpen:true})
}
)
const userDataHandel  = React.useCallback( v => setstate({...state,data:[...state.data,v].sort((a,b) => {
    if (a.name < b.name)
    return -1;
if (a.name > b.name)
    return 1;
return 0;
      
   }),dialogOpen:false}))
console.log(state.data)
    return (
        <div>
            {state.loading ? 
            <Loading/>
            :
            <>
             <AppBar/>
           <Container fixed>
               <div className="actions-buttons">
               <Button variant="contained" color="primary" onClick={sortOrder} className="btn-sort" endIcon={<SyncAltIcon className="short-icon"/>}>sort</Button>
               <Button variant="contained" color="primary" onClick={handleDialog} startIcon={<PersonAddIcon/>} className="btn-add">Add User</Button>
               </div>
              
           <Grid container spacing={3}>
               {state.data && state.data.map(user => 
                <Grid item xs={12} md={3} >
                    <Card data = {user}/>
                </Grid>
                )}
           
        </Grid>
        </Container> 
            </>
        }
           <AlertDialog  open ={state.dialogOpen} userdata = {userDataHandel}/> 
          
        </div>
    )
}
export default React.memo(Home)