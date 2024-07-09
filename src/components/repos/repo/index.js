
import PropTypes from 'prop-types';

const Repo = ({ url, avatar_url, name, owner, description }) => {
    return (
        <div id="repos" >
            <a target="_blank" className="repo" href={url}>
                <img src={avatar_url} alt="avatar" />
                <div className="repo-info">
                    <h2>{name}</h2>
                    <h3>{owner}</h3>
                    <p>{description != null && description.length < 60 &&
                        <p>{description}</p>}
                        {description != null && description.length > 60 && <p>`${description.substring(0, 60)}...`</p>}</p>
                </div>
            </a>
        </div >
    )
};

Repo.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    avatar_url: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
}

export default Repo;