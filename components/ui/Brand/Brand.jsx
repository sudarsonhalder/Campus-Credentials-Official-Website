import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="https://ik.imagekit.io/99djpd8k3/CC/Campus%20Svg%20Logo.svg?updatedAt=1731242374124"
        alt="Campus Credentials logo"
        {...props}
        width={180}
        height={80}
        priority
        unoptimized
    />
)
export default Brand
