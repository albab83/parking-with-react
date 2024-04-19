import FormParking from "../component/FormParking"
import Header from "../component/Header"
import TableParking from "../component/TableParking"

const Page = () => {

    return (
        <div className="grid grid-cols-1">
            <Header toArchive="/archive-page" toParkingPage="/"></Header>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-7 gap-7">
                <div className="sm:col-span-1 md:col-span-1">
                <FormParking></FormParking>
                </div>
                <div className="sm:col-span-1 xl:col-span-3 md:col-span-2">
                <TableParking></TableParking>
                </div>
            </div>
        </div>
    )
}

export default Page
