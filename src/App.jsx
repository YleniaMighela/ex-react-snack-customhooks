// import useSwitch from "./useSwitch";
// import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";




function App() {
  // const [isOn, toggle] = useSwitch();
  // const currentDate = useDate();
  const customPointer = useCustomPointer("😁");


  return (
    //  snack 01
    // <div>
    //   <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
    //   <button onClick={toggle}>Cambia Stato</button>
    // </div>

    // snack02
    // <div>
    //   <h1>Data e ora attuali:</h1>
    //   <p>{currentDate.toLocaleString()}</p>
    // </div>

    // snack 03
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;

