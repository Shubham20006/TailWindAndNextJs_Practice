

function index() {
    return (
        <div>
            <div className="container border-solid  flex  justify-between    bg-white border-red-600 text-black w-screen h-screen items-center border-8 ">
                <div className=" basis-1/3 hover:basis-1/2 border-solid border-pink-600 border-2  flex justify-center ">101</div>
                <button class="dark:md:hover:bg-fuchsia-600 ...">
                    Save changes
                </button>
                <button class="bg-sky-500 hover:bg-sky-700 ...">
                    Save changes
                </button>
                <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                    Save changes
                </button>
                <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                <input type="file" class="file:border file:border-solid ..." />
                <div>105</div>
            </div>
            <div>
                <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                    <li>5 cups chopped Porcini mushrooms</li>
                    <li>1/2 cup of olive oil</li>
                    <li>3lb of celery</li>
                </ul>
            </div>
        </div>
    )
}

export default index
