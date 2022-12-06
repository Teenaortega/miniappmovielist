/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE movie_list CASCADE')
  await knex('movie_list').del()
  await knex('movie_list').insert([
    {id: 1, name: 'Mean Girls'},
    {id: 2, name: 'Hackers'},
    {id: 3, name: 'The Grey'},
    {id: 4, name: 'Sunshine'},
    {id: 5, name: 'Ex Machina'}
  ]);
};