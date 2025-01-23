const _Customers = [
    {
        "id": "1",
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com"
    },
    {
        "id": "2",
        "name": "Bob Smith",
        "email": "bob.smith@example.com"
    },
    {
        "id": "3",
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com"
    }
];

const _Shipments = [
    {
        "id": "1",
        "customerId": "1",
        "origin": "New York, NY",
        "destination": "Los Angeles, CA",
        "status": "Pending"
    },
    {
        "id": "2",
        "customerId": "2",
        "origin": "San Francisco, CA",
        "destination": "Chicago, IL",
        "status": "In Transit"
    },
    {
        "id": "3",
        "customerId": "3",
        "origin": "Houston, TX",
        "destination": "Miami, FL",
        "status": "Delivered"
    }
]

const _Trackings = [
    {
        "id": "1",
        "shipmentId": "1",
        "location": "Philadelphia, PA",
        "timestamp": "2025-01-19T10:00:00Z",
        "status": "In Transit"
    },
    {
        "id": "2",
        "shipmentId": "1",
        "location": "Pittsburgh, PA",
        "timestamp": "2025-01-19T14:00:00Z",
        "status": "In Transit"
    },
    {
        "id": "3",
        "shipmentId": "2",
        "location": "Salt Lake City, UT",
        "timestamp": "2025-01-18T08:00:00Z",
        "status": "In Transit"
    },
    {
        "id": "4",
        "shipmentId": "2",
        "location": "Denver, CO",
        "timestamp": "2025-01-18T12:00:00Z",
        "status": "In Transit"
    },
    {
        "id": "5",
        "shipmentId": "1",
        "location": "Atlanta, GA",
        "timestamp": "2025-01-17T09:00:00Z",
        "status": "Delivered"
    },
    {
        "id": "6",
        "shipmentId": "2",
        "location": "Orlando, FL",
        "timestamp": "2025-01-17T15:00:00Z",
        "status": "Delivered"
    }
]

export const _database = {
    shipments: _Shipments,
    customers: _Customers,
    trackings: _Trackings
};