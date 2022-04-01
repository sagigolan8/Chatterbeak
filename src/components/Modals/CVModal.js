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
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import '.././Team/style.css'

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
        < GrClose />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CVModal() {
  
  const [open, setOpen] = React.useState(false);

  const initial = {
		y: 0,
		opacity: 0,
	};

  const animate = {
		y: 0,
		opacity: 1,
	};

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const downloadCV = () =>{
    saveAs("assets/Sagi Golan CV.pdf", "Sagi Golan CV.pdf");
  }

  return (
    <div>
      <div className="container-team-wrapper">
    <div onClick={handleClickOpen} className="container-team" >
	<img className='img-team' src="OurTeam.png" />
	<div className="title">Sagi Golan</div>
    </div>
    </div> 
      <span variant="outlined" onClick={handleClickOpen}>
      </span>
        <BootstrapDialog 
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <motion.div
            initial={initial}
            transition={{ delay: 0.1, duration:0.2 }}
            animate={animate}
          >
          <BootstrapDialogTitle 
            style={{textAlign:'center',fontWeight:'600',fontSize:'clamp(1rem,3vw,1.5rem)',background:'#242424',color:'#fff',border:'none'}} 
            id="customized-dialog-title" 
            onClose={handleClose}
            >
            Sagi Golan CV 
            <p style={{fontSize:'clamp(.5rem,1vw,.7rem)',textAlign:'center'}}>(Improved Quality Following Download)</p>
          </BootstrapDialogTitle>
          <DialogContent style={{background:'#242424',color:'#fff',border:'none'}} dividers>
            <img style={{maxWidth:'100%'}} src="./assets/Sagi-Golan-CV-PS.png" alt="sagi-golan-cv" />
          </DialogContent>
          <DialogActions style={{background:'#242424',color:'#fff',border:'none'}}>
            <Button onClick={()=>downloadCV()} style={{fontSize:'30px',color:'#fff'}}>
            <FaDownload/>
            </Button>
            <Button style={{fontSize:'30px',color:'#fff'}} onClick={handleClose}>
              ✔
            </Button>
          </DialogActions>
          </motion.div>
        </BootstrapDialog>
    </div>
  );
}