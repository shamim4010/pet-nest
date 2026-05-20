import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMapLocation } from 'react-icons/fa6'

function AllPetsCard({ pet }) {
    return (
        <div className="group relative w-[320px] overflow-hidden rounded-[26px] border border-[#22c55e]/10 bg-[#07130d]/80 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#4ade80]/40 hover:shadow-[0_20px_60px_rgba(34,197,94,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/20 via-transparent to-[#86efac]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative h-[420px] overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#07130d] via-[#07130d]/30 to-transparent" />
                <Image
                    src={pet.imageUrl}
                    alt={pet.petName}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 z-20 flex gap-2">
                    <span className="rounded-full border border-[#4ade80]/20 bg-[#22c55e]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dcfce7] backdrop-blur-xl">
                        {pet.age} Years
                    </span>
                    <span className="rounded-full border border-[#86efac]/20 bg-[#86efac]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#bbf7d0] backdrop-blur-xl">
                        {pet.breed}
                    </span>
                </div>
                <button className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#4ade80]/20 bg-[#0b1a12]/60 text-[#dcfce7] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#22c55e] hover:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-2xl font-black tracking-tight text-[#f0fdf4]">
                            {pet.petName}
                        </h3>
                        <div className="flex items-center gap-2 rounded-full border border-[#4ade80]/20 bg-[#22c55e]/10 px-2 py-1 backdrop-blur-md">
                            <div className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbf7d0]">
                                Available
                            </span>
                        </div>
                    </div>
                    <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-[#bbf7d0]">
                        {pet.description}
                    </p>
                    <div className="mb-5 flex items-center justify-between text-xs text-[#bbf7d0]">
                        <span className="flex items-center gap-1">
                            <FaMapLocation />
                            {pet.location}
                        </span>
                        <span className="font-semibold text-[#4ade80]">
                            ${pet.adoptionFee}
                        </span>
                    </div>
                    <Link href={`/pets/${pet.id}`}>
                        <button className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(34,197,94,0.45)] active:scale-[0.98]">
                            <span className="relative z-10">
                                View Details
                            </span>
                            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AllPetsCard