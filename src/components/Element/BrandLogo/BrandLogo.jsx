
const BrandLogo = ({ logoImage = "/images/logo/logo-white.svg", className = "light-version-logo" }) => {
    return (
        <img src={logoImage} alt="" className={className} />
    );
};

export default BrandLogo;