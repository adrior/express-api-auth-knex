exports.up = function(knex) {
  return knex.schema.createTable("user", t => {
    t.increments();
    t.string("username");
    t.string("display_name");
    t.string("facebook_id");
    t.string("vk_id");
    t.string("email");
    t.string("userpic_path");
    t.string("role");
    t.timestamp("reg_date").default(knex.fn.now());
    t.timestamp("last_visit_date").default(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
