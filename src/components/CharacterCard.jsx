const CharacterCard = ({ character }) => {
    return (
        <article className="post-card character-card">
            <div className="card-image db-image">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="card-content">
                <div className="stats-header">
                    <span className="id-badge">{character.race}</span>
                    <span className="ki-badge">Ki: {character.ki}</span>
                </div>
                <h3>{character.name}</h3>
                <p className="description">{character.description?.substring(0, 100)}...</p>
                <div className="extra-info">
                    <span><strong>Gender:</strong> {character.gender}</span>
                </div>
            </div>
        </article>
    );
};

export default CharacterCard;
