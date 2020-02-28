
exports.up = function(knex) {
  return knex.schema
    .createTable("connectors", table => {
        table.increments();

        table.string("color", 32)
            .unique()
            .notNullable()

        table.integer("angle")
            .notNullable()
            .unsigned()

        table.boolean("hasHole")
            .notNullable()

        table.integer("connections")
            .notNullable()
    })
    .createTable("rods", table => {
        table.increments();

        table.string("color", 32)
            .unique()
            .notNullable()
        
        table.integer("length")
            .unsigned()

        table.string("length_unit")

        table.boolean("flexible")
            .notNullable()
            .defaultTo(0)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("rods")
    .dropTableIfExists("connectors");
};
