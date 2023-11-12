import React from 'react';
import Image from 'next/image';

const RegisterPage = () => {
  return (
    <div className="mt-20 flex flex-row justify-center ">
      <div className="flex flex-col px-20">
        <h1 className="text-4xl font-bold mb-10 text-center">Register</h1>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">Nama</h3>
          <input
            className="p-2 border-2 border-[#4bb6be] rounded "
            type="text"
            placeholder="Masukkan Nama Anda"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="font-semibold text-xl">Email</h3>
          <input
            className="p-2 border-2 border-[#4bb6be] rounded "
            type="text"
            placeholder="Masukkan Email Anda"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="font-semibold text-xl">Nomor HP (Opsional)</h3>
          <input
            className="p-2 border-2 border-[#4bb6be] rounded "
            type="text"
            placeholder="Masukkan Nomor HP Anda"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="font-semibold text-xl">Password</h3>
          <input
            className="p-2 border-2 border-[#4bb6be] rounded "
            type="password"
            placeholder="Masukkan Password Anda"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4 justify-center items-center px-32">
          <div className="flex justify-center">
            <button className="bg-[#4bb6be] text-center text-white p-2 py-2 px-10">
              Register
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4  py-4">
          <p className="justify-center text-center items-center ">
            Sudah Punya Akun?
          </p>
          <button className="text-[#4bb6be] hover:underline">
            Masuk
          </button>
        </div>
      </div>
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="object-cover w-full h-full">
          <Image src="/image/HeroSection.png" alt="register" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
