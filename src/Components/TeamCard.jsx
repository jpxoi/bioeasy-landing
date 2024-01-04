function TeamCard(team_member) {
    const { id, name, title, image } = team_member.team_member

    return (
        <div id={id} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg">
            <div className="flex flex-col items-center px-4 pt-4 pb-4">
                <img className="w-48 h-48 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mb-3 rounded-full shadow-lg hover:shadow-xl" src={ image } alt={ name }/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">{ name }</h5>
                <span className="text-base text-gray-500">{title}</span>
            </div>
        </div>
    )
}

export default TeamCard