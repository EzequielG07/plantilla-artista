import type { Obra } from '../../types';

interface GaleriaProps {
    obras: Obra[];
    onSelectObra: (obra: Obra) => void;
}

export const Galeria = ({ obras, onSelectObra }: GaleriaProps) => {
    return (
        <section className="w-full">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--color-brand-primary)' }}>
                    Obras Disponibles & Colecciones
                </h2>
                <span className="text-sm font-medium text-gray-500">
                    {obras.length} {obras.length === 1 ? 'obra' : 'obras'} en exhibición
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {obras.map((obra) => {
                    const esVendida = obra.estado === 'vendido';

                    return (
                        <article
                            key={obra.id}
                            onClick={() => onSelectObra(obra)}
                            className="group cursor-pointer rounded-xl overflow-hidden bg-[var(--color-brand-card)] border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
                        >
                            {/* Contenedor de Imagen */}
                            <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={obra.imagen_url}
                                    alt={obra.titulo}
                                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                                        esVendida ? 'grayscale opacity-75' : ''
                                    }`}
                                    loading="lazy"
                                />

                                {/* Badge de Estado */}
                                <div className="absolute top-3 right-3">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${
                                            esVendida
                                                ? 'bg-gray-900/80 text-white'
                                                : 'bg-emerald-500/90 text-white shadow-xs'
                                        }`}
                                    >
                                        {obra.estado}
                                    </span>
                                </div>
                            </div>

                            {/* Información Breve de la Obra */}
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                        {obra.tecnica}
                                    </span>
                                    <h3
                                        className="text-lg font-bold mt-1 group-hover:text-[var(--color-brand-accent)] transition-colors"
                                        style={{ color: 'var(--color-brand-primary)' }}
                                    >
                                        {obra.titulo}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{obra.descripcion}</p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                                    <span>{obra.dimensiones}</span>
                                    <span
                                        className="font-bold group-hover:translate-x-1 transition-transform"
                                        style={{ color: 'var(--color-brand-accent)' }}
                                    >
                                        Ver detalle &rarr;
                                    </span>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
