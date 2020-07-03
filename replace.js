const fs = require('fs')
const glob = require('glob')

glob('./docs/tags/*.md', (err, files) => {
  files.forEach(file => {
    fs.readFile(file, 'utf-8', (err, texts) => {
      const firstLine = texts.split('\n')[0]

      fs.writeFileSync(file, texts.replace(firstLine, `---
id: ${file.replace('.md', '')}
title: ${firstLine.replace('# ', '')}
sidebar_label: ${firstLine.replace('# ', '')}
---`))
    })
  })
})
