import React, { Fragment } from 'react'
import CloseIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Dialog, Transition } from '@headlessui/react';
import Layout from '../Layout';
import Button from '../Button';
import Typography from '../Typography';

const Modal = (props) => {
    return (
        <Dialog onClose={props.onClose} open={props.open} className="bg-black bg-opacity-90  fixed inset-0 justify-end sm:justify-center z-20 items-center" as={Layout.Col}>
            <Transition appear show={props.open}
                as={Fragment}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 translate-y-20 sm:translate-y-0 sm:scale-0"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="opacity-100 sm:scale-100"
                leaveTo="opacity-0 sm:scale-0"
            >
                <Dialog.Panel className="bg-general border rounded-t-xl sm:rounded-xl overflow-hidden border-dark_secondary">
                    <Layout.Row className="items-center bg-dark_secondary/50 justify-between border-b border-dark_secondary py-1 px-2">
                        <Typography.Body className="font-semibold text-white/80">{props.title}</Typography.Body>
                        <Button onClick={props.onClose} className="btn-icon">
                            <CloseIcon className="text-white w-5 h-5" />
                        </Button>
                    </Layout.Row>
                    {props.children}
                </Dialog.Panel>
            </Transition>
        </Dialog>
    )
}

Modal.defaultProps = {
    title: "Title",
}

export default Modal;