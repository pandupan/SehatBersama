import React from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HalamanInformasi = () => {
  return (
    <div className=" to-white w-full h-[700px] sm:pb-24 ">
      <div className="flex flex-col  container ">
        <div className="flex flex-col mt-28  text-justify">
          <h1 className="text-center lg:text-4xl sm:text-2xl text-xl font-bold">
            INFORMASI KESEHATAN
          </h1>
        </div>
        <div className="justify-start lg:px-14 flex flex-col gap-4 mt-6 ">
          <div className="flex flex-row justify-start text-start gap-4 ">
            <h3 className="lg:text-xl sm:text-base text-sm font-bold underline underline-offset-1">
              Kategori Artikel
            </h3>
            <h3 className="lg:text-md sm:text-base text-xs font-semibold text-[#207183]">
              Lihat Artikel Terbaru
            </h3>
          </div>
          <div className="flex flex-row sm:gap-20 gap-2 rounded-2xl lg:px-10 sm:px-6 px-2 sm:py-4 py-2 bg-[#4bb6be]">
            <div className="flex flex-col gap-4">
              <a
                href="/InformasiKesehatan/HidupSehat"
                className="sm:text-base text-xs  font-semibold sm:font-bold text-white hover:text-[#207183]"
              >
                HIDUP SEHAT
              </a>
              <a
                href="/InformasiKesehatan/KesehatanMental"
                className="sm:text-base text-xs font-semibold sm:font-bold text-white hover:text-[#207183]"
              >
                KESEHATAN MENTAL
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="/InformasiKesehatan/Kehamilan"
                className="sm:text-base text-xs font-semibold sm:font-bold text-white hover:text-[#207183]"
              >
                KEHAMILAN
              </a>
              <a
                href="/InformasiKesehatan/NutrisiDanDiet"
                className="sm:text-base text-xs font-semibold sm:font-bold text-white hover:text-[#207183]"
              >
                NUTRISI DAN DIET
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="/InformasiKesehatan/Penyakit"
                className="sm:text-base text-xs font-semibold sm:font-bold text-white hover:text-[#207183]"
              >
                PENYAKIT
              </a>
              <a
                href="/InformasiKesehatan/GiziDanSuplemen"
                className="sm:text-base text-xs font-semibold sm:font-bold text-white hover:text-[#207183]"
              >
                GIZI DAN SUPLEMEN
              </a>
            </div>
          </div>
        </div>
        {/* CROUSEL */}
        <div className="relative w-full mt-10 flex flex-row justify-center items-center sm:gap-10 gap-2">
          <div className="sm:flex hidden">
            <button title="left">
              <AiOutlineLeft size={50} />
            </button>
          </div>
          <div className="flex sm:hidden mb-10">
            <button title="left">
              <AiOutlineLeft size={30} />
            </button>
          </div>
          <div className="flex flex-row gap-10">
            <a
              href="/InformasiKesehatan/HidupSehat"
              className="flex flex-col w-[240px] sm:w-[300px]"
            >
              <div className="relative overflow-hidden bg-[#34b1b1] rounded-xl sm:h-[150px] sm:w-[300px] h-[120px] w-[220px]  flex flex-col p-6 items-center">
                <div className="object-fit">
                  <Image
                    src="/image/hidupsehat.png"
                    alt="hidupsehat"
                    fill={true}
                  />
                </div>
              </div>
              <div className="sm:mt-4">
                <h1 className="text-[#145782] font-semibold text-lg sm:text-2xl">
                  HIDUP SEHAT
                </h1>
                <p className="sm:text-sm text-xs sm:mt-4 mt-2 line-clamp-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur cumque obcaecati voluptas id eligendi sit eaque
                  doloribus. Nulla, ex nisi ea maxime odit corrupti sequi
                  repellendus, rerum velit, voluptatum quos.
                </p>
              </div>
            </a>
            <a
              href="/InformasiKesehatan/KesehatanMental"
              className="hidden sm:flex flex-col w-[240px] sm:w-[300px] "
            >
              <div className="relative overflow-hidden bg-[#34b1b1] rounded-xl sm:h-[150px] sm:w-[300px] h-[120px] w-[220px] flex flex-col p-6 items-center">
                <div className="object-fit">
                  <Image
                    src="/image/kesehatanmental.png"
                    alt="kesehatanmental"
                    fill={true}
                  />
                </div>
              </div>
              <div className="sm:mt-4">
                <h1 className="text-[#145782] font-semibold text-lg sm:text-2xl">
                  KESEHATAN MENTAL
                </h1>
                <p className="sm:text-sm text-xs sm:mt-4 mt-2 line-clamp-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur cumque obcaecati voluptas id eligendi sit eaque
                  doloribus. Nulla, ex nisi ea maxime odit corrupti sequi
                  repellendus, rerum velit, voluptatum quos.
                </p>
              </div>
            </a>
            <a
              href="/InformasiKesehatan/Kehamilan"
              className="hidden sm:flex flex-col w-[240px] sm:w-[300px]"
            >
              <div className="relative overflow-hidden bg-[#34b1b1] rounded-xl sm:h-[150px] sm:w-[300px] h-[120px] w-[220px] flex flex-col p-6 items-center">
                <div className="object-fit">
                  <Image
                    src="/image/kehamilan.png"
                    alt="kehamilan"
                    fill={true}
                  />
                </div>
              </div>
              <div className="sm:mt-4">
                <h1 className="text-[#145782] font-semibold text-lg sm:text-2xl">
                  KEHAMILAN
                </h1>
                <p className="sm:text-sm text-xs sm:mt-4 mt-2 line-clamp-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur cumque obcaecati voluptas id eligendi sit eaque
                  doloribus. Nulla, ex nisi ea maxime odit corrupti sequi
                  repellendus, rerum velit, voluptatum quos.
                </p>
              </div>
            </a>
          </div>
          <div className="sm:flex hidden">
            <button title="right">
              <AiOutlineRight size={50} />
            </button>
          </div>
          <div className="flex sm:hidden mb-10">
            <button title="right">
              <AiOutlineRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanInformasi;
