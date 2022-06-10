const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/food-img.jpg" alt="chia Fruit Drink" />
                <div>
                  Photo by <a href="https://unsplash.com/photos/MsTOg6rhRVk#:~:text=Photo%20by-,Brenda%20Godinez,-on%20Unsplash">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home