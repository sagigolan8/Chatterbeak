
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
import { errorNotification, successNotification } from '../../services/alerts';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkPassword, setNewPassword } from '../../services/request';


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

export default function EditPassword({user}) {
  const oldPassword = React.useRef()
  const confirmPassword = React.useRef()

  const [changePassword, setChangePassword] = React.useState(false)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const validateOldPassword = async () =>{ 
    const isValidPassword = await checkPassword(user, oldPassword.current.value)
    if(!isValidPassword){
      return errorNotification('Password incorrect',"top-center")
    }
    else{
      confirmPassword.current.style.display = ""
      oldPassword.current.value = ""
      oldPassword.current.placeholder = "Enter new password"
      setChangePassword(true)
    }
  }
  
  const validateNewPassword = () =>{ 
    const newPassword = oldPassword.current
    const confirmNewPassword = confirmPassword.current
    if(confirmNewPassword.style.display === "none")
    return setChangePassword(false)
    if (newPassword.value.length < 6) {
      return errorNotification('Password needs to be 6 characters or more',"top-center")
    }
    else if(confirmNewPassword.value !== newPassword.value){
      return errorNotification('Password are not match',"top-center")
    }
    else{
      setNewPassword(user, newPassword.value)
      successNotification('Password changed!',"top-center")
      setChangePassword(false)
      setOpen(false)
    }
  }

  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
      Edit
      </span>
      <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
          Edit password 
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div>
            Password
            </div>         
            <div className="edit-password-wrapper" >
            <input 
              onKeyDown={(e) => {
                if(e.key === 'Enter'){
                  !changePassword ? validateOldPassword() : validateNewPassword()
                }
              }} 
              ref={oldPassword} 
              id="password-input" 
              className="edit-password" 
              type="password" 
              placeholder="Enter password" />
            </div>
            <div className="edit-password-wrapper">
            <input 
              onKeyDown={(e) => {
                if(e.key === 'Enter'){
                  !changePassword ? validateOldPassword() : validateNewPassword()
                }
              }} 
              ref={confirmPassword} 
              style={{display:'none'}} 
              id="confirm-password-input" 
              className="edit-password" 
              type="password" 
              placeholder="Confirm password" />
            </div>
            <div className="edit-password-wrapper">
            <Button 
              onClick={()=> !changePassword ? validateOldPassword() : validateNewPassword() } 
              variant='contained' 
              id="check-password-btn" 
              className="check-password-btn">
             Check password
            </Button>
            </div>
        </DialogContent>
        <DialogActions >
       
          <Button style={{fontSize:'30px'}} onClick={handleClose}>
            ✔
          </Button>
        </DialogActions>
        <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </BootstrapDialog>
    </div>
  );
}
















