import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "./components/Card";

export default function App() {
  const activities = [
    {
      title: "Actividad 1",
      subtitle: "",
      status: "En curso",
      href: ""
    },
    {
      title: "Actividad 2",
      subtitle: "",
      status: "En curso",
      href: ""
    },
    {
      title: "Actividad 3",
      subtitle: "",
      status: "En curso",
      href: ""
    }
  ];
  return (
    <div className="App">
      <Carousel>
        {activities.map((activiti) => (
          <Card {...activiti} />
        ))}
      </Carousel>
    </div>
  );
}
