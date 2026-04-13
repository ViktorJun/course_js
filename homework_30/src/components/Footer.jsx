import {useDispatch} from "react-redux";
import { clearValue } from '../store/valueSlice.jsx'
import {clearData} from "../redux/swapi.actions.jsx";

export function Footer() {
    const dispatch = useDispatch();
    return (
        <div className='flex justify-center mt-3'>
            <button
                className='bg-red-400 px-5 py-2 rounded-lg text-2xl'
                onClick={()=>{
                    dispatch(clearData())
                    dispatch(clearValue())
            }}>
                Clear
            </button>
        </div>
    )
}