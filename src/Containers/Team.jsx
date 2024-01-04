import TeamCard from "../Components/TeamCard"
import team_data from "../assets/db/team_data.json"

function Team() {
  return (
    <section className="section section__team bg-white mt-8 mx-auto w-full max-w-screen-xl p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="docentes">
        <h1 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
            Docentes
        </h1>
        <div className="team__container">
          <div className="team__content__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {team_data.map((team_member) => (
                  <TeamCard
                      key={team_member.id}
                      team_member={team_member}
                  />
            ))}
          </div>
        </div>
    </section>
  )
}

export default Team