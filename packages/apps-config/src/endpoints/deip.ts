// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';


export function createDeip(t: TFunction): LinkOption[] {

  return [
    {
      isHeader: true,
      text: t('rpc.deip', 'DEIP environment', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    {
      info: 'deip',
      homepage: 'https://deip.world',
      text: t('rpc.deip.endpoint', 'DEIP endpoint', { ns: 'apps-config' }),
      textBy: "Octopus Network",
      // TODO: replace with Mainnet endpoint
      value: ""
    }
  ]
}


export function createTestnetDeip(t: TFunction): LinkOption[] {

  return [
    {
      isHeader: true,
      text: t('rpc.deip.testnet', 'DEIP Testnet environment', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    {
      info: 'deip',
      homepage: 'https://deip.world',
      text: t('rpc.deip.testnet.endpoint', 'DEIP Testnet endpoint', { ns: 'apps-config' }),
      textBy: "Octopus Network",
      value: "wss://gateway.testnet.octopus.network/deip/46v4p8ss613olf92p2scmsjud68mhzrr"
    }
  ]
}