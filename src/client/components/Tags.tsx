import React from "react";
import { useEffect, useState } from "react";
import {Tag} from "../models/tags.model"

function Tags() {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    fetch('/api/tags')
      .then(response => response.json())
      .then(tags => setTags(tags))
  }, [])

  return (
    <div className="Tags">
      <ul>
        {
          tags.map((t, idx) => (
            <li key={idx}>
              <a href={`/tema/${t.slug}`} className={idx !== (tags.length - 1) ? "separator" : ""}>
                {t.text}
              </a>
            </li>
          ))
        }
      </ul>
    </div>

  );
}

export default Tags;