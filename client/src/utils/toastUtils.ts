import { toast } from 'react-toastify';

export const toastError = (message: string): void => {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 2000,
    });
};

export const toastSuccess = (message: string): void => {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 2000,
    });
};
