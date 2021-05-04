const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
              <div class="form-group">
                <label htmlFor="name">Place Name</label>
                <input class="form-control" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label htmlFor="pic">Place Picture</label>
                <input class="form-control" id="pic" name="pic" />
              </div>
              <div class="form-group">
                <label htmlFor="city">City</label>
                <input class="form-control" id="city" name="city" />
              </div>
              <div class="form-group">
                <label htmlFor="state">State</label>
                <input class="form-control" id="state" name="state" />
              </div>
              <div class="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input class="form-control" id="cuisines" name="cuisines" required />
              </div>
              <input class="btn btn-primary" type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form