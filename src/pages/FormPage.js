import React, { useState } from "react";

export default function FormPage() {
  const [comment, setComment] = useState("");

  return (
    <div>
      <form>
        <input type="text" name="firstName" value={comment} />
      </form>
    </div>
  );
}
