import Image from "next/image"

const Header = () => {
    return (
        <header className="d-flex align-item-center shadow p-3 mb-5 bg-body-tertiary rounded sticky-top ">
            <div className="d-flex align-item-center w-25 h-25 cursor-pointer">
                <Image src="/./logo.jpeg"
                        alt="banner"
                    width={150} height={75}
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
            <div className="d-flex flex-row m-2 gap-2 justify-content-end">


                <a className="nav-link active" aria-current="page" href="#">Home</a>


                <a className="nav-link" href="#">Features</a>


                <a className="nav-link" href="#">Pricing</a>



            </div>
        </header>
    )
}

export default Header