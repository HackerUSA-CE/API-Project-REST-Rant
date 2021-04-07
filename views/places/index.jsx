const React = require('react')
const Default = require('../layouts/Default')
console.log(Default)
function Index ({places = []}) {
    return (
      <Default>
      <div>
        <h2>index</h2>
        <main>
         <ul>
          {
            places.map((place, index) => {
              return (
                <li key={place._id}>{place.name}</li>
              )
            })
          }
        </ul>
        </main>
      </div>
      </Default>
    )
}

module.exports = Index
