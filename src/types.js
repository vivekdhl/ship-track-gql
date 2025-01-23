export const typeDefs = `#graphql

type Shipment {
  id: ID!
  origin: String!
  destination: String!
  weight: Float
  customer: Customer
  trackings: [Tracking]
}

type Customer {
  id: ID!
  name: String!
  email: String
  address: String
  shipments: [Shipment]
}

type Tracking {
  id: ID!
  status: String!
  timestamp: String
  location: String
}


type Query {
    shipments: [Shipment]
    shipment(id: ID!): Shipment
    customers: [Customer]
    customer(id: ID!): Customer
}

type Mutation {
    addTracking(shipmentId: ID!, status: String!): Tracking
}

type Subscription {
    trackingAdded(shipmentId: ID!): Tracking
}

`;