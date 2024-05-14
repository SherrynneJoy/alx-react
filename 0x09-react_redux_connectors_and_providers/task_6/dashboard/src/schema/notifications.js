import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';
import immutable from 'immutable';

const { Map, setIn } = immutable;

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
export const getAllNotificationsByUser = (userId) => {
	const entityNotification = normalizedData.entities.notifications;
	const entityMessage = normalizedData.entities.messages;
	const data = [];

	for (let item in entityNotification) {
		if (entityNotification[item].author === userId) {
			const contextMessage = entityNotification[item].context;
			data.push(entityMessage[contextMessage])
		}
	}
	return data;
};

export default function notificationsNormalizer(data) {
        return normalize(data, [notification]).entities
}
