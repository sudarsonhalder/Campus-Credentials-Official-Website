import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/CAMPUS.png"
        alt="Campus Credentials logo"
        {...props}
        width={180}
        height={80}
        priority
    />
)
export default Brand