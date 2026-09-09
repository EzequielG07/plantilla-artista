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
                                <svg
                                    className="h-7 w-7"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
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
                                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.14 1.03 1.12 2.49 1.83 3.94 1.93v3.86c-1.77-.08-3.52-.64-4.91-1.74-.29-.23-.55-.49-.79-.77v5.77c.06 1.77-.42 3.58-1.42 5.03-1.15 1.74-3.12 2.92-5.18 3.06-2.31.2-4.71-.62-6.19-2.39-1.58-1.83-2.14-4.51-1.39-6.84.69-2.22 2.61-3.99 4.9-4.28.91-.12 1.84-.01 2.72.26v3.91c-.88-.28-1.89-.19-2.67.33-.88.56-1.42 1.57-1.44 2.62-.02 1.34.88 2.61 2.15 2.99 1.19.37 2.58-.09 3.25-1.16.42-.64.59-1.42.57-2.19V0h-.02z" />
                                </svg>
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
                                <svg
                                    className="h-7 w-7"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </footer>
    );
};
