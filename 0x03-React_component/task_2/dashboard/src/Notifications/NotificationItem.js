import React from 'react';

class NotificationItem extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		if (this.props.value) {
			return(<li data-notification-type={this.props.type} onClick={() => {this.props.markAsRead(this.props.id)}} >{this.propsvalue}</li>)
		} else {
			return(<li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {this.props.markAsRead(this.props.id)}}></li>)
		}
	}
}
NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {}
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
}),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem
