#!/usr/bin/env node

import { mcpServerFactory } from './core/mcp-server'
import { meta } from './meta'
import { tools } from './tools'

const server = mcpServerFactory({ name: meta.name, version: meta.version }, {})

server.make(tools)
server.start()