import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [work, setWork] = useState("");
    const [toDos, setToDos] = useState([]);
    const handleAdd = () => {
        if (toDos.some((item) => item.id === work.replace(/\s/g, ""))) {
            toast.warn("ToDo da ton tai truoc do");
        } else {
            setToDos((prev) => [
                ...prev,
                { id: work.replace(/\s/g, ""), job: work },
            ]);
            setWork("");
            toast.success("Them thanh cong");
        }
    };

    const hanldleDeleteJob = (id) => {
        setToDos(prev => prev.filter(item => item.id !== id))
    };

    return (
        <>
            <div className="flex gap-4 flex-col h-screen border justify-center items-center">
                <div className="flex gap-8">
                    <input
                        type="text"
                        className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                    />
                    <button
                        type="button"
                        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                </div>
                <div>
                    <h3>Content: </h3>
                    <ul className="flex gap-2 flex-col">
                        {toDos?.map((item) => {
                            return (
                                <li key={item.id} className="flex gap-4">
                                    <span className="my-2 ">{item.job}</span>
                                    <span
                                        onClick={() =>
                                            hanldleDeleteJob(item.id)
                                        }
                                        className="my-2 cursor-pointer"
                                    >
                                        X
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    );
}

export default App;
