'use client';

import React from 'react';

const CarDetails = () => {


  const generateTableFromText = (text: string) => {
    const lines = text.trim().split('\n');
    return (
      <table className="spec-table">
    <tr>
        <th colspan="2">Prestaciones y consumos homologados</th>
    </tr>
    <tr>
        <td>Velocidad máxima</td>
        <td>185 km/h</td>
    </tr>
    <tr>
        <td>Aceleración 0-100 km/h</td>
        <td>10 s</td>
    </tr>
    <tr>
        <td>Consumo NEDC</td>
        <td></td>
    </tr>
    <tr>
        <td>Extraurbano</td>
        <td>5,3 l/100 km</td>
    </tr>
    <tr>
        <td>Urbano</td>
        <td>8,6 l/100 km</td>
    </tr>
    <tr>
        <td>Medio</td>
        <td>6,5 l/100 km</td>
    </tr>
    <tr>
        <td>Emisiones de CO₂ NEDC</td>
        <td>159 gr/km</td>
    </tr>
    <tr>
        <td>Distintivo ambiental DGT</td>
        <td></td>
    </tr>
    <tr>
        <th colspan="2">Dimensiones, peso, capacidades</th>
    </tr>
    <tr>
        <td>Tipo de Carrocería</td>
        <td>Turismo</td>
    </tr>
    <tr>
        <td>Número de puertas</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Longitud</td>
        <td>3.695 mm</td>
    </tr>
    <tr>
        <td>Anchura</td>
        <td>1.690 mm</td>
    </tr>
    <tr>
        <td>Altura</td>
        <td>1.500 mm</td>
    </tr>
    <tr>
        <td>Batalla</td>
        <td>2.380 mm</td>
    </tr>
    <tr>
        <td>Vía delantera</td>
        <td>1.470 mm</td>
    </tr>
    <tr>
        <td>Vía trasera</td>
        <td>1.480 mm</td>
    </tr>
    <tr>
        <td>Peso</td>
        <td>1.000 kg</td>
    </tr>
    <tr>
        <td>Depósito de combustible</td>
        <td></td>
    </tr>
    <tr>
        <td>Gasolina</td>
        <td>45 l</td>
    </tr>
    <tr>
        <td>Filtro de partículas</td>
        <td>No</td>
    </tr>
    <tr>
        <th colspan="2">Volúmenes de maletero</th>
    </tr>
    <tr>
        <td>Volumen con una fila de asientos disponible</td>
        <td>562 litros</td>
    </tr>
    <tr>
        <td>Volumen mínimo con dos filas de asientos disponibles</td>
        <td>213 litros</td>
    </tr>
    <tr>
        <td>Número de plazas</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Distribución de asientos</td>
        <td>2 + 3</td>
    </tr>
    <tr>
        <th colspan="2">Resumen del sistema de propulsión</th>
    </tr>
    <tr>
        <td>Potencia máxima</td>
        <td>102 CV / 75 kW</td>
    </tr>
    <tr>
        <td>Par máximo</td>
        <td>133 Nm</td>
    </tr>
    <tr>
        <th colspan="2">Motor de Combustión</th>
    </tr>
    <tr>
        <td>Propósito</td>
        <td>Impulsar el vehículo</td>
    </tr>
    <tr>
        <td>Combustible</td>
        <td>Gasolina</td>
    </tr>
    <tr>
        <td>Potencia máxima</td>
        <td>102 CV / 75 kW</td>
    </tr>
    <tr>
        <td>Revoluciones potencia máxima</td>
        <td>5.900 rpm</td>
    </tr>
    <tr>
        <td>Par máximo</td>
        <td>133 Nm</td>
    </tr>
    <tr>
        <td>Revoluciones par máximo</td>
        <td>4.100 rpm</td>
    </tr>
    <tr>
        <td>Situación</td>
        <td>Delantero transversal</td>
    </tr>
    <tr>
        <td>Número de cilindros</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Disposición de los cilindros</td>
        <td>En línea</td>
    </tr>
    <tr>
        <td>Material del bloque</td>
        <td>Aluminio</td>
    </tr>
    <tr>
        <td>Material de la culata</td>
        <td>Aluminio</td>
    </tr>
    <tr>
        <td>Diámetro</td>
        <td>78 mm</td>
    </tr>
    <tr>
        <td>Carrera</td>
        <td>78 mm</td>
    </tr>
    <tr>
        <td>Cilindrada</td>
        <td>1.491 cm³</td>
    </tr>
    <tr>
        <td>Relación de compresión</td>
        <td>9,5 a 1</td>
    </tr>
    <tr>
        <th colspan="2">Distribución</th>
    </tr>
    <tr>
        <td>Válvulas por cilindro</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Tipo de distribución</td>
        <td>Dos árboles de levas en la culata</td>
    </tr>
    <tr>
        <td>Alimentación</td>
        <td>Inyección Indirecta</td>
    </tr>
    <tr>
        <td>Automatismo de parada y arranque del motor ("Stop/Start")</td>
        <td>No</td>
    </tr>
    <tr>
        <th colspan="2">Transmisión</th>
    </tr>
    <tr>
        <td>Tracción</td>
        <td>Delantera</td>
    </tr>
    <tr>
        <td>Caja de cambios</td>
        <td>Manual</td>
    </tr>
    <tr>
        <td>Número de velocidades</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Desarrollos (km/h cada 1.000 rpm)</td>
        <td></td>
    </tr>
    <tr>
        <td>1ª</td>
        <td>7,6</td>
    </tr>
    <tr>
        <td>2ª</td>
        <td>14,1</td>
    </tr>
    <tr>
        <td>3ª</td>
        <td>20,5</td>
    </tr>
    <tr>
        <td>4ª</td>
        <td>27,7</td>
    </tr>
    <tr>
        <td>5ª</td>
        <td>35,0</td>
    </tr>
    <tr>
        <td>Marcha atrás</td>
        <td>8,3</td>
    </tr>
    <tr>
        <th colspan="2">Chasis</th>
    </tr>
    <tr>
        <td>Estructura suspensión delantera</td>
        <td>Tipo McPherson</td>
    </tr>
    <tr>
        <td>Muelle suspensión delantera</td>
        <td>Resorte helicoidal</td>
    </tr>
    <tr>
        <td>Estructura suspensión trasera</td>
        <td>Rueda tirada con elemento torsional</td>
    </tr>
    <tr>
        <td>Muelle suspensión trasera</td>
        <td>Resorte helicoidal</td>
    </tr>
    <tr>
        <td>Barra estabilizadora delantera</td>
        <td>Sí</td>
    </tr>
    <tr>
        <td>Barra estabilizadora trasera</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Tipo de frenos delanteros</td>
        <td>Disco ventilado</td>
    </tr>
    <tr>
        <td>Tipo de frenos traseros</td>
        <td>Tambor</td>
    </tr>
    <tr>
        <th colspan="2">Dirección</th>
    </tr>
    <tr>
        <td>Tipo</td>
        <td>Cremallera</td>
    </tr>
    <tr>
        <td>Diámetro de giro entre bordillos</td>
        <td>9,4 m</td>
    </tr>
    <tr>
        <td>Neumáticos delanteros</td>
        <td>185/60 R15</td>
    </tr>
    <tr>
        <td>Neumáticos traseros</td>
        <td>185/60 R15</td>
    </tr>
    <tr>
        <td>Llantas delanteras</td>
        <td>x 15</td>
    </tr>
    <tr>
        <td>Llantas traseras</td>
        <td>x 15</td>
    </tr>
    <tr>
        <th colspan="2">Seguridad y conducción</th>
    </tr>
    <tr>
        <td>Airbag frontal conductor</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Airbag frontal pasajero</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Antibloqueo de frenos (ABS)</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Cierre de seguridad para niños en las puertas traseras</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Cinturones delanteros de tres puntos con pretensores y limitador de fuerza</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Cuentavueltas</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Direccion asistida</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Distribución electrónica de frenado (EBD)</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Espejo retrovisor día/noche</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Espejos exteriores calefactados</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Faros antiniebla</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Fijaciones Isofix en asientos traseros</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Luneta térmica trasera</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Reloj digital</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Tercera luz de freno</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Testigo de temperatura externa</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Volante con ajuste vertical</td>
        <td>De serie</td>
    </tr>
    <tr>
        <th colspan="2">Elementos de confort</th>
    </tr>
    <tr>
        <td>Aire acondicionado</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Apertura remota del depósito de combustible</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Asiento del conductor con ajuste de altura</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Cierre centralizado</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Cristales tintados en verde</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Elevalunas electricos delanteros</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Enchufe de 12V (en consola central)</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Espejos exteriores orientables eléctricamente</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Filtro antipolen</td>
        <td>De serie</td>
    </tr>
    <tr>
        <th colspan="2">Decoración exterior e interior</th>
    </tr>
    <tr>
        <td>Manillas exteriores color carrocería</td>
        <td>De serie</td>
    </tr>
    <tr>
        <th colspan="2">Equipaje y transporte</th>
    </tr>
    <tr>
        <td>Asientos traseros abatibles 60/40</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Bolsas en parte posterior de asientos delanteros</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Caja en consola central</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Guantera bajo asiento pasajero</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Hueco portavasos (2 delanteros / 1 trasero)</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Luz en maletero (2 posiciones)</td>
        <td>De serie</td>
    </tr>
    <tr>
        <th colspan="2">Equipos de sonido y multimedia</th>
    </tr>
    <tr>
        <td>Antena de radio</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Radio CD</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Seis altavoces</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Bluetooth</td>
        <td></td>
    </tr>
    <tr>
        <th colspan="2">Llantas y neumáticos</th>
    </tr>
    <tr>
        <td>Llantas de aleación</td>
        <td>De serie</td>
    </tr>
    <tr>
        <th colspan="2">Varios</th>
    </tr>
    <tr>
        <td>Inmovilizador</td>
        <td>De serie</td>
    </tr>
    <tr>
        <td>Mechero y cenicero móvil</td>
        <td>De serie</td>
    </tr>

      </table>
    );
  };

  return (
    <div className="car-details">
      <h2>Car Details</h2>
      {generateTableFromText(specsText)}
    </div>
  );
};

export default CarDetails;
