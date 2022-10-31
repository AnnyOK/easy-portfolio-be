/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//  npx knex migrate:latest --knexfile db/knexfile.js
exports.up = function(knex) {
    return knex.schema.createTable('user_profile',table=>{
        table.increments('id')
        table.uuid('user_id').primary()
        table.string('email').notNullable().unique()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('Role').notNullable()
        table.string('Address').notNullable()
        table.timestamps(true,true)
    })
    .createTable('my_jobs',table=>{
        table.string('jobs_type')
        table.string('description')
        table.uuid('owner_user_id')
      .references('user_id')
      .inTable('user_profile')
    })
    .createTable('work_experience',table=>{
        table.uuid('work_id')
        table.string('job_title')
        table.string('company')
        table.date('from')
        table.date('to')
        table.uuid('owner_user_id')
      .references('user_id')
      .inTable('user_profile')
    })
  .createTable('job_descriptions', table=>{
    table.string('description')
    table.uuid('description_id')
    .references('work_id')
    .inTable('work_experience')
  })
  .createTable('education',table=>{
    table.string('course_of_study')
    table.string('school_attended')
    table.string('certificate_gained')
    table.date('from')
    table.date('to')
    table.string('comments')
    table.uuid('owner_user_id')
      .references('user_id')
      .inTable('user_profile')
  })
  .createTable('projects',table=>{
    table.uuid('project_id')
    table.string('project_name')
    table.string('project_link')
    table.string('project_description')
    table.string('screenshot')
    table.uuid('owner_user_id')
      .references('user_id')
      .inTable('user_profile')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user_profile')
};
