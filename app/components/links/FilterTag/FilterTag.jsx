import { FaRegWindowClose } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
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
      {categoriesList.map((category) => (
        <button
          type="button"
          key={category}
          data-category={category}
          onClick={handleClick}
          className={selectedCategories.includes(category) ? 'selected' : ''}
        >
          {category}
          {selectedCategories.includes(category) ? <IoIosCloseCircleOutline /> : null}
        </button>
      ))}
    </div>
  )
}
