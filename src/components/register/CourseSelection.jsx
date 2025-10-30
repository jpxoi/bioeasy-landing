/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";

export default function CourseSelection({ coursesData, courseSelected }) {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3 leading-none">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-course-select"
        >
          Curso Académico
        </label>
        {coursesData ? "" : <Skeleton className="mb-2" height={46} />}
        {coursesData ? (
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-hidden focus:bg-white focus:border-teal-700 mb-2 focus-visible:invalid:bg-red-50 focus-visible:invalid:border-red-500 focus-visible:valid:bg-green-50 focus-visible:valid:border-green-500 valid:border-teal-700"
            required
            id="grid-course-select"
            name="course"
            defaultValue={courseSelected ? courseSelected : ""}
          >
            <option value="" disabled="disabled">
              Seleccione
            </option>
            {coursesData
              ? coursesData.map((course, index) => {
                  if (course.available == "TRUE") {
                    return (
                      <option
                        key={index}
                        // eslint-disable-next-line react/no-unknown-property
                        category={course.cycle}
                        value={course.id}
                      >
                        {course.name}
                      </option>
                    );
                  }
                })
              : console.log("Loading Courses Data...")}
          </select>
        ) : (
          ""
        )}
        <p className="text-gray-600 text-xs italic">
          Los cursos disponibles pueden variar según el ciclo de estudios
          seleccionado.
        </p>
      </div>
    </div>
  );
}
