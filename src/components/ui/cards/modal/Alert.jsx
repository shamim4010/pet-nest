"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaPaw, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

export function OrderCancel({orderId}) {

    console.log(orderId)

    const cencelOrder = async() => {
        const res = await fetch(`http://localhost:7000/orders/${orderId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await res.json();

        if(data){
            toast.success('Cencel Successfull')
        }
        window.location.reload()
    }

    return (
        <AlertDialog>
            <Button className="bg-gradient-to-r from-[#7c3aed] to-[#b784ff] text-white rounded-2xl px-6 hover:scale-[1.03] duration-300 flex items-center gap-2">
                <FaPaw />
                Cencel Order
            </Button>
            <AlertDialog.Backdrop className="bg-black/10 backdrop-blur-sm">
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] border-2 border-[#4a1f8f] bg-white/12 backdrop-blur">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <FaTrash />
                            <AlertDialog.Heading className="text-2xl text-white bg-black/6 w-40 text-center rounded">Cencel Order</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-[#c9c1d8] text-sm">
                                This action will remove your adoption request for
                                <span className="text-[#d0bcff] font-semibold">
                                    {" "}{''}
                                </span>.
                                You can place another request later if needed.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="w-full rounded-2xl bg-[#22192f] text-white hover:bg-[#2f2441] border border-[#ffffff10]">
                                Keep Order
                            </Button>
                            <Button onClick={cencelOrder} slot="close" variant="danger" className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:scale-[1.02] duration-300 flex items-center gap-2">
                                <FaTrash /> Cencel Confirm
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
            <ToastContainer />
        </AlertDialog>
    );
}