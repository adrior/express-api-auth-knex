exports.up = function(knex) {
  return knex.schema.createTable("post", t => {
    t.increments();
    t.string("user_id");
    t.string("title");
    t.string("descr");
    t.timestamp("create_date").default(knex.fn.now());
    t.timestamp("update_date").default(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("post");
};
