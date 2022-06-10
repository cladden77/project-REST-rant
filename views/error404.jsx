const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main className="text-center">
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/404-cone.jpg" alt="melted ice cream cone" />
                <div>
                Photo by <a href="https://unsplash.com/@rojekilian?utm_source=unsplash&#38;utm_medium=referral&#38;utm_content=creditCopyText">Sarah Kilian</a> on <a href="https://unsplash.com/?utm_source=unsplash&#38;utm_medium=referral&#38;utm_content=creditCopyText">Unsplash</a>
                </div>
                </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = error404
