import {Checkbox} from "./Checkbox.jsx";
import {DeleteTask} from "./DeleteTask.jsx";

export function RenderTask({ tasks, setTasks }) {
    return (
        <>
            {tasks && tasks.map((task) => (
                <div key={task.id} className="flex mt-3 items-center rounded-lg px-3 py-2 border bg-gray-100 border-gray-300 mx-6 justify-between drop-shadow-md">
                    <div className="flex items-center gap-2">
                        <Checkbox id={task.id} flag={task.flag} setTasks={setTasks} />
                        <p className='text-black truncate'>{task.task}</p>
                    </div>
                    <DeleteTask id={task.id} setTasks={setTasks} />
                </div>
            ))}
        </>
    )
}