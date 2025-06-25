#!/usr/bin/env node --no-warnings

import { execSync } from "child_process"

const env_WASUP_REACT_SPACE_UUID = globalThis?.process?.env?.WASUP_REACT_SPACE_UUID
const uuid = env_WASUP_REACT_SPACE_UUID || crypto.randomUUID()
console.debug(uuid)
