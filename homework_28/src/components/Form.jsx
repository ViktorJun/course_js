import {useForm} from 'react-hook-form';
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {WarningSvg} from "./WarningSvg.jsx";

const formSchema = z.object({
    task: z.string().min(5, {message: 'The length must be at least 5 characters'})
});

export function Form({ setTasks }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (data) => {
        console.log(data);
        setTasks((prev) => [...prev, {
            id: crypto.randomUUID(),
            task: data.task,
            flag: false
        }])
    }
        return (
            <>
                <form className="w-full flex px-6" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("task")}
                        type="text"
                        className='placeholder-gray-600 flex-1 border-y-2 border-l-2 border-gray-300 bg-gray-200 rounded-l-lg pl-1.5 h-1/1 focus:outline-none focus:border-y-2 focus:border-l-2 focus:brightness-95 focus:placeholder-gray-400 focus:border-gray-400 text-black'
                        placeholder="Enter a new task"
                    />
                    <button className='bg-blue-600 font-bold px-4 py-3 rounded-r-lg opacity-80 hover:bg-blue-800'>Add Task</button>
                </form>
                {errors.task && <span className="text-red-600 pl-3 py-3 mx-6 mt-4 flex items-center gap-1.5 bg-red-100 rounded-2xl">
                    <WarningSvg/>
                    {errors.task.message}
                </span>}
            </>
)
}