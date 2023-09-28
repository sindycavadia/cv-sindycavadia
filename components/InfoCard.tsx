import React from 'react';

const InfoCard: React.FC = () => {
  return (
    <div className="p-4 flex flex-col justify-between">
      <div className=" flex  justify-between">
        <p className="font-bold">Edad:</p>
        <p>28</p>
      </div>
      <div className=" flex  justify-between">
        <p className="font-bold">Residencia:</p>
        <p>Uraba</p>
      </div>
      <div className=" flex  justify-between">
        <p className="font-bold">Ocupación:</p>
        <p>Estudiante</p>
      </div>
      <div className=" flex  justify-between">
        <p className="font-bold">Dirección:</p>
        <p>Uraba</p>
      </div>
    </div>
  );
};

export {InfoCard};
