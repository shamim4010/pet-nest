import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import React from 'react'
import { FaCat, FaStore } from "react-icons/fa";

function AdoptModal({pet, onSubmit, userInfo}) {
    return (
        <Modal>
            <Button className="mt-8 h-16 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#c084fc] text-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-xl shadow-violet-900/40"><FaStore /> Adopt Me</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaCat className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className="flex justify-between items-center">
                                <span className="text-4xl">Adopt {pet.petName}</span>
                                <span className="text-4xl bg-gradient-to-r from-[#7c3aed] to-[#c084fc] text-transparent bg-clip-text">${pet.adoptionFee}</span>
                            </Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                {pet.description}
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input value={userInfo?.name} className="text-indigo-700" disabled />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email" variant="secondary">
                                        <Label>Email</Label>
                                        <Input value={userInfo?.email} className="text-indigo-700" disabled />
                                    </TextField>
                                    <TextField className="w-full" name="address" type="text" variant="secondary">
                                        <Label>Address</Label>
                                        <Input placeholder="Enter your phone number" className="text-indigo-700" required />
                                    </TextField>
                                    <TextField className="w-full" name="message" type="textbox" variant="secondary">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" className="text-indigo-700" required />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button type="submit" className="mt-8 h-16 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#c084fc] text-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-xl shadow-violet-900/40">
                                            Adopt <FaStore />
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

export default AdoptModal