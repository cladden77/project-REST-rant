const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <div className="row justify-content-center mt-5">
                <h1>Edit Place</h1>
                </div>
                <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-8 col-sm-12">
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="form-group col-6 col-md-6 col-sm-6 m-auto">
                        <label htmlFor="name" required>Place Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={data.place.name} required />
                    </div>
                    <div className="form-group col-6 col-md-6 col-sm-6 m-auto">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group col-6 col-md-6 col-sm-6 m-auto">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-6 col-md-6 col-sm-6 m-auto">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group col-6 col-md-6 col-sm-6 m-auto">
                        <label htmlFor="cuisines" required>Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" />
                    </div>
                    <input className="btn btn-primary mt-5" type="submit" value="Add Place" />
                </form>
              </div>
              </div>

          </main>
        </Def>
    )
}

module.exports = edit_form
