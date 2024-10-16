export function CardsContainer({ links, selectedCategories }) {
  return (
    <div className="cards">
      {links
        .filter((link) => selectedCategories.includes(link.category))
        .map((link) => (
          <div
            key={link.name}
            className="card"
          >
            <h3>{link.name}</h3>
          </div>
        ))}
    </div>
  )
}
