#!/usr/bin/env node

import { parseArgs } from 'node:util'
const options = {
}
const args = parseArgs({ options })
const acl = {
  type: "PublicCanRead"
}
console.info(JSON.stringify(acl, null, 2))
