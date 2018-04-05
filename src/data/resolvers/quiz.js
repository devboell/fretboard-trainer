import knex from '../connector'

export default () => knex('Quiz').select('*')
