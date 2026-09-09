export interface Obra {
    id: string;
    titulo: string;
    descripcion: string;
    tecnica: string;
    dimensiones: string;
    imagen_url: string;
    estado: 'disponible' | 'vendido' | 'reservado';
    created_at?: string;
}

export interface ArtistaConfig {
    nombre: string;
    disciplina: string;
    whatsappNumero: string; // Formato internacional sin símbolos (ej: 5491112345678)
    bio: string;
    redesSociales?: {
        instagram?: string;
        tiktok?: string;
        facebook?: string;
    };
    secciones: {
        mostrarVideos: boolean;
        videoUrl?: string;
    };
    colores: {
        primario: string;
        acento: string;
        fondo: string;
        tarjeta: string;
        texto: string;
    };
}
