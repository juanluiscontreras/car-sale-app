'use client';
import React from 'react';

const CarDetails: React.FC = () => {
  return (
    <div className="container section">
      <h1 className="text-center">Suzuki Swift 1.5 VVT 2007 - Car Details</h1>

      <section className="section">
        <h2 className="text-center">Specifications</h2>

        <h3 className="mt-8">Performance and Consumption</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Top Speed</th>
              <td>185 km/h</td>
            </tr>
            <tr>
              <th>Acceleration 0-100 km/h</th>
              <td>10 s</td>
            </tr>
            <tr>
              <th>Fuel Consumption (NEDC)</th>
              <td>Extraurban: 5.3 l/100 km | Urban: 8.6 l/100 km | Combined: 6.5 l/100 km</td>
            </tr>
            <tr>
              <th>CO₂ Emissions (NEDC)</th>
              <td>159 g/km</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-8">Dimensions, Weight, and Capacities</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Body Type</th>
              <td>Touring</td>
            </tr>
            <tr>
              <th>Doors</th>
              <td>5</td>
            </tr>
            <tr>
              <th>Length</th>
              <td>3,695 mm</td>
            </tr>
            <tr>
              <th>Width</th>
              <td>1,690 mm</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>1,500 mm</td>
            </tr>
            <tr>
              <th>Fuel Tank Capacity</th>
              <td>45 L</td>
            </tr>
            <tr>
              <th>Trunk Volume</th>
              <td>With rear seats: 213 L | Without rear seats: 562 L</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-8">Engine</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Engine Type</th>
              <td>1.5L VVT, Gasoline</td>
            </tr>
            <tr>
              <th>Max Power</th>
              <td>102 CV / 75 kW</td>
            </tr>
            <tr>
              <th>Max Torque</th>
              <td>133 Nm @ 4,100 rpm</td>
            </tr>
            <tr>
              <th>Number of Cylinders</th>
              <td>4</td>
            </tr>
            <tr>
              <th>Transmission</th>
              <td>5-Speed Manual</td>
            </tr>
            <tr>
              <th>Drive Type</th>
              <td>Front-Wheel Drive</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-8">Chassis and Suspension</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Front Suspension</th>
              <td>MacPherson</td>
            </tr>
            <tr>
              <th>Rear Suspension</th>
              <td>Twist beam</td>
            </tr>
            <tr>
              <th>Front Brakes</th>
              <td>Ventilated Discs</td>
            </tr>
            <tr>
              <th>Rear Brakes</th>
              <td>Drum</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-8">Safety and Features</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Front Airbags</th>
              <td>Standard</td>
            </tr>
            <tr>
              <th>Rear Airbags</th>
              <td>Not Available</td>
            </tr>
            <tr>
              <th>ABS</th>
              <td>Standard</td>
            </tr>
            <tr>
              <th>Stability Control</th>
              <td>Not Available</td>
            </tr>
            <tr>
              <th>ISOFIX</th>
              <td>Standard</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-8">Comfort and Convenience</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Air Conditioning</th>
              <td>Standard</td>
            </tr>
            <tr>
              <th>Central Locking</th>
              <td>Standard</td>
            </tr>
            <tr>
              <th>Power Windows</th>
              <td>Front Only</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2 className="text-center">Maintenance History</h2>
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th>Date</th>
              <th>Maintenance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-01-15</td>
              <td>Oil Change</td>
            </tr>
            <tr>
              <td>2023-05-22</td>
              <td>Brake Pad Replacement</td>
            </tr>
            <tr>
              <td>2024-02-12</td>
              <td>Battery Replacement</td>
            </tr>
            <tr>
              <td>2024-06-10</td>
              <td>Tire Rotation</td>
            </tr>
            {/* Add more maintenance records as needed */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CarDetails;
