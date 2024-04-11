import React from 'react';

const NotificationItem = ({ type, html, value }) => {
	if (value) return(<li data-notification-type={type}>{value}</li>)
	if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
	return (<li data-notification-type={type}></li>)
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
}),
};

export default NotificationItem
