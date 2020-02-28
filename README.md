# Server Testing

## Topics

- automated testing.
- jest testing framework.
- supertest module.

## Assignment

For this project you will use `Test Driven Development` to create a RESTful API using `Node.js` and `Express` that publishes a set of endpoints to manage a _resource_ of your choosing. Data can be stored in memory, adding a **test database is optional**.

## Download Project and Install Dependencies

- fork and clone this repository.
- **CD into the folder** where you downloaded the repository.
- run `npm i` to download all dependencies.
- type `npm test` to run the tests.

## Requirements

- use `jest` and `supertest` to write the tests.
- Your API must be able to **create** and **delete** a _resource_ of your choosing.
- Write a minimum of two tests per route handler.

# Endpoints

## GET /api/connectors

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|200|Success|Get a list of all connectors|none|array|
|500|Error|Server error|"Could not retrieve connectors."|none|

## GET /api/rods

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|200|Success|Get a list of all rods|none|array|
|500|Error|Server error|"Could not retrieve rods."|none|

## GET /api/connectors/:color

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|200|Success|Get the connector with specified color|none|object|
|400|Error|Info not found|Could not retrieve data for a (color) connector.|none|
|500|Error|Server error|Could not retrieve connector.|none|

## GET /api/rods/:color

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|200|Success|Get the rod with specified color|none|object|
|400|Error|Info not found|Could not retrieve data for a (color) rod.|none|
|500|Error|Server error|Could not retrieve rod.|none|

## POST /api/connectors

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|201|Success|Get the connector with specified color|none|object|
|400|Error|Required info missing|Must include color, angle, hasHole, and connections properties.|none|
|500|Error|Server error|Could not add connector.|none|

## POST /api/rods

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|201|Success|Get the rod with specified color|none|object|
|400|Error|Required info missing|Must include color property.|none|
|500|Error|Server error|Could not add rod.|none|

## DELETE /api/connectors/:color

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|200|Success|The connector with specified color was deleted.|Data for the (color) connector was deleted.|object|
|500|Error|Server error|Could not retrieve data for a (color) connector.|none|

## DELETE /api/rods/:color

|Status|Type|Description|Message|Return Value|
|------|----|-----------|-------|------------|
|200|Success|The rod with specified color was deleted.|Data for the (color) rod was deleted.|object|
|500|Error|Server error|Could not retrieve data for a (color) rod.|none|
