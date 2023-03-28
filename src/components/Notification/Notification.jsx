import PropTypes from 'prop-types';

export default function Notification ({message}) {
    return (
        <h1>
            {message}
        </h1>
    )
}

Notification.propTypes ={
    message: PropTypes.string.isRequired,
}