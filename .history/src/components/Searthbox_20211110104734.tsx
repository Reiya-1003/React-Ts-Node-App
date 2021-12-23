import React from "react";

const Searthbox = () => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={props.handlesubmit}>
            <div className="input-field">
              <input placeholder="Serch Movie" type="text" />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Searthbox;
