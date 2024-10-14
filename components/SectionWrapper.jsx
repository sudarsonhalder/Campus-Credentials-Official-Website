const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={` lg:py-24 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper