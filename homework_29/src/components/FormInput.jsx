import {addTasks} from "../store/tasksSlice.jsx";
import {useDispatch} from "react-redux";

export function FormInput() {
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const task = formData.get("task");
        dispatch(addTasks(task));
        e.currentTarget.reset();
    }
    return (
        <form className="w-full flex px-6 mt-6" onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                className='placeholder-gray-600 flex-1 border-y-2 border-l-2 border-gray-300 bg-gray-200 rounded-l-lg pl-1.5 h-12 focus:outline-none focus:border-y-2 focus:border-l-2 focus:brightness-95 focus:placeholder-gray-400 focus:border-gray-400 text-black'
                placeholder="Enter a new task"
                required
            />
            <button className='bg-blue-600 font-bold px-4 py-3 rounded-r-lg opacity-80 hover:bg-blue-800'>Add Task</button>
        </form>
    )
}