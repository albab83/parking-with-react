
const Header = (props) => {

    const {toArchive, toParkingPage} = props

    return (
        <div className="text-white grid xl:grid-cols-2 sm:grid-cols-1 bg-slate-800 px-24 py-3 items-center">
            <a className="text-3xl font-semibold rows-span-4 xl:text-start sm:text-center hover:underline underline-offset-8" href={toParkingPage}>Parking</a>
            <a className=" xl:text-end sm:text-center rows-span-4" href={toArchive}>Archive</a>
        </div>
    )
}

export default Header