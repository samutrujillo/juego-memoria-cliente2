const config = {
  socketServerUrl: process.env.NODE_ENV === 'production' 
    ? 'https://juego-memoria-servidor2.onrender.com/'  // URL del servidor secundario en producción
    : 'http://localhost:5000', // URL local para desarrollo
  socketOptions: {
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    timeout: 20000,
    forceNew: false,
    transports: ['websocket', 'polling']
  }
};

export default config;