'use client'
import React, { useState } from 'react'
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { toast, ToastContainer } from 'react-toastify';

function ListPet() {
    const [url, setUrl] = useState("");
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const { data: session, isPending } = authClient.useSession()
    console.log(session)

    const userInfo = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();

        if (url) {
            toast.error("Fix Image URL first");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        const petData = {
            userId: userInfo?.id,
            petName: userData.petName,
            species: userData.species,
            breed: userData.breed,
            age: userData.age,
            gender: userData.gender,
            imageUrl: userData.imageUrl,
            healthStatus: userData.healthStatus,
            vaccinationStatus: userData.vaccinationStatus,
            location: userData.location,
            adoptionFee: userData.adoptionFee,
            description: userData.description,
            owner: userInfo?.email
        }

        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const token = tokenData?.token

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(petData)
        })

        if (res) {
            toast.success('List SeccessFull')
        }
    }
    return (
        <div>
            <Form className="w-full max-w-6xl mx-auto bg-[#161120] border border-[#ffffff10] rounded-[35px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-2xl shadow-black/30" onSubmit={onSubmit}>
                <TextField isRequired name="petName">
                    <Label className="text-[#d0bcff] mb-2">
                        Pet Name
                    </Label>
                    <Input placeholder="Rocky" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="species">
                    <Label className="text-[#d0bcff] mb-2">
                        Species
                    </Label>
                    <Input placeholder="Dog" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="breed">
                    <Label className="text-[#d0bcff] mb-2">
                        Breed
                    </Label>

                    <Input placeholder="Terrier Mix" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="age">
                    <Label className="text-[#d0bcff] mb-2">
                        Age
                    </Label>
                    <Input
                        placeholder="6 months"
                        className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="gender">
                    <Label className="text-[#d0bcff] mb-2">
                        Gender
                    </Label>
                    <Input placeholder="Male" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="imageUrl">
                    <Label className="text-[#d0bcff] mb-2">
                        Image URL
                    </Label>
                    <Input placeholder="https://example.com/pet.jpg" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white"
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value && !isValidUrl(value)) {
                                setUrl("Please enter a valid URL");
                            } else {
                                setUrl("");
                            }
                        }}/>

                    {url && (
                        <p className="text-red-400 text-sm mt-1">{url}</p>
                    )}

                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="healthStatus">
                    <Label className="text-[#d0bcff] mb-2">
                        Health Status
                    </Label>
                    <Input placeholder="Healthy,growing puppy" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>

                <TextField isRequired name="vaccinationStatus">
                    <Label className="text-[#d0bcff] mb-2">
                        Vaccination Status
                    </Label>

                    <Input placeholder="Up to date" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="location">
                    <Label className="text-[#d0bcff] mb-2">
                        Location
                    </Label>
                    <Input placeholder="Austin,TX" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <TextField isRequired name="adoptionFee" type="number">
                    <Label className="text-[#d0bcff] mb-2">
                        Adoption Fee
                    </Label>
                    <Input placeholder="175" className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white" />
                    <FieldError className="text-red-400 text-sm mt-1" />
                </TextField>
                <div className="md:col-span-2">
                    <TextField isRequired name="description">
                        <Label className="text-[#d0bcff] mb-2">
                            Description
                        </Label>

                        <TextArea
                            placeholder="Write something about this lovely pet..."
                            className="bg-[#22192f] border border-[#ffffff10] rounded-2xl text-white min-h-[160px]" />
                        <FieldError className="text-red-400 text-sm mt-1" />
                    </TextField>
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-2">
                    <Button type="submit" className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#b784ff] text-white font-semibold hover:scale-[1.02] duration-300">
                        Add Pet
                    </Button>
                    <Button type="reset" variant="secondary" className="h-14 px-8 rounded-2xl bg-[#22192f] border border-[#ffffff10] text-white hover:bg-[#2d2340] duration-300">
                        Reset
                    </Button>
                </div>
            </Form>
            <ToastContainer />
        </div>
    )
}

export default ListPet