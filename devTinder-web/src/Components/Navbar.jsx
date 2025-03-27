import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const user = useSelector((store)=>store.user)
  console.log(user)

  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevTinder</a>
        </div>
        <div className="flex gap-2">
          {user && 
          
          
          <div className="dropdown dropdown-end mx-10">
            <button className="btn bg-base-100">
            Welcome <span className='text-primary'>{user.firstName} </span>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow mt-[80%]">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
            </button>
          </div>
        }
        </div>
      </div>
    </div>
  )
}

export default Navbar