import React, { useEffect, useState } from "react";


const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 13,
    minutes: 1,
    seconds: 37,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="countdown-section py-5 text-center">
      <div className="container">
        <h2 className="section-title mb-5">Special Offer Ends In</h2>
        <div className="row justify-content-center">
          {[
            { label: "Days", value: pad(timeLeft.days) },
            { label: "Hours", value: pad(timeLeft.hours) },
            { label: "Mins", value: pad(timeLeft.minutes) },
            { label: "Secs", value: pad(timeLeft.seconds) },
          ].map((item, i) => (
            <div key={i} className="col-6 col-md-3 mb-4">
              <div className="countdown-box position-relative mx-auto">
                {/* <img
                  src={BlueFlowerLeft}
                  alt="flower left"
                  className="flower flower-left"
                />
                <img
                  src={BlueFlowerRight}
                  alt="flower right"
                  className="flower flower-right"
                /> */}
                <h3 className="time">{item.value}</h3>
                <p className="label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
