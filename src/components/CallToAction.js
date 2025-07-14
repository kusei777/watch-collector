import React from 'react';

const CallToAction = () => {
  return (
    <div className="@container my-10">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 bg-slate-100 rounded-lg">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#0e171b] text-2xl md:text-3xl font-bold leading-tight max-w-[720px] mx-auto">
            Find Your Perfect Timepiece Today
          </h1>
          <p className="text-[#0e171b] text-base font-normal leading-normal max-w-[720px] mx-auto">
            Browse our extensive collection and discover the watch that speaks to your style and personality.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#19a1e5] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition">
            <span className="truncate">Explore All Watches</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;