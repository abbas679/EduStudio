export default function JobList({ jobs, onDelete }) {
  if (jobs.length === 0) return <p>No jobs yet!</p>;

  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          {job.title} at {job.company}
          <button onClick={() => onDelete(job.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
