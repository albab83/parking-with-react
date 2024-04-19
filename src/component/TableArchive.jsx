import TableParking from "./TableParking"

const TableArchive = () => {
    return (
        <div className="bg-slate-800 grid grid-cols-1 p-5 text-white rounded-lg overflow-x-scroll">
            <div className="col-span-1 mb-5 text-center">
                <h1 className="font-bold text-xl">Daftar Archive Parkir</h1>
            </div>
            <table className=" col-span-1">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Jenis Kendaraan</th>
                        <th>No Kendaraan</th>
                        <th>Jam Masuk</th>
                        <th>Jam Keluar</th>
                        <th>Pendapatan</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr className="border-b">
                        <td className="py-3">Jhony</td>
                        <td>mobil</td>
                        <td>D 121254 PO</td>
                        <td>13:00</td>
                        <td>15:00</td>
                        <td>Rp.10.000</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-3">Jhony</td>
                        <td>mobil</td>
                        <td>D 121254 PO</td>
                        <td>13:00</td>
                        <td>15:00</td>
                        <td>Rp.10.000</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-3">Jhony</td>
                        <td>mobil</td>
                        <td>D 121254 PO</td>
                        <td>13:00</td>
                        <td>15:00</td>
                        <td>Rp.10.000</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-3">Jhony</td>
                        <td>mobil</td>
                        <td>D 121254 PO</td>
                        <td>13:00</td>
                        <td>15:00</td>
                        <td>Rp.10.000</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-3">Jhony</td>
                        <td>mobil</td>
                        <td>D 121254 PO</td>
                        <td>13:00</td>
                        <td>15:00</td>
                        <td>Rp.10.000</td>
                    </tr>
                </tbody>        
            </table>
        </div>
    )
}

export default TableArchive