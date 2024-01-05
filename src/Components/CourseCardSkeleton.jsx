import Skeleton from 'react-loading-skeleton'

function CourseCardSkeleton({cards}) {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow" key={i}>
            <div className="block course__card__image leading-none">
                <Skeleton width={800} height={1000} className="rounded-t-lg max-w-[256px] max-h-[317px] sm:max-w-[278px] sm:max-h-[347px] md:max-w-[326px] md:max-h-[407px] lg:max-w-[275px] lg:max-h-[344px] xl:max-w-[360px] xl:max-h-[450px]" />
            </div>
            <div className="text-center course__card__content p-5">
                <Skeleton width={80} className="items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-teal-600/20"/>
                <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <Skeleton width={120} />
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    <Skeleton count={7} />
                </p>
                <Skeleton width={120} height={40} />
            </div>
        </div>
    ))
}

export default CourseCardSkeleton