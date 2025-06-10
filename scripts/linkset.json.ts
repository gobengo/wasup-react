#!/usr/bin/env node --no-warnings

import { parseArgs } from 'node:util'

const args = parseArgs({
  options: {
    server: {
      type: 'string',
    },
    space: {
      type: 'string',
      default: process.env.SPACE_UUID || crypto.randomUUID(),
    }
  }
})
const spaceUuid = args.values.space
const id = `urn:uuid:${spaceUuid}`
const SPACE_PATH = `/space/${spaceUuid}`
const linkset = {
  "linkset": [
    {
      "anchor": `${SPACE_PATH}/`,
      "acl": [
        {
          "href": `${SPACE_PATH}/acl.json`
        }
      ]
    },
  ]
}
console.info(JSON.stringify(linkset, null, 2))
