import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Ethan Carter",
      date: "2 months ago",
      rating: 5,
      content: "Absolutely stunning watch! The craftsmanship is impeccable, and it looks even better in person. I've received so many compliments on it.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlrcR_fuC_9NlJ2lml0iWP9q_cH9MYy_tlYDDc0nycjLpoISGYNzBTPeKstnNluWdq2CR3u_C8LmmdU9yvZaLtJkaLzhcM-EPa0EyCP4SoAtp4CS8HSfvm0GAIqMgi2hpHQo3JTAVgPsiZjGIaASr33LFVhxPBofiStLw-wrVZ8vB-RZ7DlO-d3klPJn7NFOskJVhUMlTcSEkBXb4Y4AJUfidvSR1XH0IQtwtbS8P0AK1tx7-WuF62FoHnCSVZZsgKmiyvrTqwt3o"
    },
    // Add other reviews similarly
  ];

  const Star = ({ filled }) => (
    <div className={filled ? "text-[#19a1e5]" : "text-[#aec8d5]"}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
        {filled ? (
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
        ) : (
          <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
        )}
      </svg>
    </div>
  );

  return (
    <>
      <h2 className="text-[#0e171b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Customer Reviews
      </h2>
      <div className="flex flex-col gap-8 bg-slate-50 p-4 rounded-lg">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col gap-3 bg-slate-50">
            <div className="flex items-center gap-3">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: `url('${review.image}')` }}
              ></div>
              <div className="flex-1">
                <p className="text-[#0e171b] text-base font-medium leading-normal">{review.name}</p>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">{review.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < review.rating} />
              ))}
            </div>
            <p className="text-[#0e171b] text-base font-normal leading-normal">
              {review.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerReviews;