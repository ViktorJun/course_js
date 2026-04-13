import {useSelector} from "react-redux";
import {stateValue} from "../store/valueSlice.jsx";

export function Body() {
    const value = useSelector(stateValue);
    const items = value.trim().split('/').filter(Boolean);
    const data = useSelector((state) => state.swapi.data);
    const loading = useSelector((state) => state.swapi.loading);
    const error = useSelector((state) => state.swapi.error);
    return (
        <div className="border border-black bg-gray-700 min-h-[80vh] mx-6">
            <div className="flex gap-1.5 mt-3 px-3">
                {!loading && !error && items.length > 0 && items.map((item) => (
                    <span className='px-3 py-2 rounded-lg bg-gray-800' key={item}>{item}</span>
                )) }
            </div>
            {loading && <p className='text-red-700 text-5xl flex justify-center'>LOADING...</p>}
            {!loading && !error && data && <pre className="flex p-3">{JSON.stringify(data, null, 2)}</pre>}
            {error && <p className='text-red-700 text-5xl flex justify-center'>{error}</p>}
        </div>
    )
}