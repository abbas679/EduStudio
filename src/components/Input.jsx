export default function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{ display: "block" }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}
