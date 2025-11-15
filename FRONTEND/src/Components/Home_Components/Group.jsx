import React from "react";
import { Member } from "../../assets/assets";

const Group = () => {
  return (
    <section className="circle-section py-5">
      <div className="container text-center">
        <div className="row justify-content-center g-4">
           <h2 className="text-center testimonial-quote-mark">Team Members</h2>
          {Member.map((item) => (
            <div key={item.id} className="col-12 col-md-3">
              <div className="circle-wrapper mx-auto">
                <img src={item.img} alt={item.title} className="circle-img img-fluid"/>
              </div>

              <h5 className="circle-title mt-3">
                {item.name}
              </h5>

              <h5 className="circle-title mt-3">
                {item.role}
              </h5>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Group;
