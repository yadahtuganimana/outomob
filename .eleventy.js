module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('fonts')
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine:"njk",
    templateFormats: ["html","njk","md"]
    dir: {
      include: "includes"
    }
  }
}
