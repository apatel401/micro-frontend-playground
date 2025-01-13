import { createSignal } from "solid-js";

export default () => {
const [count, setCount] = createSignal(0)

return (
    <div>
        <div>
            Count: {count()}
        </div>
        <div>
            <button className="text-white bg-black px-2 py-4" onClick={() => setCount(count() + 1)}>Increase Count</button>
        </div>
    </div>
)
}