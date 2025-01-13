import { createSignal } from "solid-js";

export default () => {
const [count, setCount] = createSignal(0)

return (
    <div>
        <div>
            Count: {count()}
        </div>
        <div>
            <button>Increase Count</button>
        </div>
    </div>
)
}