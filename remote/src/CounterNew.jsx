import { render } from "solid-js/web";
import Counter from "./Counter";

export default (el) => {

    const renderingUI = () => {
        return (
            <div className="bg-blue-500">
                <Counter />
            </div>
        )
    }
    render(renderingUI, el )
}