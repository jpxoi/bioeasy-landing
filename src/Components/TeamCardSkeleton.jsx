import Skeleton from 'react-loading-skeleton'

function TeamCardSkeleton({cards}) {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
        <div key={i} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all">
            <div className="flex flex-col items-center px-4 pt-4 pb-4">
                <Skeleton circle={true} height={200} width={200} />
                <h5 className="mb-1 text-xl text-center font-medium text-gray-900">
                    <Skeleton width={170} />
                </h5>
                <span className="text-base text-gray-500">
                    <Skeleton width={100} />
                </span>
            </div>
        </div>
    ))
}

export default TeamCardSkeleton