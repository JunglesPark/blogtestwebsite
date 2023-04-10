import React from 'react'

const InfoSection = () => {
  return (
    <div>
        <div className="p-5 grid grid-cols-2 gap-4">
            <div className="gap-x-3">

            </div>
            <div className="gap-x-3">
                <h1 className="text-2xl font-bold">Hello World</h1>
                <p>
In git, a “remote” refers to a remote version of the same repository, which is typically on a server somewhere (in this case, GitHub). “origin” is the default name git gives to a remote server (you can have multiple remotes) so git remote add origin is instructing git to add the URL of the default remote server for this repo.</p>
            </div>
        </div>
        <div className="p-5 grid grid-cols-2 gap-4">
            <div className="gap-x-3 m-8 p-8 cutCorner">
              <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">01</h1>
              <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3">Experience</h3>
              <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="gap-x-3 m-8 p-8 cutCorner">
              <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">02</h1>
              <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3">Breadth of Knowledge</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className="gap-x-3 m-8 p-8 cutCorner">
              <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">03</h1>
              <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3">Trend Setters</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className="gap-x-3 m-8 p-8 cutCorner">
              <h1 className="absolute -left-7 -top-14 text-8xl stroke-text">04</h1>
              <h3 className="w-fit border-2 border-solid rounded-full border-cyan-300 m-2 p-3">Passionate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        </div>
    </div>
  )
}

export default InfoSection