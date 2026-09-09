import { useState } from 'react';
import { Header } from './components/public/Header';
import { Galeria } from './components/public/Galeria';
import { Footer } from './components/public/Footer';
import type { Obra } from './types';

// Obras MOCK para desarrollo visual
const OBRAS_MOCK: Obra[] = [
    {
        id: '1',
        titulo: 'Composición Orgánica I',
        descripcion: 'Obra realizada sobre lienzo de lino utilizando pigmentos naturales y técnicas mixtas de textura.',
        tecnica: 'Técnica Mixta / Óleo',
        dimensiones: '120 x 90 cm',
        imagen_url:
            'https://plus.unsplash.com/premium_photo-1776654658784-6465cd9e6a63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        estado: 'disponible',
    },
    {
        id: '2',
        titulo: 'Estructura Geométrica #4',
        descripcion: 'Escultura en bronce con pátina oscura y base de mármol pulido.',
        tecnica: 'Escultura en Bronce',
        dimensiones: '45 x 20 x 20 cm',
        imagen_url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
        estado: 'disponible',
    },
    {
        id: '3',
        titulo: 'Sombra y Silencio',
        descripcion: 'Exploración del contraste con acrílico y hoja de oro sobre madera.',
        tecnica: 'Acrílico y Hoja de Oro',
        dimensiones: '80 x 80 cm',
        imagen_url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
        estado: 'vendido',
    },
];

export default function App() {
    const [obraSeleccionada, setObraSeleccionada] = useState<Obra | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-brand-bg)] text-[var(--color-brand-text)]">
            <Header />

            <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
                <Galeria obras={OBRAS_MOCK} onSelectObra={(obra) => setObraSeleccionada(obra)} />
            </main>

            {/* Aquí vincularemos el ModalObra en el siguiente paso */}
            {obraSeleccionada && (
                <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs shadow-lg">
                    Obra elegida para modal: <strong>{obraSeleccionada.titulo}</strong>
                </div>
            )}
            <Footer />
        </div>
    );
}
