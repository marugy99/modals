import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { Dialog, Transition } from "@headlessui/react";

function Example({ data }) {
    let [isOpen, setIsOpen] = useState(true);

    function closeModal(value) {
        setIsOpen(value);
    }

    function openModal(value) {
        setIsOpen(value);
    }

    return (
        <section className="flex justify-between mt-6">
            {data.map((modal, index) => (
                <div key={index}>
                    <p>{modal}</p>
                    <button
                        onClick={() => openModal(index + 1)}
                        className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300"
                    >
                        Open HeadlessUI Modal
                    </button>

                    {/* Headless UI modal */}
                    <Transition
                        appear
                        show={isOpen === index + 1}
                        as={Fragment}
                    >
                        <Dialog
                            onClose={closeModal}
                            className="fixed inset-0 z-10 overflow-y-auto"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="bg-gray-200 w-full max-w-md mx-auto p-6 my-16 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
                                    <Dialog.Title className="text-2xl">
                                        {modal}
                                    </Dialog.Title>
                                    <Dialog.Description>
                                        I'm the {modal} modal
                                    </Dialog.Description>

                                    <button
                                        onClick={closeModal}
                                        className="bg-gray-600 text-white py-2 px-4 mt-6 rounded-md hover:bg-gray-800"
                                    >
                                        Close
                                    </button>
                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition>
                </div>
            ))}
        </section>
    );
}

export default Example;

if (document.getElementById("example")) {
    const element = document.getElementById("example");
    const data = JSON.parse(element.dataset.example);

    ReactDOM.render(
        <Example data={data} />,
        document.getElementById("example")
    );
}
