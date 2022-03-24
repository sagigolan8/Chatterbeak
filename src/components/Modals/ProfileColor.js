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

export default function ColorModal({openModal,setOpenModal}) {
  
  const { user, setUser } = React.useContext(UserContext) 

  React.useEffect(()=>{ 
    if(openModal)
    setOpen(openModal)
  },[openModal])

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
    setOpenModal(false)
    await updateProfile(user)
  };

  const colorSelected = () => {
    const bgColor = document.querySelector('#colorize-bg').value
    const textColor = document.querySelector('#colorize-text').value
    document.querySelector('.all').style.background = bgColor
    document.querySelector('.all').style.color = textColor
    document.querySelector('.pic').style.background = bgColor
    document.querySelector('.pic').style.color = textColor
}

  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
      {user.name.charAt(0).toUpperCase()}
      </span>
      <BootstrapDialog 
      
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
          Pick your colors 
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div>
          background color - <input onChange={()=>colorSelected()} id="colorize-bg" type="color"/>
        </div>
          <div>
          Text color - <input onChange={()=>colorSelected()} id="colorize-text"type="color"/>
        </div>
         
        </DialogContent>
        <DialogActions >
          <div className="all">
            <div className="pic">
            {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <Button style={{fontSize:'30px'}} onClick={handleClose}>
            ✔
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}