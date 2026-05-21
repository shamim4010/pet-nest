
import { Button, Card, CloseButton } from "@heroui/react";
import React from 'react'
import { FaClock, FaPaw, FaUserCircle, FaVenus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function AdoptionCard({ order }) {
    return (
        <Card className="col-span-12 flex flex-col sm:flex-row gap-5 p-4 bg-[#161120]/80 border border-[#ffffff12] backdrop-blur-xl rounded-[28px] overflow-hidden hover:scale-[1.01] hover:border-[#b48cff40] transition-all duration-500 hover:shadow-2xl hover:shadow-[#7c3aed20]">
            <div className="relative h-[220px] sm:h-[170px] sm:w-[190px] overflow-hidden rounded-2xl">
                <img
                    alt={order?.petName}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-110 duration-700"
                    loading="lazy"
                    src={order?.imageUrl}
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl text-white text-xs border border-white/10">
                    {order?.species}
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <Card.Header className="flex flex-col items-start p-0">
                        <div className="flex items-start justify-between w-full gap-4">
                            <div>
                                <Card.Title className="text-3xl font-bold text-white">
                                    {order?.petName}
                                </Card.Title>
                                <Card.Description className="text-[#cfc7dd] mt-2 leading-7 text-sm">
                                    {order?.message}
                                </Card.Description>
                            </div>
                            <CloseButton
                                aria-label="Close banner"
                                className="bg-[#ffffff10] text-white hover:bg-red-500 hover:text-white duration-300"
                            />
                        </div>
                    </Card.Header>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#22192f] border border-[#ffffff10] text-sm text-[#d8c9ff]">
                            <FaVenus />
                            {order?.gender}
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#22192f] border border-[#ffffff10] text-sm text-[#d8c9ff]">
                            <FaClock />
                            {order?.age}
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#22192f] border border-[#ffffff10] text-sm text-[#d8c9ff]">
                            <FaLocationDot />
                            {order?.userAddress}
                        </div>
                    </div>
                </div>
                <Card.Footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-0 mt-8">
                    <div>
                        <p className="text-[#9e94b4] text-sm">
                            Adoption Fee
                        </p>
                        <h2 className="text-4xl font-black text-[#c084fc]">
                            ${order?.price}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-xs text-[#8d84a3]">
                                Requested By
                            </p>
                            <h4 className="text-white font-medium flex items-center gap-2">
                                <FaUserCircle className="text-[#c084fc] text-lg" />
                                {order?.name}
                            </h4>
                        </div>
                        <Button className="bg-gradient-to-r from-[#7c3aed] to-[#b784ff] text-white rounded-2xl px-6 hover:scale-[1.03] duration-300 flex items-center gap-2">
                            <FaPaw />
                            Cencel Order
                        </Button>
                    </div>
                </Card.Footer>
            </div>
        </Card>
    )
}

export default AdoptionCard