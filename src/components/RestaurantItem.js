import React from "react"

const googleDirectionsFormatter = (name, { street, postCode, city }) => {
  const formattedName = name => encodeURI(`${name} `)
  const formattedStreet = street => encodeURI(`${street} `)
  const formattedPostcode = postCode => encodeURI(`${postCode} `)
  const formattedCity = city => encodeURI(city)
  const gleerupsAdress = encodeURI("Hans Michelsensgatan 9 21120 MALMÖ")

  return `https://www.google.com/maps/dir/?api=1&origin=${gleerupsAdress}&destination=${formattedName(
    name
  ) +
    formattedStreet(street) +
    formattedPostcode(postCode) +
    formattedCity(city)}&travelmode=walking`
}

const RestaurantItem = (
  { id, name, emoji, address, position, menuItems, description, distance },
  props
) => (
  <section>
    <div className="restaurant__title">
      <h2>{`${name} ${emoji}`}</h2>
      <h4>
        {`${distance} km`}
        {distance > 0.4 ? "🏃‍♀️" : "🚶‍♀️"}
      </h4>
    </div>
    <div className="restaurant__body">
      <div className="restaurant__address-section">
        <div className="restaurant__desc">
          {!!description ? (
            <p>{description}</p>
          ) : (
            <p>Ingen beskrivning ännu.</p>
          )}
        </div>
        <a
          href={`${googleDirectionsFormatter(name, address)}`}
          className="address__directions-section"
          target="_blank"
        >
          <h4 className="restaurant__address">🌍 Vägbeskrivning:</h4>
          <p className="restaurant__address">{`${address.street}`}</p>
        </a>
      </div>
      <div className="restaurant__item-section">
        {menuItems.length < 1 ? (
          <h3>Inga luncher idag! 😔</h3>
        ) : (
          <React.Fragment>
            <h3>Dagens rätter :</h3>
            <ul className="restaurant__menuitems">
              {menuItems.map((item, index) => (
                <li key={index}>{item.dish}</li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    </div>
  </section>
)

export default RestaurantItem
