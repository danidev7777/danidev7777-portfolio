import { useEffect, useState } from "react";
import axios from "axios";
import gitGraph from "../assets/gitActivity.png";

const GitLabActivities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8012/dwalker");
        console.log("response.data", response.data);
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching GitLab activities:", error);
      }
    }

    fetchData();
  }, []);

  console.log("GitLab response: ", activities);
  return (
    <>
      <img src={gitGraph} alt="git-lab-activities" className="mx-auto" />
    </>
  );
};
export default GitLabActivities;
