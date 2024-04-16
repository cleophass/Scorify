import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000, // Choisissez le port que vous préférez
  //   host: '192.168.1.30', // Remplacez 'votre_adresse_ip' par votre propre adresse IP
  //   open: true, // Ouvrir automatiquement le navigateur
  // },
});
