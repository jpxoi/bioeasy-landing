function WhyCard(why_description) {

    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-all grid items-center">
            <p className="my-2 font-normal text-center text-gray-700 select-none">{why_description.why_description}</p>
        </div>
    )
}

export default WhyCard