const API_ENDPOINT = `${import.meta.env.VITE_API_ENDPOINT}/api/${import.meta.env.VITE_API_VERSION}`;

export async function FetchTeamMembers() {
  try {
    const response = await fetch(`${API_ENDPOINT}/team`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function FetchUniversities() {
    try {
        const response = await fetch(`${API_ENDPOINT}/universities`);
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(error);
        return null;
    }
}

export async function FetchCourseData({ university, academic_cycle } = {}) {
  try {
    const params = new URLSearchParams();
    
    if (university) params.append("university", university);
    if (academic_cycle) params.append("academic_cycle", academic_cycle);
    
    const query = params.toString() ? `?${params.toString()}` : "";
    
    const response = await fetch(`${API_ENDPOINT}/courses${query}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
    return null;
  }
}