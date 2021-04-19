import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const notify = (type, content) => {



    switch (type) {
        case 'success':
            return toast.success(content, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,

            });
        case 'error':
            return toast.error(content, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

            case 'order':
                return toast.info(content, {
                    position: "bottom-left",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

        default:
            return toast.error(content, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
    }




    /*  if(type == 'success'){
         toast.success(content, {
             position: "bottom-right",
             autoClose: 3000,
             hideProgressBar: true,
             closeOnClick: false,
             pauseOnHover: false,
             draggable: false,
             progress: undefined,

             });
     }
     else{
         toast.error(content, {
             position: "bottom-right",
             autoClose: 3000,
             hideProgressBar: true,
             closeOnClick: false,
             pauseOnHover: false,
             draggable: false,
             progress: undefined,
             });
     } */
}







export default notify