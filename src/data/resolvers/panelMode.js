import * as PanelMode from '../models/panelMode'

/* eslint-disable import/prefer-default-export */
export const panelModes = async () =>
  PanelMode.findAll()
