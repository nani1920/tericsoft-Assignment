const Loader = () => {
    return (
        <div className="loader-container">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton skeleton-card"></div>
            ))}
        </div>
    );
};

export default Loader;
