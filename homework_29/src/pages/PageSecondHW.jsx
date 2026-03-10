import {Header} from "../components/Header.jsx";
import {FormInput} from "../components/FormInput.jsx";
import {BlockTasks} from "../components/BlockTasks.jsx";
import {Footer} from "../components/Footer.jsx";

export function PageSecondHW() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header id={'2'}/>
            <main className="bg-red-100 w-150 min-h-200 opacity-80 flex flex-col rounded-xl drop-shadow-2xl mx-auto mt-8 pb-3">
                <FormInput />
                <BlockTasks />
                <Footer />
            </main>
        </div>
    )
}