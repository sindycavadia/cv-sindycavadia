import React from "react";

interface Idiomas {
    idioma: string;
    porcentaje: number;

}

const Idiomas: React.FC = () => {
    const idiomas: Idiomas[] = [
        {idioma:'Inglés', porcentaje: 20,},
        {idioma: 'español', porcentaje: 100,}
    ];

    return (
        <div>
        <h2>En Idiomas</h2>
        {idiomas.map((skill) => (
            <div key={skill.idioma} className='flex items-center mb-4'>
                <h3 className='w-1/3'>{skill.idioma}</h3>
                <div className="w-1/3">
                <div className="bg-yellow-500 h-2 rounded-full">
                    <div
                        className="h-2 bg-yellow-800 rounded-full"
                        style={{ width: `${skill.porcentaje}%`}}
                        />
                        </div>
                    </div>
                    <span className="w-1/3 text-rigth"> {skill.porcentaje}%</span>
                </div>
            ))}
        </div> 
    );
};

export {Idiomas};
