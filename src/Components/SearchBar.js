import React from 'react'

export const SearchBar = ({
  change,
  submit,
  input

}) => {
  return (
    <div id="current" className="wrapper">
      <nav className=" navbar-fixed-top">
        <div className="container margin-left">
          <form className="card my-6" onSubmit={submit}>
            <div className="card-body row no-gutters align-items-center">
              <div className="col-12">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search ..."
                  onChange={change}
                  value={input}
                />
                <button className="btn btn-lg button-submit mt-4" type="submit">
                  Ok
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
