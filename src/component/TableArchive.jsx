import { motion } from "framer-motion"
const TableArchive = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}>
            <div className="bg-slate-800 grid grid-cols-1 text-white rounded-lg w-full overflow-x-auto h-96 ">
                    <div className="flex justify-center items-center w-full pt-4">
                        <h1 className="font-bold text-xl">Daftar Archive</h1>
                    </div>
                    <div className="w-full py-4 px-3">
                        <input className="w-full p-3 rounded-lg text-black" type="search" placeholder="Search" />
                    </div>
                    <table className="w-full px-5">
                        <thead className="bg-black sticky top-0">
                            <tr className="w-full">
                                <th className="py-5">Nama</th>
                                <th>Jenis Kendaraan</th>
                                <th>No Kendaraan</th>
                                <th>Jam Masuk</th>
                                <th>Jam Keluar</th>
                                <th>Pendapatan</th>
                            </tr>
                        </thead>
                        <tbody className="text-center h-96 overflow-y-auto">
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                                <tr className="border-b w-full">
                                    <td className="py-3">salman</td>
                                    <td>mobil</td>
                                    <td>D 12989 PO</td>
                                    <td>14:00</td>
                                    <td>15:00</td>
                                    <td>Rp. 0</td>
                                </tr>
                        </tbody>        
                    </table>
            </div>
        </motion.div>
    )
}

export default TableArchive