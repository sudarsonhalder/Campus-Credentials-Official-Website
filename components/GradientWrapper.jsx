const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative ${props.className || ""}`}>
        <div className={`absolute m-auto blur-[160px] ${props.wrapperClassName || ""}`}
          >

        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper