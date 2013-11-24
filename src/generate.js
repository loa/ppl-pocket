var markdownpdf = require("markdown-pdf")
  , fs = require("fs")
  , opts = { "options.paperFormat" : "a5"}

markdownpdf("markdown/luftfartyg_generellt.md", function (er, pdfPath) {
  if (er) return console.error(er)

  // Move the pdf from the tmp path to where you want it
  fs.rename(pdfPath, "luftfartyg_generellt.pdf", function() {
    console.log("done")
  })
})
