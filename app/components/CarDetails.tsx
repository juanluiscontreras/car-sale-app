'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CarDetails: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        {t('carDetails.title')}
      </h1>
      <h2 className="text-xl font-semibold mb-4">{t('carDetails.subtitle')}</h2>

      <div className="relative">
        <button
          onClick={toggleAccordion}
          className="w-full py-3 px-4 bg-gray-200 text-gray-800 rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <span>{t('carDetails.detailsButton')}</span>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}
        >
          <p className="p-4">
            
Prestaciones y consumos homologados	


Velocidad máxima	185 km/h
Aceleración 0-100 km/h	10 s
Consumo NEDC	
Extraurbano	5,3 l/100 km
Urbano	8,6 l/100 km
Medio	6,5 l/100 km
Emisiones de CO₂ NEDC	159 gr/km
Distintivo ambiental DGT	


Dimensiones, peso, capacidades	


Tipo de Carrocería	Turismo
Número de puertas	5
Longitud	3.695 mm
Anchura	1.690 mm
Altura	1.500 mm
Batalla	2.380 mm
Vía delantera	1.470 mm
Vía trasera	1.480 mm
Peso	1.000 kg


Depósito de combustible	


Gasolina	45 l
Filtro de partículas	No


Volúmenes de maletero	


Volumen con una fila de asientos disponible	562 litros
Volumen mínimo con dos filas de asientos disponibles	213 litros
Número de plazas	5
Distribución de asientos	2 + 3
Resumen del sistema de propulsión	


Motor de Combustión	


Propósito	Impulsar el vehículo
Combustible	Gasolina
Potencia máxima	102 CV / 75 kW
Revoluciones potencia máxima	5.900 rpm
Par máximo	133 Nm
Revoluciones par máximo	4.100 rpm
Situación	Delantero transversal
Número de cilindros	4
Disposición de los cilindros	En línea
Material del bloque	Aluminio
Material de la culata	Aluminio
Diámetro	78 mm
Carrera	78 mm
Cilindrada	1.491 cm³
Relación de compresión	9,5 a 1




Distribución	


Válvulas por cilindro	4
Tipo de distribución	Dos árboles de levas en la culata
Alimentación	Inyección Indirecta.
Automatismo de parada y arranque del motor ("Stop/Start")	No


Transmisión	


Tracción	Delantera
Caja de cambios	Manual
Número de velocidades	5
Desarrollos (km/h cada 1.000 rpm)	
1ª	7,6
2ª	14,1
3ª	20,5
4ª	27,7
5ª	35,0
Marcha atrás	8,3


Chasis	


Estructura suspensión delantera	Tipo McPherson
Muelle suspensión delantera	Resorte helicoidal
Estructura suspensión trasera	Rueda tirada con elemento torsional
Muelle suspensión trasera	Resorte helicoidal
Barra estabilizadora delantera	Sí
Barra estabilizadora trasera	No
Tipo de frenos delanteros	Disco ventilado
Tipo de frenos traseros	Tambor


Dirección	


Tipo	Cremallera
Diámetro de giro entre bordillos	9,4 m
Neumáticos delanteros	185/60 R15
Neumáticos traseros	185/60 R15
Llantas delanteras	x 15
Llantas Traseras	x 15


Seguridad y conducción	


Airbag frontal conductor	De serie
Airbag frontal pasajero	De serie
Antibloqueo de frenos (ABS)	De serie
Cierre de seguridad para niños en las puertas traseras	De serie
Cinturones delanteros de tres puntos con pretensores y limitador de fuerza	De serie
Cuentavueltas	De serie
Direccion asistida	De serie
Distribución electrónica de frenado (EBD)	De serie
Espejo retrovisor día/noche	De serie
Espejos exteriores calefactados	De serie
Faros antiniebla	De eerie
Fijaciones Isofix en asientos traseros	De serie
Luneta térmica trasera	De serie
Reloj digital	De serie
Tercera luz de freno	De serie
Testigo de temperatura externa	De serie
Volante con ajuste vertical	De serie


Elementos de confort	


Aire acondicionado	De serie
Apertura remota del depósito de combustible	De serie
Asiento del conductor con ajuste de altura	De serie
Cierre centralizado	De serie
Cristales tintados en verde	De serie
Elevalunas electricos delanteros	De serie
Enchufe de 12V (en consola central)	De serie
Espejos exteriores orientables eléctricamente	De serie
Filtro antipolen	De serie


Decoración exterior e interior	


Manillas exteriores color carrocería	De serie


Equipaje y transporte	


Asientos traseros abatibles 60/40	De serie
Bolsas en parte posterior de asientos delanteros	De serie
Caja en consola central	De serie
Guantera bajo asiento pasajero	De serie
Hueco portavasos (2 delanteros / 1 trasero)	De serie
Luz en maletero (2 posiciones)	De serie


Equipos de sonido y multimedia	


Antena de radio	De serie
Radio CD	De serie
Seis altavoces	De serie
Bluetooth	


Llantas y neumáticos	


Llantas de aleación	De serie


Varios	


Inmovilizador	De serie
Mechero y cenicero móvil	De serie
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
