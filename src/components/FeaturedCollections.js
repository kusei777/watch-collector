import React from 'react';

const FeaturedCollections = () => {
  const collections = [
    {
      name: "The Chronos Collection",
      description: "Precision and performance",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmHaqhR04Xy9Sk3-1tSDNXHF_ZnXx2sBx4-Y4DpxylDV6adODp8fw1aILKy8w9wXaRl1k3204jE8npy9e1y2Bu8sPzjHj44iVvkBggN32uypPK6qGBLTMkobtxiXCQMacGcf0Mam-qjwrJzbRwWyeATegE8tYvL0CNGd3iekGTiFIHIXnrMLNLF5pkqRW2lQ8JfBzR9Rg5VPQGXLeA8FutKXbWcLQEq2LT3C_2_XK2FcG6mTJpTM6jWHfNw3NHTblKvfwqAK6mT-o"
    },
    {
      name: "The Elegance Collection",
      description: "Timeless elegance",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFs-UME9wHuqY2jbIV4TawKVFes3VCmrshLNGC6lPsvdFqts7s6Qi1WfFPTWNkqNLOT5ZUPy1_AecXFVvHXYsfWML382LxeUy0M1WjQfD-aRIzjQsh1m_QoCRZ_wuqtiyFyPSgaC7x6eHx0wwOLzD5mAfTpb0skjGCPiMEpun5BtSnpC56qQFOFRHEVpf7163WgjPYa6zZNJS376F6X9bOpFzdSKSbFpeRjdEcaBqkl_CnjwVY7fFiioqIWA-bCuoheDJ3l1zxJAU"
    },
    {
      name: "The Sport Collection",
      description: "Designed for adventure",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxhcGzcIZqHajcWZAOepetXrgIPUDWqzyaZkEGTcG_n1kKizH_2Cw80iu2AelnmSK72sSIBF_aE3iXVdz6SQg-ObL_mz48riVA7Ne7lNkjwDFcjk08-2c7T0oPmvhrMA0thMfLdTpRmCcawUqxCumbyiS-95b_-HTdIUfI5BMGxpT3pTSh-Z8y1WH4mz639pHea1E1USjoU4AtAf0WTk2j987hNRxrPgywSYGRriK1HElPm70dmEM3WRxxEOiTrxN6_r1HZ2KWEGk"
    }
  ];

  return (
    <>
      <h2 className="text-[#0e171b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Collections
      </h2>
      <div className="flex overflow-x-auto hide-scrollbar pb-4">
        <div className="flex items-stretch p-4 gap-4 min-w-max">
          {collections.map((collection, index) => (
            <div key={index} className="flex h-full flex-col gap-4 rounded-lg min-w-[280px]">
              <div 
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url('${collection.image}')` }}
              ></div>
              <div>
                <p className="text-[#0e171b] text-base font-medium leading-normal">{collection.name}</p>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedCollections;