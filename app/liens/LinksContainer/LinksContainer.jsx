import { LinkAria } from '@/app/components/LinkAria/LinkAria'
import './LinksContainer.scss'

export function LinksContainer({ links, selectedCategories }) {
  return (
    <div className="cards">
      {links
        .filter((link) => selectedCategories.includes(link.category))
        .map((link) => (
          //<div key={link.name} data-linkcategory={link.category}>
            <LinkAria
            key={link.name} data-linkcategory={link.category}
              href={link.link}
              className="card"
              target="_blank"
              referrerPolicy='no-opener no-referrer'
            >
              {link.name}
            </LinkAria>
          //</div>
        ))}
    </div>
  )
}
