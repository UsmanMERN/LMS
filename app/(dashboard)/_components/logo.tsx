import Image from "next/image"


function Logo() {
    return (
        <Image height={150} width={150} priority={false} alt="logo" src={"/BlackLogo.svg"} className="p-0" />
    )
}

export default Logo