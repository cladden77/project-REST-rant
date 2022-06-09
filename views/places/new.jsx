const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div>
                        <label htmlFor="name" required>Place Name</label>
                        <input id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <label htmlFor="cuisines" required>Cuisines</label>
                        <input id="cuisines" name="cuisines" />
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form