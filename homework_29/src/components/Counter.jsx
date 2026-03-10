import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementByAmount, count} from "../store/counterSlice.jsx";

export function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(count);
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <h1 className='w-full text-center'>{counter}</h1>
            <div className='flex gap-5 mt-3'>
                <button
                    type='click'
                    className='bg-gray-700 rounded-lg px-4 py-2'
                    onClick={() => dispatch(increment())}
                >Plus 1</button>
                <button
                    type='click'
                    className='bg-gray-700 rounded-lg px-4 py-2'
                    onClick={() => dispatch(decrement())}
                >Minus 1</button>
                <button
                    type='click'
                    className='bg-gray-700 rounded-lg px-4 py-2'
                    onClick={() => dispatch(incrementByAmount(5))}
                >Plus 5</button>
            </div>
        </div>
    )
}