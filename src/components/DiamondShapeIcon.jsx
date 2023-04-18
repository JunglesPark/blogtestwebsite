import React from 'react'

const DiamondShapeIcon = () => {
  return (
    <div className="relative w-screen h-[100vh] p-20 bg-[url('./assets/background_patterns.png')] bg-cover">
        <div className="relative left-[10%] top-[10%] invisible md:visible xl:w-[335px] md:w-[240px] flex rotate-45 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4">
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center">
                <img className="-rotate-45 object-cover" src="./src/assets/Cloud/Hero2_Logos/aws.png" />
            </div>
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center">
                <img className="-rotate-45" src="./src/assets/Cloud/Hero2_Logos/azure.png" />
            </div>
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center">
                <img className="-rotate-45" src="./src/assets/Cloud/Hero2_Logos/gcp.png" />
            </div>
            <div className="p-2 bg-white overflow-hidden shadow-md border-2 flex items-center">
                <img className="-rotate-45" src="./src/assets/Cloud/Hero2_Logos/huawei.png" />
            </div>
        </div>

    <div>
        <div className="w-1/2 absolute top-[10%] right-[10%] gap-x-3 m-8 p-8 cutCorner 2xl:w-[700px] xl:w-[600px] md:w-[480px] bg-white">
            <h1 className="absolute left-5 -top-6 text-4xl font-bold z-40">Who need this?</h1>
            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="w-1/2 absolute top-[40%] right-[8%] gap-x-3 m-8 p-8 cutCorner 2xl:w-[700px] xl:w-[600px] md:w-[480px] bg-white">
            <h1 className="absolute left-5 -top-6 text-4xl font-bold z-40">Why this Service?</h1>
            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="w-3/4 absolute bottom-[5%] gap-x-3 m-8 p-8 cutCorner 2xl:w-[900px] xl:w-[800px] md:w-[580px] bg-white">
            <h1 className="absolute left-5 -top-6 text-4xl font-bold z-40">Why this Service?</h1>
            <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
        
    </div>
  )
}

export default DiamondShapeIcon