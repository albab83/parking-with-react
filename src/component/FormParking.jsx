
const FormParking = () => {

    return (
        <div className="bg-slate-800 grid grid-cols-1 p-5 text-white rounded-lg">
            <h1 className="text-center mb-5 w-full font-bold text-xl">Form Parking</h1>
            <form className=" flex flex-col" action="">
                    <label className="font-medium mb-2" htmlFor="">Nama</label>
                    <input className="p-2 rounded-md mb-3 text-black" type="text" placeholder="Masukan Nama" />
                    <label className="font-medium mb-2" htmlFor="">Jenis Kendaraan</label>
                    <select className=" p-2 rounded-md mb-3 font-semibold text-slate-400" id="kendaraan">
                        <option value="mobil">Mobil</option>
                        <option value="motor">Motor</option>
                    </select>
                    <label className="font-medium mb-2" htmlFor="">Masukan No Kendaraan</label>
                    <input className="p-2 rounded-md mb-3 text-black" type="text" placeholder="Masukan No Kendaraan" />
                    <button className="bg-blue-500 p-2 my-2 w-1/2 mx-auto rounded-md text-white font-semibold">Masuk</button>
            </form>
        </div>
    )
}

export default FormParking