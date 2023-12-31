import { useEffect } from 'react'
import mixitup from 'mixitup';
import CourseCard from '../Components/CourseCard';
import CourseFilter from '../Components/CourseFilter';
import courses_categories from '../assets/db/courses_categories.json';
import courses_data from '../assets/db/courses_data.json';

function Courses() {
    useEffect(() => {
        const containerEl = document.querySelector('.courses__content__grid');
        let mixer;

        if (containerEl) {
            mixer = mixitup('.courses__content__grid', {
                selectors: {
                    target: ".course__card"
                },
                animation: {
                    duration: 300
                }
            })
            console.log(mixer)
        }
    }, [])

    return (
        <section className="section section__courses bg-white mt-8 mx-auto w-full max-w-screen-xl p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="cursos">
            <h1 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
                Cursos
            </h1>
            <div className="courses__container">
                <div className="courses__content">
                    <CourseFilter
                      data={courses_categories}
                    />
                    <div className="courses__content__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                        {courses_data.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses