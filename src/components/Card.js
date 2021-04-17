import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';


export default function MediaCard({data}) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
    

  return (
    <Card className="user-card">
        <CardHeader
        avatar={
          <Avatar >
            {data.name.slice(0,1)}
          </Avatar>
        }
      
        title={data.name}
        subheader={data.username}
      />
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={data.email} />
      </ListItem>
      
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="More Details" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="address">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={`${data.address.street},${data.address.city}`} />
          </ListItem>
           <ListItem button className="phone">
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={data.phone} />
          </ListItem>
          <ListItem button className="company">
            <ListItemIcon>
              <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText primary={data.company.name} />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </Card>
  );
}
