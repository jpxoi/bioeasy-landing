function CourseFilter(data) {

  const courses_categories = data.data

  return (
    <div className='courses__content__filter flex flex-col sm:flex-row items-center justify-center py-4 md:py-8 flex-wrap'>
      <button className="courses__content__filter__item text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" data-filter="all">
        Todos
      </button>
      {courses_categories.map((category) => (
        <button className="courses__content__filter__item text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" data-filter={category.tag} key={category.tag}>
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CourseFilter