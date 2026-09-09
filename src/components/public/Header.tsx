import { artistaConfig } from '../../config/theme';

export const Header = () => {
    return (
        <header className="bg-[var(--color-brand-card)] border-b border-gray-200 shadow-xs">
            <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center text-center">
                {/* Nombre del Artista */}
                <h1
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center w-full"
                    style={{ color: 'var(--color-brand-primary)' }}
                >
                    {artistaConfig.nombre}
                </h1>

                {/* Disciplina / Subtítulo */}
                <p
                    className="text-lg font-medium mt-2 text-center w-full"
                    style={{ color: 'var(--color-brand-accent)' }}
                >
                    {artistaConfig.disciplina}
                </p>

                {/* Biografía Breve */}
                <p className="max-w-2xl text-gray-600 text-sm mt-4 leading-relaxed text-center w-full">
                    {artistaConfig.bio}
                </p>
            </div>
        </header>
    );
};
