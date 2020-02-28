exports.seed = function(knex) {
  return knex("connectors")
    .insert([
      { color: "white", angle: 360, hasHole: 1, connections: 8},
      { color: "yellow", angle: 180, hasHole: 1, connections: 5},
      { color: "orange", angle: 180, hasHole: 1, connections: 2},
      { color: "red", angle: 90, hasHole: 1, connections: 3}
    ])
}