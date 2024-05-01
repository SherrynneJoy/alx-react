import * as notificationItem from "../../notifications.json";

export default function getAllNotificationsByUser(userId) {
	return notificationItem.default
	.filter((item) => item.author.id === userId)
	.map(({ context }) => context);
};
