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
        <div className="p-5 grid grid-cols-2 gap-4 justify-items-center">
            <div className="gap-x-3">01</div>
            <div className="gap-x-3">01</div>
            <div className="gap-x-3">01</div>
            <div className="gap-x-3">01</div>
        </div>
    </div>
  )
}

export default InfoSection