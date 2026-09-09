import { artistaConfig } from '../../config/theme';

export const Footer = () => {
    const redes = artistaConfig.redesSociales;
    const anioActual = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-brand-card)] border-t border-gray-200 mt-auto py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Info y Derechos */}
                <div className="text-center sm:text-left">
                    <p className="text-base font-bold" style={{ color: 'var(--color-brand-primary)' }}>
                        {artistaConfig.nombre}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">© {anioActual} — Todos los derechos reservados.</p>
                </div>

                {/* Links de Redes Sociales */}
                {redes && (
                    <div className="flex items-center gap-5">
                        {redes.instagram && (
                            <a
                                href={redes.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[var(--color-brand-accent)] transition-colors text-sm font-medium flex items-center gap-1.5"
                                aria-label="Instagram"
                            >
                                <span>Instagram</span>
                            </a>
                        )}

                        {redes.tiktok && (
                            <a
                                href={redes.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[var(--color-brand-accent)] transition-colors text-sm font-medium flex items-center gap-1.5"
                                aria-label="TikTok"
                            >
                                <span>TikTok</span>
                            </a>
                        )}

                        {redes.facebook && (
                            <a
                                href={redes.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-[var(--color-brand-accent)] transition-colors text-sm font-medium flex items-center gap-1.5"
                                aria-label="Facebook"
                            >
                                <span>Facebook</span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </footer>
    );
};
