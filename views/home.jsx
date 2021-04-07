const React = require('react')
const Default = require('./layouts/Default')

function Home () {

    return (
      <Default title="404">
        <h1>Uh oh! There isn't a page here!</h1>
        <h2><a href="/breads">Go back to breads</a></h2>
      </Default>
    )
}

module.exports = Home
