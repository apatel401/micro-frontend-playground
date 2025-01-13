import { render } from "solid-js/web";
import "./index.scss";
import Counter from "remote/Counter";

export default function App() {

  return (
    <div class="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Framework: solid-js</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <Counter />
    </div>
  );
}
render(App, document.getElementById("app"));
