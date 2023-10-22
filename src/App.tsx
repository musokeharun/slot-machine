import "./styles/app.scss"
import slotBg from "./assets/slotreel.webp"
import {rollAll} from "./scripts/slot"

const App = () => (
    <>
        <h1 className="font-bold underline text-center text-5xl text-blue-500">
            Slot Machine
        </h1>

        <div className="slots">
            <div className="reel"></div>
            <div className="reel"></div>
            <div className="reel"></div>
        </div>

        <div className={"px-3 mt-5 flex justify-center"}>
            <button type="button"
                    onClick={() => rollAll()}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Spin
            </button>
            <button type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset
            </button>

        </div>

        <div id="debug" className="debug"></div>

        <img className={"fixed left-0 top-0 h-[100vh] w-auto"} src={slotBg} alt={""}/>

    </>
);

export default App