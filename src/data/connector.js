import knex from 'knex'
import config from '../../knexfile'

/* istanbul ignore next */
const env = process.env.NODE_ENV || 'development'
export default knex(config[env])
