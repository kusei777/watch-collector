import React from 'react';

const HeroBanner = () => {
  return (
    <div className="@container mb-8">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[300px] md:min-h-[480px] flex-col gap-4 md:gap-6 @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-8 md:pb-10 @[480px]:px-10 rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJefweYmZUn-yk15Og0GiS6oCvhR4rPTjeHGg6IBinK_hOdjrjhoBKKaGJQFytWH-bZhmvOvWRTxg9wanWAVSKYDh_JWMBWiTBd_SyuEerxoXGuB29IvHoCwdwvZyfyj8L9bwd0b-DmJuMeVpcoCTa4AO6yiFewq6P3KEjPQY4bDlTRlsmxq2Rhr6ftz755WasgB_zwkOtE9NsqD2QbB7YXNT5JBw401guqxRuljYgOhlFNSl6QyEI5LdNIyBKtHTsWBvSWpXroRA")`
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
              Discover Your Perfect Timepiece
            </h1>
            <h2 className="text-white text-sm md:text-base font-normal leading-normal">
              Explore our curated collection of luxury watches, crafted with precision and style.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#19a1e5] text-white text-sm font-bold leading-normal tracking-[0.015em] mt-4 hover:bg-blue-600 transition">
            <span className="truncate">Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;