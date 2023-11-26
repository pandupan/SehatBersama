import React from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const KategoriArtikel = () => {
  return (
    <div className="bg-gradient-to-br from-[#46aea8] via-[#d2e9e8] to-[white] xl:px-16 sm:px-10 px-4 flex flex-col mt-20 xl:pt-20 sm:pt-10 pt-4 pb-40">
      <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
        <div className="flex items-center justify-center sm:items-stretch sm:justify-stretch">
          <div className="relative xl:w-[563px] xl:h-[376px] lg:w-[463px] lg:h-[263px] w-[263px] h-[163px]">
            <div className="object-fit">
              <Image src="/image/PHBS.png" alt="phbs" fill={true} />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:gap-6 lg:gap-2 gap-[2px] px-4 sm:px-0">
          <h3 className="text-white font-semibold lg:text-base text-xs ">HIDUP SEHAT</h3>
          <h1 className="font-bold xl:text-5xl lg:text-2xl sm:text-lg">
            Pola Hidup Sehat Investasi Masa Tua
          </h1>
          <p className="xl:text-base text-xs line-clamp-5 lg:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur enim amet dolor cupiditate veniam dolores quia eos,
            distinctio blanditiis, ut fugiat asperiores voluptatem vel neque
            accusantium! Earum minima impedit aliquid. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ut, eum! Pariatur facere minus ut
            adipisci molestiae ullam itaque eligendi? Nihil architecto tempore
            quidem dolore rerum ex, blanditiis eius odit corrupti.
          </p>
          <div>
            <h3 className="flex justify-start lg:text-base text-xs">11 November 2023</h3>
            <a href="#" className="text-gray-500 hover:text-blue-500 lg:text-base text-xs ">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-xl lg:text-3xl border-b-2 border-black mt-4">
        Artikel Terbaru
      </h1>

      {/* LIST ARTIKEL */}
      {/* ARTIKEL 1 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">11 November 2023</h2>
          <div>
            <a href="/InformasiKesehatan/KategoriArtikel/Artikel" className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 2 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">11 November 2023</h2>
          <div>
            <a href="#" className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 3 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">11 November 2023</h2>
          <div>
            <a href="#" className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARTIKEL 4 */}
      <div className="sm:p-8 p-4 flex sm:flex-row flex-col-reverse bg-white border-2 border-black rounded-2xl my-4 ">
        <div className="flex flex-col sm:mt-0 mt-1">
          <h1 className="font-bold sm:text-xl text-sm">HIDUP SEHAT</h1>
          <h3 className="font-bold sm:text-md text-base sm:mt-2 mt-1">
            Penyakit Diabetes Mellitus Tidak Mengenal Usia
          </h3>
          <p className="line-clamp-2 sm:text-base text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
            reprehenderit beatae fugiat. Aut eum impedit, provident unde
            temporibus, minima natus voluptatibus explicabo necessitatibus enim
            neque iure quasi molestias et.
          </p>
          <h2 className="sm:mt-3 mt-1 sm:text-base text-xs">11 November 2023</h2>
          <div>
            <a href="#" className="sm:text-base text-xs text-gray-500 hover:text-blue-500 mt-1">
              Baca Selengkapnya ...
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="relative sm:w-[261px] sm:h-[181px] w-[220px] h-[140px] rounded-xl overflow-hidden">
              <div className="object-fit">
                <Image src="/image/artikel1.png" alt="artikel1" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 font-semibold mt-4">
        <button title="leftbig" className="sm:flex hidden">
          <AiOutlineLeft size={40} />
        </button>
        <button title="leftsmall" className="flex sm:hidden">
          <AiOutlineLeft size={20} />
        </button>
        <div className="flex flex-row sm:text-5xl text-2xl sm:gap-20 gap-10 border-x-2 px-10 border-black">
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
        <button title="rightbig" className="sm:flex hidden">
          <AiOutlineRight size={40} />
        </button>
        <button title="rightsmall" className="flex sm:hidden">
          <AiOutlineRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default KategoriArtikel;
