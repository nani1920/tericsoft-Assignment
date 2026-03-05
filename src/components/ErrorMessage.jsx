const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="error-container">
            <h2>Oops!</h2>
            <p>{message}</p>
            <button className="retry-button" onClick={onRetry}>
                Try Again
            </button>
        </div>
    );
};

export default ErrorMessage;
