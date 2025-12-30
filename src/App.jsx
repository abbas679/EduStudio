import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import useJobs from "./hooks/useJobs";
import { useState } from "react";

function App() {
  const { jobs, addJob, deleteJob } = useJobs();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Filter and search jobs dynamically
  const filteredJobs = jobs.filter((job) => {
    const matchesStatus = filter === "all" || job.status === filter;
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      <h1>JobTrack Pro</h1>

      {/* Job Form */}
      <JobForm onAdd={addJob} />

      {/* Filters */}
      <div style={{ margin: "10px 0" }}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
        </select>

        <input
          type="text"
          placeholder="Search by title or company"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* Job List */}
      <JobList jobs={filteredJobs} onDelete={deleteJob} />
    </div>
  );
}

export default App;
