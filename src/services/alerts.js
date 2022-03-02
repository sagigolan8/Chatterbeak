import Swal from 'sweetalert2'

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
      confirmButtonText: 'Yes, delete it!'
    })
    if (alert.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your account has been deleted.',
        'success'
      )
      return true
    }  
  }