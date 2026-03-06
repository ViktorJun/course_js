import {Title} from "./components/Title.jsx";
import {Form} from "./components/Form.jsx";
import { useState } from "react";
import {RenderTask} from "./components/RenderTask.jsx";


export function Home() {
    const [tasks, setTasks] = useState([]);
    return (
        <div className="flex flex-col bg-gray-100 w-150 h-200 rounded-xl drop-shadow-2xl">
            <Title text="Todo List"/>
            <Form setTasks={setTasks}/>
            <hr className="border border-gray-300 mb-1 mt-4 mx-6"/>
            <RenderTask tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}