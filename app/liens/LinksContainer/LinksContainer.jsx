import './LinksContainer.scss'

export function LinksContainer({ links, selectedCategories }) {
  return (
    <div className="cards">
      {links
        .filter((link) => selectedCategories.includes(link.category))
        .map((link) => (
          <div key={link.name} data-linkcategory={link.category}>
            <a
              href={link.link}
              className="card"
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          </div>
        ))}
    </div>
  )
}
