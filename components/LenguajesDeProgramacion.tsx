import React from "react";

interface Lenguaje {
    nombre: string;
    porcentaje: number;
}

const LenguajesDeProgramacion: React.FC = () => {
    const lenguajes: Lenguaje[] = [
        { nombre: 'PHP', porcentaje: 70 },
        { nombre: 'Java', porcentaje: 80 },
        { nombre: 'HTML', porcentaje: 90 },
        { nombre: 'React', porcentaje: 95 },
    ];

    return (
        <div>
            <h2>Lenguajes de Programación</h2>
            {lenguajes.map((lenguaje) => (
                <div key={lenguaje.nombre} className='flex items-center mb-4'>
                    <h3 className='w-1/3'>{lenguaje.nombre}</h3>
                    <div className="w-1/3">
                        <div className="bg-yellow-500 h-2 rounded-full">
                            <div
                                className="h-2 bg-yellow-800 rounded-full"
                                style={{ width: `${lenguaje.porcentaje}%` }}
                            />
                        </div>
                    </div>
                    <span className="w-1/3 text-right"> {lenguaje.porcentaje}%</span>
                </div>
            ))}
        </div>
    );
};

export { LenguajesDeProgramacion };
