"use client";

import { useEffect } from 'react';
import { useToast, ToastType } from '../context/ToastContext';

const toastStyles = {
  success: {
    bg: 'bg-green-500',
    icon: '✓',
  },
  error: {
    bg: 'bg-red-500',
    icon: '✕',
  },
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onDismiss={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

interface ToastProps {
  id: number;
  message: string;
  type: ToastType;
  onDismiss: () => void;
}

function Toast({ message, type, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onDismiss]);

  const styles = toastStyles[type];

  return (
    <div
      className={`flex items-center gap-4 rounded-lg p-4 text-white shadow-lg animate-fade-in-soft ${styles.bg}`}
    >
      <span>{styles.icon}</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
