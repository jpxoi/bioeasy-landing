import { useEffect, useState } from "react";
import TeamCard from "../Components/TeamCard"
import FetchCSVData from "../Handlers/FetchCSVData";
import TeamCardSkeleton from "../Components/TeamCardSkeleton";

function Team() {
  const [teamMounted, setTeamMounted] = useState(false);

  const team_data_url = import.meta.env.VITE_TEAM_DATA_URL;
  const team_data = FetchCSVData(team_data_url);

  useEffect(() => {
    if (team_data) {
      setTeamMounted(true);
    }
  }, [team_data]);

  return (
    <section className="section section__team bg-white mt-8 mx-auto w-full max-w-screen-xl p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="docentes">
        <h2 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
            Docentes
        </h2>
        <div className="team__container">
          <div className="team__content__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 justify-items-center">
            {teamMounted ? "" : <TeamCardSkeleton cards={16} />}
            {team_data ? team_data.map((team_member) => (
                  <TeamCard
                      key={team_member.id}
                      team_member={team_member}
                  />
            )) : console.log("Loading Team Data...")}
          </div>
        </div>
    </section>
  )
}

export default Team