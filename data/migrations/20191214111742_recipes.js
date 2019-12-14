exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table
        .string("Name", 255)
        .notNullable()
        .unique();
      table.string("instructions", 1000).notNullable();
    })
    .createTable("ingredients", table => {
      table.increments();
      table.string("Name", 255).notNullable();
    })
    .createTable("Recipe_Ingredient", table => {
      table.increments();
      table.string("Quantity", 255).notNullable();
      table
        .integer("Ingredients_Id")
        .unsigned()
        .references("id")
        .inTable("Ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      table
        .integer("Recipie_Id")
        .unsigned()
        .references("id")
        .inTable("Recipie")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Recipe_Ingredient")
    .dropTableIfExists("Ingredients")
    .dropTableIfExists("Recipes");
};
