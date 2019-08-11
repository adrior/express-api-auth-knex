exports.up = function(knex) {
  return knex.schema.createTable("attachment", t => {
    t.increments();
    t.string("post_id");
    t.string("user_id");
    t.string("size");
    t.string("type");
    t.timestamp("create_date").default(knex.fn.now());
    t.timestamp("update_date").default(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("attachment");
};
