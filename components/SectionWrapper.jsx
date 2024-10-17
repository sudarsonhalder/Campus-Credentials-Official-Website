const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={` lg:py-18 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper