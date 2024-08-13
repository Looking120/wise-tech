const InfoItem = ({ iconSrc, title, content, style }) => {
    return (
        <div className="info-item" style={style}>
        <div className="info-icon">
            <img src={iconSrc} alt={title} />
        </div>
        <div className="info-content">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
        </div>
    );
};
export default InfoItem ;