import React from 'react'

export const SearchBar = () => {
  return (

     <div id="current" className="wrapper">

         <nav className=" navbar-fixed-top">
            <div className="container margin-left" >
              <form className="card my-6" >
                <div className="card-body row no-gutters align-items-center">

                  <div className="col">
                    <input 
                    className="form-control form-control-lg form-control-borderless" 
                    type="search"
                    placeholder="Search ..."
                    
                      
                      />
                  </div>
                </div>
              </form>

            </div>
          </nav>

    </div>


  )
}
