import { useSelector } from "react-redux";
import { selectTasks } from "../store/tasksSlice.jsx";

export function BlockTasks() {
    const tasks = useSelector(selectTasks);
    return (
        <div className="w-full flex flex-col gap-2 px-6 mt-4">
            {tasks.map((task, index) => (
                <p key={index} className="text-black w-full border-black border rounded-lg bg-red-200 opacity-80 px-4 py-2">{task}</p>
            ))}
        </div>
    );
}