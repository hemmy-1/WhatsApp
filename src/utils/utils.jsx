import Toast from '../components/Toast';

// Usage: Call showToast(type, message) from anywhere
// Example: showToast('success', 'Operation successful!')

import React, { useState } from 'react';

let toastRef = null;

export const setToastRef = (ref) => {
    toastRef = ref;
};

export function showToast(type, message) {
    if (toastRef) {
        toastRef(type, message);
    }
}

// ToastProvider component to wrap your app
export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ visible: false, type: 'info', message: '' });

    const show = (type, message) => {
        setToast({ visible: true, type, message });
        setTimeout(() => setToast({ ...toast, visible: false }), 3000);
    };

    React.useEffect(() => {
        setToastRef(show);
        // Cleanup
        return () => setToastRef(null);
    }, []);

    return (
        <>
            {children}
            {toast.visible && <Toast type={toast.type} message={toast.message} />}
        </>
    );
};