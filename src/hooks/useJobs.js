import { useState, useEffect } from "react";

export default function useJobs() {
  // Load jobs from localStorage or start empty
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Add a new job
  const addJob = (job) => {
    setJobs((prev) => [...prev, { ...job, id: Date.now() }]);
  };

  // Delete a job
  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // Update job status (optional)
  const updateJob = (id, newData) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, ...newData } : job))
    );
  };

  return { jobs, addJob, deleteJob, updateJob };
}
