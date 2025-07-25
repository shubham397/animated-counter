import AnimatedCounter from "./components/AnimatedCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AnimatedCounter value={5000} />
    </div>
  );
}
