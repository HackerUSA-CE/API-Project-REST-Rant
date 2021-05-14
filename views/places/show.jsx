const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
              </div>
              <div className="col-sm-6">
                <h1>{ data.place.name }</h1>
                <h2>
                  Rating
                </h2>
                <h3 className="inactive">
                  Not Rated
                </h3>
                <br />
                <h2>
                  Description
                </h2>
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
                <h3>
                  Serving {data.place.cuisines}
                </h3>
                <br />
                <a href={`/places/${data.i}/edit`} className="btn btn-warning">
                  Edit
                </a>{` `}
                <form method="POST" action={`/places/${data.i}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </div>
            </div>
            <hr />
            <h2>Comments</h2>
            <h3 className="inactive">
              No comments yet!
            </h3>
          </main>
        </Def>
    )
}

module.exports = show