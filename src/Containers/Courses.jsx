import { useEffect, useState } from 'react'
import mixitup from 'mixitup';
import CourseCard from '../Components/CourseCard';
import CourseFilter from '../Components/CourseFilter';
import courses_categories from '../assets/db/courses_categories.json';
import FetchCSVData from '../Handlers/FetchCSVData';
import Loader from '../Components/Loader';

function Courses() {
    const [coursesMounted, setCoursesMounted] = useState(false);

    useEffect(() => {
        if (coursesMounted) {
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
                });
                console.log(mixer);
            }
        }
    }, [coursesMounted]);

    const courses_data_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcfAfqGVUgswCgCf-2fhQ0SevD4S7b6HBI0nDyUzdLjSDZxjcAv7aoBoer9FJANFYDuBj6Dr3CLN0-/pub?output=csv";
    const courses_data = FetchCSVData(courses_data_url);

    useEffect(() => {
        if (courses_data) {
            setCoursesMounted(true);
        }
    }, [courses_data]);

    return (
        <section className="section section__courses bg-white mx-auto w-full max-w-screen-xl p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="cursos">
            <h1 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
                Cursos
            </h1>
            <div className="courses__container">
                <div className="courses__content">
                    <CourseFilter
                      data={courses_categories}
                    />
                    {coursesMounted ? "" : <Loader />}
                    <div className="courses__content__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 justify-items-center max-w-screen-xl">
                        {courses_data ? courses_data.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                            />
                        )) : console.log("Loading Courses Data...")}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses