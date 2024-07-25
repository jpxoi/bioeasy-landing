import { Link } from 'react-router-dom'
import fallback from '.././assets/img/fallback_card.webp'
import 'react-loading-skeleton/dist/skeleton.css'

function CourseCard(course) {
    const { id, title, description, image, tag, category, link } = course.course
    const imageavif = image ? image.replace("webp", "avif") : null

    const class_name = `course__card mix ${category} max-w-sm bg-white border border-gray-200 rounded-lg shadow`
    
    return (
        <div className={class_name} id={id}>
            <div className="course__card__image">
                <picture className="rounded-t-lg">
                    <source srcSet={ imageavif ? imageavif : fallback } type="image/avif" />
                    <source srcSet={ image ? image : fallback } type="image/webp" />
                    <img className="rounded-t-lg" loading="lazy" src={ image ? image : fallback } alt={ title } width="800" height="1000"/>
                </picture>
            </div>
            <div className="text-center course__card__content p-5">
                <span className="items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-800 ring-1 ring-inset ring-teal-600/20">
                    {tag}
                </span>
                <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    {description}
                </p>
                <Link to={link} preventScrollReset={false} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 transition-all">
                    Inscríbete
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
            
        </div>
    )
}

export default CourseCard