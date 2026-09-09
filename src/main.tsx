import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { artistaConfig } from './config/theme';

// Inyección de variables CSS globales según el tema del artista
const root = document.documentElement;
root.style.setProperty('--color-brand-primary', artistaConfig.colores.primario);
root.style.setProperty('--color-brand-accent', artistaConfig.colores.acento);
root.style.setProperty('--color-brand-bg', artistaConfig.colores.fondo);
root.style.setProperty('--color-brand-card', artistaConfig.colores.tarjeta);
root.style.setProperty('--color-brand-text', artistaConfig.colores.texto);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
