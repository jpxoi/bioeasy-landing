import { useEffect } from 'react'
import mixitup from 'mixitup';
import CourseCard from '../Components/CourseCard';

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
        <section className="section__courses bg-white mt-16 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8" id="cursos">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
                Cursos
            </h1>
            <div className="courses__container">
                <div className="courses__content">
                    <div className='courses__content__filter flex items-center justify-center py-4 md:py-8 flex-wrap'>
                    <span className="courses__content__filter__item text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" data-filter="all">Todos</span>
                        {courses_categories.map((category) => (
                            <button className="courses__content__filter__item text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" data-filter={category.tag} key={category.tag}>{category.name}</button>
                        ))}
                    </div>
                    <div className="courses__content__grid grid grid-cols-2 md:grid-cols-3 gap-4">
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