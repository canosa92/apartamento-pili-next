import Reservas from "./components/Reservas";
import TarifaInfo from "./components/Tarifas";
 
const ReservasPage = () => (
  <div className="min-h-screen py-16 space-y-16"> 
  <TarifaInfo />
  <div className="mt-8"></div> 
  <Reservas />
</div>
);
export default ReservasPage;