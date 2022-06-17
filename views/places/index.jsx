const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-4 text-center">
          <h2>
            <a href={`/places/${place.id}`}>
                {place.name}
              </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <div className="text-center">
            Located in {place.city}, {place.state}
          </div>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row justify-content-center">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }

  module.exports = index