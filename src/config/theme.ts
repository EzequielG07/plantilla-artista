import type { ArtistaConfig } from '../types';

export const artistaConfig: ArtistaConfig = {
    nombre: 'Sofía Albarracín',
    disciplina: 'Arte Contemporáneo & Escultura',
    whatsappNumero: '5491112345678',
    bio: 'Exploro la interacción entre la materia orgánica y las estructuras geométricas a través de la escultura y el óleo.',

    // Enlaces a Redes Sociales del Artista
    redesSociales: {
        instagram: 'https://instagram.com/sofiaalbarracin.arte',
        tiktok: 'https://tiktok.com/@sofiaalbarracin.arte',
        facebook: 'https://facebook.com/sofiaalbarracin.arte',
    },
    secciones: {
        mostrarVideos: true,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    colores: {
        primario: '#18181b', // Títulos y encabezados
        acento: '#d97706', // Botones y enlaces
        fondo: '#fafafa', // Fondo principal de la web
        tarjeta: '#ffffff', // Fondo de las tarjetas/header/footer
        texto: '#27272a', // Texto general
    },
};
