exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
    })
    .createTable("ingredients", table => {
      table.increments();
    })
    .createTable("recipe_ingredients", table => {
      table.increments();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
