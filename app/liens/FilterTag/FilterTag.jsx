import { FaRegWindowClose } from 'react-icons/fa'
import { MdClose } from "react-icons/md";
import './FilterTag.scss'

export function FilterTag({
  categoriesList,
  selectedCategories,
  onChangeCategories,
}) {
  function handleClick(e) {
    //e.prevent.default()
    const category = e.currentTarget.dataset.category
    onChangeCategories(category)
  }

  return (
    <div className="filters">
      <div>
        <p>Filtrer:</p>
      </div>
      <div>
        {categoriesList.map((category) => (
          <button
            type="button"
            key={category}
            data-category={category}
            onClick={handleClick}
            className={selectedCategories.includes(category) ? 'selected' : ''}
          >
            {category}
            {selectedCategories.includes(category) ? (
              <MdClose />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  )
}
