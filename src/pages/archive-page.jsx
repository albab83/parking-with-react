import TableArchive from "../component/TableArchive"
import Header from "../component/Header"

const ArchivePage = () => {

    return (
        <div className="grid grid-cols-1 transition-all delay-200">
            <Header toArchive="/archive-page" toParkingPage="/"></Header>
            <div className="p-7">
                <TableArchive></TableArchive>
            </div>
        </div>
    )
}

export default ArchivePage