import {useForm} from 'react-hook-form';
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from 'react-redux';
import { addValue } from "../store/valueSlice.jsx";
import {START_WIDTH_LINK} from "../variables.jsx";
import {fetchSwapi} from "../redux/swapi.thunks.jsx";

const formSchema = z.object({
    link: z.string().min(1, {message: 'The length must be at least 1 characters'})
});

export function InputLink() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (data) => {
        dispatch(addValue(data.link));
        dispatch(fetchSwapi(data.link));
    }
    return (
        <div>
            <form className="flex w-full px-6 my-3" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="link" className='bg-gray-700 p-2 rounded-l-lg text-2xl'>{START_WIDTH_LINK}</label>
                <input {...register("link")} type="text" id='link' className='flex-1 border border-black bg-gray-400 text-2xl'/>
                <button className='p-2 rounded-r-lg bg-gray-700 text-2xl' type='submit'>Get info</button>
            </form>
            {errors.link &&
                <span className="text-red-600 pl-3 py-3 mx-6 mt-4 flex items-center gap-1.5 bg-red-100 rounded-2xl">
                {errors.link.message}
                </span>}
        </div>
    )
}