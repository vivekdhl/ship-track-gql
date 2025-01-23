import { PubSub } from "graphql-subscriptions";
import { _database } from "./db.js";

const pubSub = new PubSub();
const TRACKING_TRIGGER = "TRACKING_TRIGGER";

export const resolvers = {
    Query: {
        shipments: () => _database.shipments,
        shipment: (_, args) => _database.shipments.find(shipment => shipment.id === args.id),
        customers: () => _database.customers,
        customer: (_, args) => _database.customers.find(customer => customer.id === args.id)
    },

    Shipment: {
        customer: (parent) => _database.customers.find(customer => customer.id === parent.customerId),
        trackings: (parent) => _database.trackings.filter(track => track.shipmentId === parent.id),
    },

    Customer: {
        shipments: (parent) => _database.shipments.filter(shipment => shipment.customerId === parent.id),
    },

    Mutation: {
        addTracking: (_, args) => {
            const tracking = { shipmentId: args.shipmentId, status: args.status, id: _database.trackings.length + 1 };
            _database.trackings.push(tracking);
            pubSub.publish(`${TRACKING_TRIGGER}.${args.shipmentId}`, { trackingAdded: tracking });
            return tracking;
        }
    },

    Subscription: {
        trackingAdded: {
            subscribe: (_, args) => pubSub.asyncIterableIterator([`${TRACKING_TRIGGER}.${args.shipmentId}`])
        }
    }
}