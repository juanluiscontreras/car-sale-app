import Viewer from './components/Viewer';
import ContactForm from './components/ContactForm';
import CarDetails from './components/CarDetails';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Car Sale Page</h1>
      <Viewer />
      <CarDetails />
      <ContactForm />
    </div>
  );
}
