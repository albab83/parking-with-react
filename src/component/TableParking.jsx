import { useEffect, useState } from "react"; 
import Button from "./Button"

const TableParking = () => {
    const [dataPengendara, setDataPengendara] = useState([]);

    useEffect(() => {
  
      fetch("http://localhost:3000/dataPengendara")
        .then((mang) => {
          return mang.json();
        })
        .then((datas) => {
      
          setDataPengendara(datas);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }, []);


    return (
        <div className="bg-slate-800 grid grid-cols-1 p-5 text-white rounded-lg overflow-x-scroll">
            <div className="col-span-1 mb-5 text-center">
                <h1 className="font-bold text-xl">Daftar Pengendara Parkir</h1>
            </div>
            <table className=" col-span-1">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Jenis Kendaraan</th>
                        <th>Jam Masuk</th>
                        <th>No Kendaraan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="data-parkir" className="text-center">
                        {dataPengendara.map((pengendara,id ) => (
                            <tr key={id} className="border-b"> 
                                <td className="py-3">{pengendara.nama}</td>
                                <td className="py-3">{pengendara.jenis}</td>
                                <td className="py-3">{pengendara.jam_masuk}</td>
                                <td className="py-3">{pengendara.no_kendaraan}</td>
                                <td className="py-3"><button className="bg-red-600 p-2 rounded-md">{pengendara.action}</button></td>
                            </tr>
                        ))}
                </tbody>        
            </table>
        </div>
    )
}

export default TableParking