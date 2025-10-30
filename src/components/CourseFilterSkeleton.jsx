import Skeleton from 'react-loading-skeleton'

function CourseFilterSkeleton() {
    return(
        <div className='courses__content__filter flex flex-col sm:flex-row items-center justify-center py-4 md:py-8 flex-wrap'>
            <Skeleton width={85} height={40} className="me-3 mb-3" />
            <Skeleton width={160} height={40} className="me-3 mb-3" />
            <Skeleton width={160} height={40} className="me-3 mb-3" />
            <Skeleton width={180} height={40} className="me-3 mb-3" />
        </div>
    )
}

export default CourseFilterSkeleton