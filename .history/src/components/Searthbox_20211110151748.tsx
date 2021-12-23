import React from "react";

const Searthbox = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Serch Movie"
                type="text"
                onChange={props.handlechange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Searthbox;
