import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "./store/slices"


export const CounterReduxApp = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className="p-5">
        <h1>Redux CounterApp</h1>
        <h3>{ count }</h3>
        <button className="btn btn-secondary" onClick={() => dispatch(increment())}>Increment</button>
        <button className="btn bt-primary" onClick={()=>{ dispatch(decrement()) }}>Decrement</button>
        <button className="btn btn-warning" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  )
}
