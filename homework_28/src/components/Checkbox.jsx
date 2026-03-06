export function Checkbox({ id, flag, setTasks }) {
    const handlerButton = (event) => {
        setTasks((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, flag: event.target.checked } : item
            )
        )
    }
    return (
        <label className="relative flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={flag}
                onChange={handlerButton}
                className='peer sr-only'
            />
            <div className="w-7 h-7 rounded border border-gray-400 bg-white peer-checked:bg-green-600 peer-checked:border-green-600 flex items-center justify-center">
                {flag && (
                    <svg
                        className="w-10 h-10 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2a1 1 0 111.414-1.42l2.493 2.494 6.493-6.494a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
        </label>
    )
}