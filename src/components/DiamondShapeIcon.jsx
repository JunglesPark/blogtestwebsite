import React from 'react'

const DiamondShapeIcon = () => {
  return (
    <div className="relative w-screen h-screen">
        <div className="relative left-24 top-20 w-[335px] flex rotate-45 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center w-40 h-40 max-w-[160px] max-h-[160px] min-w-[80px] min-h-[80px]">
                <img className="-rotate-45 object-cover" src="./src/assets/Cloud/Hero2_Logos/aws.png" />
            </div>
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center w-40 h-40 max-w-[160px] max-h-[160px] min-w-[80px] min-h-[80px]">
                <img className="-rotate-45" src="./src/assets/Cloud/Hero2_Logos/azure.png" />
            </div>
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center w-40 h-40 max-w-[160px] max-h-[160px] min-w-[80px] min-h-[80px]">
                <img className="-rotate-45" src="./src/assets/Cloud/Hero2_Logos/gcp.png" />
            </div>
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center w-40 h-40 max-w-[160px] max-h-[160px] min-w-[80px] min-h-[80px]">
                <img className="-rotate-45" src="./src/assets/Cloud/Hero2_Logos/huawei.png" />
            </div>
        </div>
        <div className="w-1/2 absolute top-12 right-24 gap-x-3 m-8 p-8 cutCorner">
            <h1 className="absolute left-5 -top-6 text-4xl ">Who need this?</h1>
            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="w-1/2 absolute right-32 gap-x-3 m-8 p-8 cutCorner">
            <h1 className="absolute left-5 -top-6 text-4xl ">Why this Service?</h1>
            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="w-3/4 absolute bottom-0 gap-x-3 m-8 p-8 cutCorner">
            <h1 className="absolute left-5 -top-6 text-4xl ">Why this Service?</h1>
            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default DiamondShapeIcon