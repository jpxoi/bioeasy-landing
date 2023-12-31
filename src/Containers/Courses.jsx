import { useEffect } from 'react'
import mixitup from 'mixitup';
import CourseCard from '../Components/CourseCard';
import CourseFilter from '../Components/CourseFilter';

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

    let courses_categories = [
        {
            tag: ".ciencias-basicas",
            name: "Ciencias Básicas"
        },
        {
            tag: ".ciencias-clinicas",
            name: "Ciencias Clínicas"
        },
        {
            tag: ".ciencias-quirurgicas",
            name: "Ciencias Quirúrgicas"
        }
    ]

    let courses_data = [
        {
            id: 1,
            title: "Curso 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            tag: "Ciclo I",
            category: "ciencias-basicas",
            link: "#"
        },
        {
            id: 2,
            title: "Curso 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            tag: "Ciclo I",
            category: "ciencias-basicas",
            link: "#"
        },
        {
            id: 3,
            title: "Curso 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            tag: "Ciclo I",
            category: "ciencias-clinicas",
            link: "#"
        },
        {
            id: 4,
            title: "Curso 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            tag: "Ciclo I",
            category: "ciencias-clinicas",
            link: "#"
        },
        {
            id: 5,
            title: "Curso 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            tag: "Ciclo I",
            category: "ciencias-quirurgicas",
            link: "#"
        },
        {
            id: 6,
            title: "Curso 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            tag: "Ciclo I",
            category: "ciencias-quirurgicas",
            link: "#"
        }
    ]

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