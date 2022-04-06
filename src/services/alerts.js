import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const niceAlert = (title, timer = 2000, icon = 'error') => Swal.fire({
    position: 'center',
    icon,
    title,
    showConfirmButton: false,
    timer
  })

export const deleteAlert = async (title) =>{
    const alert = await Swal.fire({
      title,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it'
    })
    if (alert.isConfirmed) {
      Swal.fire(
        'Deleted',
        'Your account has been deleted.',
        'success'
      )
      return true
    }  
  }


export const errorNotification = (text,position)=>{
  toast.error(text, {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}

export const successNotification = (text,position)=>{
  toast.success(text, {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}

export const infoNotification = (text,position)=>{
  toast.info(text, {
    position,
    autoClose: 4500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}