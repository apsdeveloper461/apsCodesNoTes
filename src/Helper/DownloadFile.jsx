import toast from 'react-hot-toast';
import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';
import { MdDownload } from "react-icons/md";

const getBgToastColor = ( condition,theme) => {
  return theme === condition ? '#fff' : '#333';
};

export const downloadFileHandler = (url,theme) => {
  // Show loading toast
  const loadingToast = toast.loading('Preparing download...', {
    icon: <FaCircleNotch style={{ animation: 'spin 1.5s linear infinite' }} />,
    style: {
      backgroundColor: getBgToastColor( 'light',theme), // Adjust theme condition accordingly
      color: getBgToastColor( 'dark',theme), // Adjust theme condition accordingly
      fontWeight: '600',
    },
  });

  setTimeout(() => {
    const link = document.createElement('a');
    console.log(url);
    link.href = 'https://drive.google.com/uc?export=download&id='+url; // Add query string to force download

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Dismiss the loading toast
    toast.dismiss(loadingToast);

    // Show success toast
    toast.success('Download Started', {
      icon: <MdDownload className='text-green-700' />,
    style: {
      backgroundColor: getBgToastColor( 'light',theme), // Adjust theme condition accordingly
      color: getBgToastColor( 'dark',theme), // Adjust theme condition accordingly
      fontWeight: '600',
    },
    });
  }, 1500); // Adjust delay as needed
};