import Image from "next/image"


function Logo() {
    return (
        <Image height={90} width={90} priority={false} alt="logo" src={"/logo.svg"} />
    )
}

export default Logo