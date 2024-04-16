import React from 'react';
import { StyleSheet, css };

const styles = StyleSheet.create({
	urgent: {
		color: "red"
	}
	default: {
		color: "blue"
	}
});
class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);

	}
	render() {
		if (this.props.value) {
			return(<li data-notification-type={this.props.type} onClick={() => {this.props.markAsRead(this.props.id)}} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default >{this.propsvalue}</li>)
		} else {
			return(<li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {this.props.markAsRead(this.props.id)}} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default)}></li>)
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
