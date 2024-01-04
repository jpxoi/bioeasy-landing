import { useEffect, useState } from "react";
import TeamCard from "../Components/TeamCard"
import FetchCSVData from "../Handlers/FetchCSVData";
import Loader from "../Components/Loader";

function Team() {
  const [teamMounted, setTeamMounted] = useState(false);

  const team_data_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcfAfqGVUgswCgCf-2fhQ0SevD4S7b6HBI0nDyUzdLjSDZxjcAv7aoBoer9FJANFYDuBj6Dr3CLN0-/pub?gid=287626347&single=true&output=csv";
  const team_data = FetchCSVData(team_data_url);

  useEffect(() => {
    if (team_data) {
      setTeamMounted(true);
    }
  }, [team_data]);

  return (
    <section className="section section__team bg-white mt-8 mx-auto w-full max-w-screen-xl p-4 py-6 pt-24 lg:py-8 lg:pt-28" id="docentes">
        <h1 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
            Docentes
        </h1>
        <div className="team__container">
          {teamMounted ? "" : <Loader />}
          <div className="team__content__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
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