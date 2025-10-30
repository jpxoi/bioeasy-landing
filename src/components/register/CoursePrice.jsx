/* eslint-disable react/prop-types */

export default function CoursePrice({ orderPrice }) {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-course-price"
        >
          Precio del Curso
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 placeholder:font-normal font-bold text-teal-700 border border-gray-200 rounded-sm py-3 px-4 leading-tight focus:outline-hidden focus:bg-gray-200 focus:border-gray-200 mb-2"
          id="grid-course-price"
          name="price"
          type="text"
          readOnly
          placeholder="S/ 0.00"
          value={orderPrice}
        />
        <p className="text-gray-600 text-xs italic">
          El precio del curso se calcula automáticamente según el curso
          seleccionado.
        </p>
      </div>
    </div>
  );
}
