import React, { useState } from "react";
import API from "../api/api";

function CreateComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await API.post("/complaints", { title, description });
    alert("Complaint submitted");
  };

  return (
    <div className="container">
      <form className="card" onSubmit={(e) => { e.preventDefault(); submit(); }}>
        <h2>Create Complaint</h2>

        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateComplaint;
