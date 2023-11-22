import Image from "next/image"


function Logo() {
    return (
        <Image height={130} width={130} priority={false} alt="logo" src={"./logo.svg"} />
    )
}

export default Logo