import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Button} from '@mui/material';
import { GrClose } from 'react-icons/gr';
import './style.scss'
import { UserContext } from '../Context/UserContext';
import { updateProfile } from '../../services/request';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        <GrClose/>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function InfoModal({
  openModal,
  setOpenModal,
  headline,
  text,
  icon,
  inverse
}) {
  
  const { user } = React.useContext(UserContext) 
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState({border:'none'})

  React.useEffect(()=>{ 
    if(openModal){
      setOpen(openModal)
    }
    if(inverse){
      setTheme({background:'#242424',color:'#fff',border:'none'})
    }
  },[openModal])


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
    setOpenModal(false)
    await updateProfile(user)
  };

  return (
    <div> 
      <span variant="outlined" onClick={handleClickOpen}>
      </span>
        <BootstrapDialog 
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle style={theme} id="customized-dialog-title" onClose={handleClose} >
          <span style={{position: 'absolute',top:'10px'}} >{icon}</span>
          <span style={{fontSize:'1.6rem',fontWeight:'700',marginLeft:'65px'}}>{headline}</span>
          </BootstrapDialogTitle>
          <DialogContent style={theme} dividers>
            <div>
          <p style={{fontSize:'1.3rem',fontWeight:'500'}}>{text}</p>
           </div>
           
          </DialogContent>
          <DialogActions style={theme}>
            <Button style={{fontSize:'30px'}} onClick={handleClose}>
              ✔
            </Button>
          </DialogActions>
        </BootstrapDialog>
    </div>
  );
}