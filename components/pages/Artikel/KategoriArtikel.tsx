import React from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const KategoriArtikel = () => {
  return (
    <div className="bg-gradient-to-br from-[#46aea8] via-[#d2e9e8] to-[white] px-16 flex flex-col mt-20 pt-20 pb-40">
      <div className="flex flex-row gap-10">
        <div>
          <div className="relative w-[563px] h-[376px]">
            <div className="object-fit">
              <Image src="/image/PHBS.png" alt="phbs" fill={true} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-semibold">HIDUP SEHAT</h3>
          <h1 className="font-bold text-5xl">
            Pola Hidup Sehat Investasi Masa Tua
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur enim amet dolor cupiditate veniam dolores quia eos,
            distinctio blanditiis, ut fugiat asperiores voluptatem vel neque
            accusantium! Earum minima impedit aliquid. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ut, eum! Pariatur facere minus ut
            adipisci molestiae ullam itaque eligendi? Nihil architecto tempore
            quidem dolore rerum ex, blanditiis eius odit corrupti.
          </p>
          <div>
            <h3 className="flex justify-start">11 November 2023</h3>
            <a href="#" className="text-gray-500 hover:text-blue-500 ">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl border-b-2 border-black mt-4">
        Artikel Terbaru
      </h1>

      {/* LIST ARTIKEL */}
      {/* ARTIKEL 1 */}
      <div className="p-8 flex flex-row bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">HIDUP SEHAT</h1>
          <h3 className="font-bold text-md mt-2">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="mt-3">11 November 2023</h2>
          <div>
            <a href="#" className="text-gray-500 hover:text-blue-500 mt-2">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="relative w-[261px] h-[181px] rounded-xl overflow-hidden">
            <div className="object-fit">
              <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 1 */}
      <div className="p-8 flex flex-row bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">HIDUP SEHAT</h1>
          <h3 className="font-bold text-md mt-2">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="mt-3">11 November 2023</h2>
          <div>
            <a href="#" className="text-gray-500 hover:text-blue-500 mt-2">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="relative w-[261px] h-[181px] rounded-xl overflow-hidden">
            <div className="object-fit">
              <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 1 */}
      <div className="p-8 flex flex-row bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">HIDUP SEHAT</h1>
          <h3 className="font-bold text-md mt-2">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="mt-3">11 November 2023</h2>
          <div>
            <a href="#" className="text-gray-500 hover:text-blue-500 mt-2">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="relative w-[261px] h-[181px] rounded-xl overflow-hidden">
            <div className="object-fit">
              <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 1 */}
      <div className="p-8 flex flex-row bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">HIDUP SEHAT</h1>
          <h3 className="font-bold text-md mt-2">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="mt-3">11 November 2023</h2>
          <div>
            <a href="#" className="text-gray-500 hover:text-blue-500 mt-2">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="relative w-[261px] h-[181px] rounded-xl overflow-hidden">
            <div className="object-fit">
              <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 font-semibold mt-4">
        <button>
          <AiOutlineLeft size={40} />
        </button>
        <div className="flex flex-row text-5xl gap-20 border-x-2 px-10 border-black">
          <a href="#" className="text-black hover:text-blue-500">
            1
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            2
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            3
          </a>
        </div>
        <button>
          <AiOutlineRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default KategoriArtikel;
