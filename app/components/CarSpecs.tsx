'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CarSpecs: React.FC = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
				{t('carSpecs.title')}
			</h1>
			<h2 className="text-xl font-semibold mb-4">{t('carSpecs.subtitle')}</h2>

			<div className="relative">
				<button
					onClick={toggleAccordion}
					className="w-full py-3 px-4 bg-gray-200 text-gray-800 rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-gray-500"
				>
					<span>{t('carSpecs.detailsButton')}</span>
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
					<div className="p-4 overflow-y-auto max-h-[300px]">
						<table>
							<tbody>
								<tr>
									<td height="42" align="center" colSpan={2}><b>Prestaciones y consumos homologados</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Velocidad máxima</td>
									<td align="left" ><b>185 km/h</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Aceleración 0-100 km/h</td>
									<td align="left" ><b>10 s</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Consumo NEDC</td>
									<td align="left" ><b></b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Extraurbano</td>
									<td align="left" ><b>5,3 l/100 km</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Urbano</td>
									<td align="left" ><b>8,6 l/100 km</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Medio</td>
									<td align="left" ><b>6,5 l/100 km</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Emisiones de CO₂ NEDC</td>
									<td align="left" ><b>159 gr/km</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Distintivo ambiental DGT</td>
									<td align="left" ><b></b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Dimensiones, peso, capacidades</b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Tipo de Carrocería</td>
									<td align="left" ><b>Turismo</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Número de puertas</td>
									<td align="left"  ><b>5</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Longitud</td>
									<td align="left" ><b>3.695 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Anchura</td>
									<td align="left" ><b>1.690 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Altura</td>
									<td align="left" ><b>1.500 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Batalla</td>
									<td align="left" ><b>2.380 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Vía delantera</td>
									<td align="left" ><b>1.470 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Vía trasera</td>
									<td align="left" ><b>1.480 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Peso</td>
									<td align="left" ><b>1.000 kg</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Depósito de combustible</b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Gasolina</td>
									<td align="left" ><b>45 l</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Filtro de partículas</td>
									<td align="left" ><b>No</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Volúmenes de maletero</b></td>
								</tr>

								<tr>
									<td height="42" align="center" >Volumen con una fila de asientos disponible</td>
									<td align="left" ><b>562 litros</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Volumen mínimo con dos filas de asientos disponibles</td>
									<td align="left" ><b>213 litros</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Número de plazas</td>
									<td align="left"  ><b>5</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Distribución de asientos</td>
									<td align="left" ><b>2 + 3</b></td>
								</tr>
								<tr>
									<td height="42" align="center" colSpan={2}><b>Motor de Combustión</b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Propósito</td>
									<td align="left" ><b>Impulsar el vehículo</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Combustible</td>
									<td align="left" ><b>Gasolina</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Potencia máxima</td>
									<td align="left" ><b>102 CV / 75 kW</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Revoluciones potencia máxima</td>
									<td align="left" ><b>5.900 rpm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Par máximo</td>
									<td align="left" ><b>133 Nm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Revoluciones par máximo</td>
									<td align="left" ><b>4.100 rpm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Situación</td>
									<td align="left" ><b>Delantero transversal</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Número de cilindros</td>
									<td align="left"  ><b>4</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Disposición de los cilindros</td>
									<td align="left" ><b>En línea</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Material del bloque</td>
									<td align="left" ><b>Aluminio</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Material de la culata</td>
									<td align="left" ><b>Aluminio</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Diámetro</td>
									<td align="left" ><b>78 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Carrera</td>
									<td align="left" ><b>78 mm</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Cilindrada</td>
									<td align="left" ><b>1.491 cm³</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Relación de compresión</td>
									<td align="left" ><b>9,5 a 1</b></td>
								</tr>


								<tr>
									<td height="23" align="center" >Distribución</td>
									<td align="left" ><b></b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Válvulas por cilindro</td>
									<td align="left"  ><b>4</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Tipo de distribución</td>
									<td align="left" ><b>Dos árboles de levas en la culata</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Alimentación</td>
									<td align="left" ><b>Inyección Indirecta.</b></td>
								</tr>
								<tr>
									<td height="23" align="center" colSpan={2} >Transmisión</td>
								</tr>

								<tr>
									<td height="23" align="center" >Tracción</td>
									<td align="left" ><b>Delantera</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Caja de cambios</td>
									<td align="left" ><b>Manual</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Número de velocidades</td>
									<td align="left"  ><b>5</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Desarrollos (km/h cada 1.000 rpm)</td>
									<td align="left" ><b></b></td>
								</tr>
								<tr>
									<td height="23" align="center" >1ª</td>
									<td align="left" ><b>7,6</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >2ª</td>
									<td align="left" ><b>14,1</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >3ª</td>
									<td align="left" ><b>20,5</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >4ª</td>
									<td align="left" ><b>27,7</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >5ª</td>
									<td align="left" ><b>35,0</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Marcha atrás</td>
									<td align="left" ><b>8,3</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Chasis</b></td>
									<td align="left" ><b></b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Estructura suspensión delantera</td>
									<td align="left" ><b>Tipo McPherson</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Muelle suspensión delantera</td>
									<td align="left" ><b>Resorte helicoidal</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Estructura suspensión trasera</td>
									<td align="left" ><b>Rueda tirada con elemento torsional</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Muelle suspensión trasera</td>
									<td align="left" ><b>Resorte helicoidal</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Barra estabilizadora delantera</td>
									<td align="left" ><b>Sí</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Barra estabilizadora trasera</td>
									<td align="left" ><b>No</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Tipo de frenos delanteros</td>
									<td align="left" ><b>Disco ventilado</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Tipo de frenos traseros</td>
									<td align="left" ><b>Tambor</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Dirección</b></td>
									<td align="left" ><b></b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Tipo</td>
									<td align="left" ><b>Cremallera</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Diámetro de giro entre bordillos</td>
									<td align="left" ><b>9,4 m</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Neumáticos delanteros</td>
									<td align="left" ><b>185/60 R15</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Neumáticos traseros</td>
									<td align="left" ><b>185/60 R15</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Llantas delanteras</td>
									<td align="left" ><b>x 15</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Llantas Traseras</td>
									<td align="left" ><b>x 15</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Seguridad y conducción</b></td>
									<td align="left" ><b></b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Airbag frontal conductor</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Airbag frontal pasajero</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Antibloqueo de frenos (ABS)</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Cierre de seguridad para niños en las puertas traseras</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="62" align="center" >Cinturones delanteros de tres puntos con pretensores y limitador de fuerza</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Cuentavueltas</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Direccion asistida</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Distribución electrónica de frenado (EBD)</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Espejo retrovisor día/noche</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Espejos exteriores calefactados</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Faros antiniebla</td>
									<td align="left" ><b>De eerie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Fijaciones Isofix en asientos traseros</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Luneta térmica trasera</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Reloj digital</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Tercera luz de freno</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Testigo de temperatura externa</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Volante con ajuste vertical</td>
									<td align="left" ><b>De serie</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Elementos de confort</b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Aire acondicionado</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Apertura remota del depósito de combustible</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Asiento del conductor con ajuste de altura</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Cierre centralizado</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Cristales tintados en verde</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Elevalunas electricos delanteros</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Enchufe de 12V (en consola central)</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Espejos exteriores orientables eléctricamente</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Filtro antipolen</td>
									<td align="left" ><b>De serie</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Decoración exterior e interior</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Manillas exteriores color carrocería</td>
									<td align="left" ><b>De serie</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Equipaje y transporte</b></td>
									<td align="left" ><b></b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Asientos traseros abatibles 60/40</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Bolsas en parte posterior de asientos delanteros</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Caja en consola central</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Guantera bajo asiento pasajero</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="42" align="center" >Hueco portavasos (2 delanteros / 1 trasero)</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Luz en maletero (2 posiciones)</td>
									<td align="left" ><b>De serie</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Equipos de sonido y multimedia</b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Antena de radio</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Radio CD</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Seis altavoces</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Bluetooth</td>
									<td align="left" ><b></b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Llantas y neumáticos</b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Llantas de aleación</td>
									<td align="left" ><b>De serie</b></td>
								</tr>

								<tr>
									<td height="42" align="center" colSpan={2}><b>Varios</b></td>
								</tr>

								<tr>
									<td height="23" align="center" >Inmovilizador</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
								<tr>
									<td height="23" align="center" >Mechero y cenicero móvil</td>
									<td align="left" ><b>De serie</b></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarSpecs;
