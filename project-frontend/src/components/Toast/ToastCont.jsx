import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastCont = () => {
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ToastCont;
