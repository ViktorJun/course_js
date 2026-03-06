export function DeleteTask({ id, setTasks }) {
    const handlerButton = () => {
        setTasks((prev) =>
            prev.filter((item) => item.id !== id)
        )
    }
    return(
        <button type={"button"} onClick={handlerButton} className='bg-red-500 rounded-md font-bold opacity-90 px-3 py-2 justify-end'>Delete</button>
    )
}