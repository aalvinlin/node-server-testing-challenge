exports.seed = function(knex) {
  return knex("rods")
    .insert([
      { color: "green", length: 1, length_unit: "green"},
      { color: "white", length: 1, length_unit: "white"},
      { color: "blue", length: 2, length_unit: "green"},
      { color: "yellow", length: 2, length_unit: "white"}
    ])
}