'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CarDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">{t('carDetails.title')}</h1>
      <h2>{t('carDetails.subtitle')}</h2>

      <details>
        <summary>Specs</summary>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Prestaciones y consumos homologados&quot;}">Prestaciones y consumos homologados</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Velocidad máxima&quot;}">Velocidad máxima</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;185 km\/h&quot;}">185 km/h</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Aceleración 0-100 km\/h&quot;}">Aceleración 0-100 km/h</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;10 s&quot;}">10 s</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Consumo NEDC&quot;}">Consumo NEDC</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Extraurbano&quot;}">Extraurbano</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;5,3 l\/100 km&quot;}">5,3 l/100 km</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Urbano&quot;}">Urbano</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;8,6 l\/100 km&quot;}">8,6 l/100 km</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Medio&quot;}">Medio</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;6,5 l\/100 km&quot;}">6,5 l/100 km</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Emisiones de CO₂ NEDC&quot;}">Emisiones de CO₂ NEDC</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;159 gr\/km&quot;}">159 gr/km</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Distintivo ambiental DGT&quot;}">Distintivo ambiental DGT</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Dimensiones, peso, capacidades&quot;}">Dimensiones, peso, capacidades</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tipo de Carrocería&quot;}">Tipo de Carrocería</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Turismo&quot;}">Turismo</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Número de puertas&quot;}">Número de puertas</td>
          <td align="right"  >5</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Longitud&quot;}">Longitud</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;3.695 mm&quot;}">3.695 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Anchura&quot;}">Anchura</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;1.690 mm&quot;}">1.690 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Altura&quot;}">Altura</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;1.500 mm&quot;}">1.500 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Batalla&quot;}">Batalla</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;2.380 mm&quot;}">2.380 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Vía delantera&quot;}">Vía delantera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;1.470 mm&quot;}">1.470 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Vía trasera&quot;}">Vía trasera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;1.480 mm&quot;}">1.480 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Peso&quot;}">Peso</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;1.000 kg&quot;}">1.000 kg</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Depósito de combustible&quot;}">Depósito de combustible</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Gasolina&quot;}">Gasolina</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;45 l&quot;}">45 l</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Filtro de partículas&quot;}">Filtro de partículas</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;No&quot;}">No</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Volúmenes de maletero&quot;}">Volúmenes de maletero</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Volumen con una fila de asientos disponible&quot;}">Volumen con una fila de asientos disponible</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;562 litros&quot;}">562 litros</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Volumen mínimo con dos filas de asientos disponibles&quot;}">Volumen mínimo con dos filas de asientos disponibles</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;213 litros&quot;}">213 litros</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Número de plazas&quot;}">Número de plazas</td>
          <td align="right"  >5</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Distribución de asientos&quot;}">Distribución de asientos</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;2 + 3&quot;}">2 + 3</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Resumen del sistema de propulsión&quot;}">Resumen del sistema de propulsión</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Motor de Combustión&quot;}">Motor de Combustión</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Propósito&quot;}">Propósito</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Impulsar el vehículo&quot;}">Impulsar el vehículo</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Combustible&quot;}">Tipo</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Gasolina&quot;}">Aspirado</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Combustible&quot;}">Timming</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Gasolina&quot;}">DOHC</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Combustible&quot;}">Combustible</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Gasolina&quot;}">Gasolina</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Potencia máxima&quot;}">Potencia máxima</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;102 CV \/ 75 kW&quot;}">102 CV / 75 kW</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Revoluciones potencia máxima&quot;}">Revoluciones potencia máxima</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;5.900 rpm&quot;}">5.900 rpm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Par máximo&quot;}">Par máximo</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;133 Nm&quot;}">133 Nm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Revoluciones par máximo&quot;}">Revoluciones par máximo</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;4.100 rpm&quot;}">4.100 rpm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Situación&quot;}">Situación</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Delantero transversal&quot;}">Delantero transversal</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Número de cilindros&quot;}">Número de cilindros</td>
          <td align="right"  >4</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Disposición de los cilindros&quot;}">Disposición de los cilindros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;En línea&quot;}">En línea</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Material del bloque&quot;}">Material del bloque</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Aluminio&quot;}">Aluminio</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Material de la culata&quot;}">Material de la culata</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Aluminio&quot;}">Aluminio</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Diámetro&quot;}">Diámetro</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;78 mm&quot;}">78 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Carrera&quot;}">Carrera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;78 mm&quot;}">78 mm</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Cilindrada&quot;}">Cilindrada</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;1.491 cm³&quot;}">1.491 cm³</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Relación de compresión&quot;}">Relación de compresión</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;9,5 a 1&quot;}">9,5 a 1</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Distribución&quot;}">Distribución</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Válvulas por cilindro&quot;}">Válvulas por cilindro</td>
          <td align="right"  >4</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tipo de distribución&quot;}">Tipo de distribución</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Dos árboles de levas en la culata&quot;}">Dos árboles de levas en la culata</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Alimentación&quot;}">Alimentación</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Inyección Indirecta.&quot;}">Inyección Indirecta.</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Automatismo de parada y arranque del motor (\&quot;Stop\/Start\&quot;)&quot;}">Automatismo de parada y arranque del motor (Stop/Start)</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;No&quot;}">No</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Transmisión&quot;}">Transmisión</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tracción&quot;}">Tracción</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Delantera&quot;}">Delantera</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Caja de cambios&quot;}">Caja de cambios</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Manual&quot;}">Manual</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Número de velocidades&quot;}">Número de velocidades</td>
          <td align="right"  >5</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Desarrollos (km\/h cada 1.000 rpm)&quot;}">Desarrollos (km/h cada 1.000 rpm)</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;1ª&quot;}">1ª</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;7,6&quot;}">7,6</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;2ª&quot;}">2ª</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;14,1&quot;}">14,1</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;3ª&quot;}">3ª</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;20,5&quot;}">20,5</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;4ª&quot;}">4ª</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;27,7&quot;}">27,7</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;5ª&quot;}">5ª</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;35,0&quot;}">35,0</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Marcha atrás&quot;}">Marcha atrás</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;8,3&quot;}">8,3</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Chasis&quot;}">Chasis</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Estructura suspensión delantera&quot;}">Estructura suspensión delantera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tipo McPherson&quot;}">Tipo McPherson</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Muelle suspensión delantera&quot;}">Muelle suspensión delantera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Resorte helicoidal&quot;}">Resorte helicoidal</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Estructura suspensión trasera&quot;}">Estructura suspensión trasera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Rueda tirada con elemento torsional&quot;}">Rueda tirada con elemento torsional</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Muelle suspensión trasera&quot;}">Muelle suspensión trasera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Resorte helicoidal&quot;}">Resorte helicoidal</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Barra estabilizadora delantera&quot;}">Barra estabilizadora delantera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Sí&quot;}">Sí</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Barra estabilizadora trasera&quot;}">Barra estabilizadora trasera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;No&quot;}">No</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tipo de frenos delanteros&quot;}">Tipo de frenos delanteros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Disco ventilado&quot;}">Disco ventilado</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tipo de frenos traseros&quot;}">Tipo de frenos traseros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tambor&quot;}">Tambor</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Dirección&quot;}">Dirección</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tipo&quot;}">Tipo</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Cremallera&quot;}">Cremallera</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Diámetro de giro entre bordillos&quot;}">Diámetro de giro entre bordillos</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;9,4 m&quot;}">9,4 m</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Neumáticos delanteros&quot;}">Neumáticos delanteros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;185\/60 R15&quot;}">185/60 R15</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Neumáticos traseros&quot;}">Neumáticos traseros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;185\/60 R15&quot;}">185/60 R15</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Llantas delanteras&quot;}">Llantas delanteras</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;x 15&quot;}">x 15</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Llantas Traseras&quot;}">Llantas Traseras</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;x 15&quot;}">x 15</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Seguridad y conducción&quot;}">Seguridad y conducción</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Airbag frontal conductor&quot;}">Airbag frontal conductor</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Airbag frontal pasajero&quot;}">Airbag frontal pasajero</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Antibloqueo de frenos (ABS)&quot;}">Antibloqueo de frenos (ABS)</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Cierre de seguridad para niños en las puertas traseras&quot;}">Cierre de seguridad para niños en las puertas traseras</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Cinturones delanteros de tres puntos con pretensores y limitador de fuerza&quot;}">Cinturones delanteros de tres puntos con pretensores y limitador de fuerza</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Cuentavueltas&quot;}">Cuentavueltas</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Direccion asistida&quot;}">Direccion asistida</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Distribución electrónica de frenado (EBD)&quot;}">Distribución electrónica de frenado (EBD)</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Espejo retrovisor día\/noche&quot;}">Espejo retrovisor día/noche</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Espejos exteriores calefactados&quot;}">Espejos exteriores calefactados</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Faros antiniebla&quot;}">Faros antiniebla</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De eerie&quot;}">De eerie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Fijaciones Isofix en asientos traseros&quot;}">Fijaciones Isofix en asientos traseros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Luneta térmica trasera&quot;}">Luneta térmica trasera</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Reloj digital&quot;}">Reloj digital</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Tercera luz de freno&quot;}">Tercera luz de freno</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Testigo de temperatura externa&quot;}">Testigo de temperatura externa</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Volante con ajuste vertical&quot;}">Volante con ajuste vertical</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Elementos de confort&quot;}">Elementos de confort</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Aire acondicionado&quot;}">Aire acondicionado</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Apertura remota del depósito de combustible&quot;}">Apertura remota del depósito de combustible</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Asiento del conductor con ajuste de altura&quot;}">Asiento del conductor con ajuste de altura</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Cierre centralizado&quot;}">Cierre centralizado</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Cristales tintados en verde&quot;}">Cristales tintados en verde</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Elevalunas electricos delanteros y traseros&quot;}">Elevalunas electricos delanteros y traseros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Enchufe de 12V (en consola central)&quot;}">Enchufe de 12V (en consola central)</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Espejos exteriores orientables eléctricamente&quot;}">Espejos exteriores orientables eléctricamente</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Filtro antipolen&quot;}">Filtro antipolen</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Decoración exterior e interior&quot;}">Decoración exterior e interior</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Manillas exteriores color carrocería&quot;}">Manillas exteriores color carrocería</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Equipaje y transporte&quot;}">Equipaje y transporte</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Asientos traseros abatibles 60\/40&quot;}">Asientos traseros abatibles 60/40</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Bolsas en parte posterior de asientos delanteros&quot;}">Bolsas en parte posterior de asientos delanteros</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Caja en consola central&quot;}">Caja en consola central</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Guantera bajo asiento pasajero&quot;}">Guantera bajo asiento pasajero</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Hueco portavasos (2 delanteros \/ 1 trasero)&quot;}">Hueco portavasos (2 delanteros / 1 trasero)</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Luz en maletero (2 posiciones)&quot;}">Luz en maletero (2 posiciones)</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Equipos de sonido y multimedia&quot;}">Equipos de sonido y multimedia</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Antena de radio&quot;}">Antena de radio</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Radio CD&quot;}">Radio CD</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Seis altavoces&quot;}">Seis altavoces</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Bluetooth&quot;}">Bluetooth</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Llantas y neumáticos&quot;}">Llantas y neumáticos</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Llantas de aleación&quot;}">Llantas de aleación</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Varios&quot;}">Varios</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;&quot;}"></td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Inmovilizador&quot;}">Inmovilizador</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>
        <tr>
          <td height="23" align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;Mechero y cenicero móvil&quot;}">Mechero y cenicero móvil</td>
          <td align="left" data-sheets-value="{ &quot;1&quot;: 2, &quot;2&quot;: &quot;De serie&quot;}">De serie</td>
        </tr>

      </details>
    </div>
  );
};

export default CarDetails;
