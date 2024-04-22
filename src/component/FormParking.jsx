import { motion } from "framer-motion"
const FormParking = () => {

    return (
        <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <div className="bg-slate-800 grid grid-cols-1 p-5 text-white rounded-lg">
                <h1 className="text-center mb-5 w-full font-bold text-xl">Form Parking</h1>
                <form className=" flex flex-col" action="">
                        <input className="p-2 rounded-md mb-3 text-black" type="text" placeholder="Masukan Nama" />
                        <select className=" p-2 rounded-md mb-3 font-semibold text-slate-400" id="kendaraan">
                            <option value="mobil">Mobil</option>
                            <option value="motor">Motor</option>
                        </select>
                        <input className="p-2 rounded-md mb-3 text-black" type="text" placeholder="Masukan No Kendaraan" />
                        <button className="bg-blue-500 p-2 my-2 w-1/2 mx-auto rounded-md text-white font-semibold">Masuk</button>
                </form>
            </div>
        </motion.div>
        
    )
}

export default FormParking