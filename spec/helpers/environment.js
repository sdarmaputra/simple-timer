const { JSDOM } = require('jsdom')

const page = new JSDOM('<!DOCTYPE html><html><title>Jasmine Test</title><body></body></html>')
const { window } = page
const { document } = window

global.window = window
global.document = document
