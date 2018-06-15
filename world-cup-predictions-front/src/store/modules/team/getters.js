const teamsByGroup = (state) => {
  const groups = {};
  const teams = [...state.list].sort((a, b) => a.id - b.id);

  // Group teams by group name
  teams.forEach((team) => {
    if (!groups[team.group]) {
      groups[team.group] = [];
    }
    groups[team.group].push(team);
  });
  return groups;
};

const wildcards = (state) => {
  const teams = [...state.list].sort((a, b) => a.id - b.id);

  // eslint-disable-next-line
  return teams.map((team) => {
    return {
      id: team.id,
      flag_code: team.flag_code,
      name: team.name,
    };
  });
};

export default {
  teamsByGroup,
  wildcards,
};
