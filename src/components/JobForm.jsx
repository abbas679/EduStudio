import { useState } from "react";

export default function JobForm({ onAdd }) {
  const [job, setJob] = useState({ title: "", company: "", status: "applied" });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.title || !job.company) return;
    onAdd(job);
    setJob({ title: "", company: "", status: "applied" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Job Title"
        value={job.title}
        onChange={handleChange}
      />
      <input
        name="company"
        placeholder="Company"
        value={job.company}
        onChange={handleChange}
      />
      <select name="status" value={job.status} onChange={handleChange}>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="rejected">Rejected</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
}
