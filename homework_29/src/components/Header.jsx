import {Link} from "react-router-dom";

export function Header({id}) {
    return (
        <div className="flex justify-between items-center px-30 py-4 bg-gray-900">
            <h1 className='text-gray-900 bg-red-100 px-4 py-1 rounded-lg opacity-80'>Homework_29.{id}</h1>
            <Link
                to={`/homework29/${id === '1' ? '2' : '1'}`}
                className='bg-gray-700 px-4 py-2 rounded-lg'
            >Go to HM29.{id === '1' ? '2' : '1'}</Link>
        </div>
    );
}