import knex from '../connector'

/* eslint-disable import/prefer-default-export */
export const findAll = () =>
  knex('PanelMode').select()
