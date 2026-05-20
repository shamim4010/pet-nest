"use client";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdVaccines } from "react-icons/md";
import { FaShieldDog } from "react-icons/fa6";

const SinglePetCard = ({ pet }) => {

  return (
    <section className="bg-[#0b0813] py-24 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_.9fr] gap-6">
        <div className="relative rounded-[34px] overflow-hidden border border-white/10 bg-[#171320] group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
          <Image
            src={pet.imageUrl}
            alt={pet.petName}
            width={1200}
            height={1200}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute top-5 right-5 z-20">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full text-white text-sm tracking-wide">
              Available For Adoption
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-20 p-7 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 rounded-full bg-[#ffffff14] backdrop-blur-lg text-white text-xs">
                {pet.species}
              </span>
              <span className="px-4 py-1 rounded-full bg-[#ffb84d1e] text-[#ffd18a] text-xs">
                {pet.breed}
              </span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black tracking-tight">
              {pet.petName}
            </h1>
            <p className="mt-3 text-[#d3cfe0] text-base">
              {pet.gender} • {pet?.age}
            </p>
          </div>
        </div>
        <div className="rounded-[34px] border border-white/10 bg-[#221d2d] p-7 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
             <div>
                <p className="text-sm text-[#a69fb7] uppercase tracking-[3px]">
                  Adoption Fee
                </p>
                <h2 className="text-6xl font-black mt-3 bg-gradient-to-r from-[#d8b4fe] to-[#8b5cf6] text-transparent bg-clip-text">
                  ${pet.adoptionFee}
                </h2>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[5px] text-[#9d95b1]">
                Description
              </p>
              <p className="mt-5 leading-8 text-[#d4d0de] text-sm">
                {pet?.description}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-[#2e283a] rounded-[28px] p-5 border border-white/5 hover:-translate-y-2 duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#3b344a] flex items-center justify-center text-[#ffd86d] text-xl">
                  <FaShieldDog />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Health Status
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#c9c4d4]">
                  {pet.healthStatus}
                </p>
              </div>
              <div className="bg-[#2e283a] rounded-[28px] p-5 border border-white/5 hover:-translate-y-2 duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#3b344a] flex items-center justify-center text-[#bb9cff] text-xl">
                  <MdVaccines />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  Vaccination
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#c9c4d4]">
                  {pet.vaccinationStatus}
                </p>
              </div>
            </div>
            <div className="mt-6 bg-[#2e283a] border border-white/5 rounded-[28px] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#3b344a] flex items-center justify-center text-[#ffb0b0] text-xl">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-sm text-[#aaa3bb]">
                    Location
                  </p>
                  <h3 className="font-bold text-lg mt-1">
                    {pet.location}
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#aaa3bb] text-right">
                  Owner Email
                </p>
                <p className="mt-1 text-sm font-medium text-[#ece8f7]">
                  {pet.ownerEmail}
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 h-16 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#c084fc] text-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-xl shadow-violet-900/40">
            Start Adoption
          </button>
        </div>
      </div>
    </section>
  );
};

export default SinglePetCard;