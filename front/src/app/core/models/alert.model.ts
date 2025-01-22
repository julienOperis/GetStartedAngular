export type Alert = {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info'; // Using a union for predefined types
  };
  