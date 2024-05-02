import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
	return notificationItem.default
	.filter((item) => item.author.id === userId)
	.map(({ context }) => context);
};

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {
	idAttribute: 'guid'
});
const notification = new schema.Entity("notifications", {
	author: user,
	context: message
});

export const normalziedData = normalize(notificationItem.default, [notification])
